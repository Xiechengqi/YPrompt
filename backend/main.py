"""
FastAPI 应用入口
"""
import os
import sys
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from contextlib import asynccontextmanager
from loguru import logger

from apps.utils.db_utils import init_database, close_database
from apps.utils.jwt_utils import JWTUtil
from config.settings import Config


# 配置 loguru 日志
def setup_logging():
    """配置 loguru 日志系统"""
    # 移除默认的handler
    logger.remove()
    
    # 控制台输出（带颜色）
    logger.add(
        sys.stdout,
        format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
        level="INFO",
        colorize=True
    )
    
    # 日志文件输出
    # 尝试多个可能的路径
    possible_log_dirs = [
        Path('../data/logs/backend'),
        Path('data/logs/backend'),
        Path('/app/data/logs/backend'),
    ]
    
    log_dir = None
    for dir_path in possible_log_dirs:
        if dir_path.exists() or dir_path.parent.exists():
            log_dir = dir_path
            break
    
    if not log_dir:
        # 如果都不存在，使用第一个路径并创建
        log_dir = possible_log_dirs[0]
    
    log_dir.mkdir(parents=True, exist_ok=True)
    
    # INFO级别日志
    logger.add(
        log_dir / 'info.log',
        format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
        level="INFO",
        rotation="10 MB",
        retention="10 days",
        compression="zip",
        encoding="utf-8"
    )
    
    # ERROR级别日志
    logger.add(
        log_dir / 'error.log',
        format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
        level="ERROR",
        rotation="10 MB",
        retention="30 days",
        compression="zip",
        encoding="utf-8",
        backtrace=True,
        diagnose=True
    )
    
    logger.info(f"📝 日志系统初始化完成，日志目录: {log_dir}")

# 初始化日志
setup_logging()


@asynccontextmanager
async def lifespan(app: FastAPI):
    """应用生命周期管理"""
    # 启动时初始化
    logger.info("🚀 启动 YPrompt 服务...")
    
    # 初始化数据库
    await init_database(app)
    
    # 初始化 JWT
    JWTUtil.init_app()
    
    logger.info("✅ 服务启动完成")
    
    yield
    
    # 关闭时清理
    logger.info("🛑 关闭 YPrompt 服务...")
    await close_database(app)
    logger.info("✅ 服务已关闭")


# 创建 FastAPI 应用
app = FastAPI(
    title="YPrompt API",
    description="提示词管理系统 API",
    version="1.0.0",
    lifespan=lifespan
)

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 导入并注册路由
try:
    from apps.modules.auth.views import router as auth_router
    from apps.modules.prompts.views import router as prompts_router
    from apps.modules.tags.views import router as tags_router
    from apps.modules.versions.views import router as versions_router
    from apps.modules.prompt_rules.views import router as prompt_rules_router
    
    app.include_router(auth_router)
    app.include_router(prompts_router)
    app.include_router(tags_router)
    app.include_router(versions_router)
    app.include_router(prompt_rules_router)
except ImportError as e:
    logger.warning(f"⚠️  部分路由模块导入失败: {e}")


# 配置静态文件服务
frontend_dist = None


def setup_static_files():
    """配置静态文件服务"""
    global frontend_dist
    
    import os
    from pathlib import Path
    
    # 获取前端构建产物目录
    backend_dir = Path(__file__).parent
    frontend_dist_config = getattr(Config, 'FRONTEND_DIST_PATH', '../dist')
    
    if os.path.isabs(frontend_dist_config):
        frontend_dist = frontend_dist_config
    else:
        frontend_dist = backend_dir.parent / frontend_dist_config.lstrip('../')
    
    # 尝试其他可能的路径
    if not os.path.exists(frontend_dist):
        possible_paths = [
            backend_dir.parent / 'dist',
            Path('/app/dist'),
            Path('/app/frontend/dist'),
        ]
        
        for path in possible_paths:
            if os.path.exists(path):
                frontend_dist = path
                logger.info(f"✓ 使用前端路径: {frontend_dist}")
                break
    
    if not os.path.exists(frontend_dist):
        logger.warning(f"⚠️  前端构建目录不存在: {frontend_dist}")
        logger.warning("   静态文件服务将不可用")
        return
    
    logger.info(f"✓ 静态文件目录: {frontend_dist}")
    
    # 静态资源文件
    assets_path = os.path.join(frontend_dist, 'assets')
    if os.path.exists(assets_path):
        app.mount("/assets", StaticFiles(directory=assets_path), name="assets")
    
    # SPA 路由处理
    @app.get("/{path:path}", include_in_schema=False)
    async def serve_spa(path: str):
        """SPA 路由处理，返回 index.html"""
        # API 路由不处理
        if path.startswith('api/'):
            return {"detail": "Not Found"}
        
        # 静态资源文件
        static_extensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.ico',
                            '.svg', '.woff', '.woff2', '.ttf', '.eot', '.json', '.map',
                            '.xml', '.txt', '.webmanifest']
        
        if any(path.lower().endswith(ext) for ext in static_extensions):
            file_path = os.path.join(frontend_dist, path)
            if os.path.exists(file_path) and os.path.isfile(file_path):
                return FileResponse(file_path)
            return {"detail": "Not Found"}
        
        # 所有其他路径返回 index.html
        index_path = os.path.join(frontend_dist, 'index.html')
        if os.path.exists(index_path):
            return FileResponse(index_path)
        
        return HTMLResponse('<h1>YPrompt</h1><p>前端构建文件未找到，请先构建前端项目。</p>')


# 初始化静态文件服务
setup_static_files()


if __name__ == '__main__':
    import uvicorn
    
    host = os.getenv('YPROMPT_HOST', '0.0.0.0')
    port = int(os.getenv('YPROMPT_PORT', '8888'))
    
    print(f"🚀 启动YPrompt服务: http://{host}:{port}")
    print(f"   - API文档: http://{host}:{port}/docs")
    
    uvicorn.run(
        "main:app",
        host=host,
        port=port,
        reload=os.getenv('AUTO_RELOAD', 'false').lower() == 'true',
        log_level="info"
    )
