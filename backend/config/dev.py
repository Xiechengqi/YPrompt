# -*- coding: utf-8 -*-

class Config:
    """开发环境配置"""
    
    # ==========================================
    # 数据库配置
    # ==========================================
    # 数据库类型: 'sqlite'
    DB_TYPE = 'sqlite'
    
    # SQLite配置
    SQLITE_DB_PATH = '../data/yprompt.db'
    
    # ==========================================
    # JWT配置
    # ==========================================
    SECRET_KEY = 'yprompt-dev-secret-key-change-in-production'
    
    # ==========================================
    # 默认管理员账号配置
    # ==========================================
    DEFAULT_ADMIN_USERNAME = 'admin'
    DEFAULT_ADMIN_PASSWORD = 'admin123'
    DEFAULT_ADMIN_NAME = '管理员'
    
    # ==========================================
    # 服务器配置
    # ==========================================
    DEBUG = True
    WORKERS = 1
    ACCESS_LOG = True
