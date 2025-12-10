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

    # 登录用户配置（仅从环境变量读取）
    LOGIN_USERNAME = os.getenv('LOGIN_USERNAME', 'admin')
    LOGIN_PASSWORD = os.getenv('LOGIN_PASSWORD', 'admin123')
    LOGIN_NAME = os.getenv('LOGIN_NAME', '管理员')
    
    # 兼容旧配置（已废弃，保留用于向后兼容）
    DEFAULT_ADMIN_USERNAME = LOGIN_USERNAME
    DEFAULT_ADMIN_PASSWORD = LOGIN_PASSWORD
    DEFAULT_ADMIN_NAME = LOGIN_NAME



