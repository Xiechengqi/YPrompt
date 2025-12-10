# -*- coding: utf-8 -*-

class BaseConfig(object):
    """配置基类"""

    DEBUG = True

    # JWT秘钥
    SECRET_KEY = 'intramirror'
    
    # ==========================================
    # 数据库配置（SQLite）
    # ==========================================
    # SQLite配置（零配置启动）
    SQLITE_DB_PATH = '../data/yprompt.db'

    # ==========================================
    # 前端静态文件配置
    # ==========================================
    # 前端构建产物目录（相对于backend目录的路径）
    # 开发环境: ../dist（从backend目录出发，指向项目根目录下的dist）
    # Docker环境: 代码会自动检测 /app/dist
    # 自定义路径: 可以设置为绝对路径，如 /path/to/dist
    FRONTEND_DIST_PATH = '../dist'

    ACCESS_LOG = False

    # 服务worker数量
    WORKERS = 1

    # 跨域相关
    # 是否启动跨域功能
    ENABLE_CORS = False
    CORS_SUPPORTS_CREDENTIALS = True

    # redis配置
    REDIS_CON = "redis://127.0.0.1:6379/2"

    # 日志配置（使用 loguru，配置在 main.py 中）
    # loguru 配置已迁移到 main.py 的 setup_logging() 函数
    # 保留这些路径配置用于兼容性（可选）
    LOGGING_INFO_FILE = '../data/logs/backend/info.log'
    LOGGING_ERROR_FILE = '../data/logs/backend/error.log'

    # 告警源和派生表映射关系
    S2T = {
        "apm": "apm",
        "rum": "rum",
        "ckafka": "mid",
        "mongodb": "mid",
        "redis": "mid",
        "cdb": "mid",
        "es": "mid",
        "cvm": "iaas",
        "ecs": "iaas",
        "cos": "iaas",
        "cls": "iaas",
        "sls": "iaas",
        "custom": "custom"
    }

    # 没有对应的分派策略的默认owner
    OWNER_DEFAULT = [{
        'workforceType': 4,
        'watchkeeperId': 833,
        'watchkeeperName': '朱威',
        'dingDingId': 4311207311543872874
    }]
    ARGS_DEFAULT = {
    'status': 0,
    'dingtalk_person': 0,
    'sms': 0,
    'dingtalk_group': 0
    }


    def __init__(self):
        # loguru 日志配置已迁移到 main.py
        # 这里不再需要初始化日志配置
        pass
