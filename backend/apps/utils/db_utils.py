from sanic.log import logger
from apps.utils.db_adapter import create_database_adapter


class DB:
    """数据库工具类，支持SQLite"""
    
    def __init__(self, app):
        self.app = app
        
        if app:
            self.init_app(app=app)
    
    def init_app(self, app):
        @app.listener('before_server_start')
        async def setup_db(app, loop):
            """
            服务启动前创建数据库连接
            使用SQLite数据库
            """
            db_type = app.config.get('DB_TYPE', 'sqlite')
            
            if db_type != 'sqlite':
                logger.warning(f"⚠️  不支持的数据库类型: {db_type}，将使用 SQLite")
                db_type = 'sqlite'
            
            logger.info(f"📦 初始化数据库: {db_type}")
            
            # SQLite配置
            config = {
                'path': app.config.get('SQLITE_DB_PATH', 'data/yprompt.db')
            }
            logger.info(f"📁 SQLite数据库路径: {config['path']}")
            
            # 创建数据库适配器（传递应用配置）
            # 从app.config中提取管理员账号配置
            app_config = {
                'DEFAULT_ADMIN_USERNAME': getattr(app.config, 'DEFAULT_ADMIN_USERNAME', 'admin'),
                'DEFAULT_ADMIN_PASSWORD': getattr(app.config, 'DEFAULT_ADMIN_PASSWORD', 'admin123'),
                'DEFAULT_ADMIN_NAME': getattr(app.config, 'DEFAULT_ADMIN_NAME', '管理员'),
            }
            adapter = await create_database_adapter(db_type, config, app_config)
            
            # 保存到应用上下文
            app.ctx.db = adapter
            app.ctx.db_type = db_type
            
            logger.info(f"✅ 数据库初始化成功: {db_type}")
        
        @app.listener('after_server_stop')
        async def close_db(app, loop):
            """
            服务停止后关闭数据库连接
            """
            if hasattr(app.ctx, 'db'):
                await app.ctx.db.close()
                logger.info("✅ 数据库连接已关闭")
