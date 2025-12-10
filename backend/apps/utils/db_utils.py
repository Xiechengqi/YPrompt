import logging
from apps.utils.db_adapter import create_database_adapter
from config.settings import Config

logger = logging.getLogger(__name__)


async def init_database(app):
    """
    初始化 SQLite 数据库连接（FastAPI）
    """
    logger.info("📦 初始化 SQLite 数据库")
    
    # SQLite配置
    config = {
        'path': getattr(Config, 'SQLITE_DB_PATH', 'data/yprompt.db')
    }
    logger.info(f"📁 SQLite数据库路径: {config['path']}")
    
    # 从配置中提取管理员账号配置
    app_config = {
        'DEFAULT_ADMIN_USERNAME': getattr(Config, 'DEFAULT_ADMIN_USERNAME', 'admin'),
        'DEFAULT_ADMIN_PASSWORD': getattr(Config, 'DEFAULT_ADMIN_PASSWORD', 'admin123'),
        'DEFAULT_ADMIN_NAME': getattr(Config, 'DEFAULT_ADMIN_NAME', '管理员'),
    }
    
    adapter = await create_database_adapter('sqlite', config, app_config)
    
    # 保存到应用状态
    app.state.db = adapter
    app.state.db_type = 'sqlite'
    
    logger.info("✅ SQLite数据库初始化成功")


async def close_database(app):
    """
    关闭数据库连接（FastAPI）
    """
    if hasattr(app.state, 'db'):
        await app.state.db.close()
        logger.info("✅ 数据库连接已关闭")
