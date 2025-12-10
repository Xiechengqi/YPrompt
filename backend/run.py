"""
FastAPI 应用启动入口
"""
import os
import sys
import uvicorn

if __name__ == '__main__':
    # 从环境变量读取配置，支持Docker部署
    host = os.getenv('YPROMPT_HOST', '0.0.0.0')
    port = int(os.getenv('YPROMPT_PORT', '8888'))
    
    # 支持命令行参数覆盖
    if len(sys.argv) > 1:
        for arg in sys.argv[1:]:
            if arg.startswith('--host='):
                host = arg.split('=', 1)[1]
            elif arg.startswith('--port='):
                port = int(arg.split('=', 1)[1])
    
    # 开发环境启用自动重载，生产环境关闭
    reload = os.getenv('AUTO_RELOAD', 'false').lower() == 'true'
    log_level = os.getenv('LOG_LEVEL', 'info')
    
    print(f"🚀 启动YPrompt服务: http://{host}:{port}")
    print(f"   - API文档: http://{host}:{port}/docs")
    print(f"   - ReDoc文档: http://{host}:{port}/redoc")
    print(f"   - Auto Reload: {reload}")
    print(f"   - Log Level: {log_level}")
    
    uvicorn.run(
        "main:app",
        host=host,
        port=port,
        reload=reload,
        log_level=log_level
    )
