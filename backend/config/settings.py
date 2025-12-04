# -*- coding: utf-8 -*-
import os
from config import cf
from config.base import BaseConfig

class Config(BaseConfig):
    # 数据库配置（优先使用环境变量）
    DB_TYPE = os.getenv('DB_TYPE') or (cf.DB_TYPE if hasattr(cf, 'DB_TYPE') else 'sqlite')
    SQLITE_DB_PATH = os.getenv('SQLITE_DB_PATH') or (cf.SQLITE_DB_PATH if hasattr(cf, 'SQLITE_DB_PATH') else '../data/yprompt.db')

    # JWT配置（优先使用环境变量）
    SECRET_KEY = os.getenv('SECRET_KEY') or cf.SECRET_KEY
    
    # 默认管理员账号配置（优先使用环境变量）
    DEFAULT_ADMIN_USERNAME = os.getenv('ADMIN_USERNAME') or (cf.DEFAULT_ADMIN_USERNAME if hasattr(cf, 'DEFAULT_ADMIN_USERNAME') else 'admin')
    DEFAULT_ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD') or (cf.DEFAULT_ADMIN_PASSWORD if hasattr(cf, 'DEFAULT_ADMIN_PASSWORD') else 'admin123')
    DEFAULT_ADMIN_NAME = cf.DEFAULT_ADMIN_NAME if hasattr(cf, 'DEFAULT_ADMIN_NAME') else '管理员'


