# -*- coding: utf-8 -*-

"""
初始化app及各种相关配置，扩展插件，中间件，蓝图等
"""
import os
import pkgutil
import importlib
import logging.config

from sanic import Sanic, Blueprint
from sanic.response import file, html, json as json_response, empty
from sanic_ext import Extend
from sanic.log import logger
from sanic.exceptions import SanicException

from apps.utils.db_utils import DB
from apps.utils.jwt_utils import JWTUtil
from config.settings import Config

def configure_extensions(sanic_app):
    # cors
    sanic_app.config.CORS_ORIGINS = "*"
    Extend(sanic_app)
    # mysql
    DB(sanic_app)
    # jwt
    JWTUtil.init_app(sanic_app)
    
    # 添加中间件，确保API请求不被静态文件路由拦截
    @sanic_app.on_request
    async def ensure_api_routes_first(request):
        """确保API路由优先匹配"""
        # 这个中间件在请求处理前执行，但不做任何处理
        # 只是确保中间件链正确执行
        pass
    
    # 配置全局异常处理器，确保API错误返回JSON格式
    @sanic_app.exception(SanicException)
    async def handle_sanic_exception(request, exception):
        """处理Sanic异常，确保API请求返回JSON格式"""
        # 如果是API请求，返回JSON格式的错误
        if request.path.startswith('/api/'):
            status_code = exception.status_code if hasattr(exception, 'status_code') else 500
            return json_response({
                'code': status_code,
                'message': str(exception) or '服务器错误'
            }, status=status_code)
        # 非API请求，重新抛出异常让Sanic默认处理
        raise exception
    
    @sanic_app.exception(Exception)
    async def handle_general_exception(request, exception):
        """处理所有未捕获的异常，确保API请求返回JSON格式"""
        # 如果是API请求，返回JSON格式的错误
        if request.path.startswith('/api/'):
            logger.error(f'❌ API请求异常: {request.path} - {exception}', exc_info=True)
            return json_response({
                'code': 500,
                'message': '服务器内部错误'
            }, status=500)
        # 非API请求，重新抛出异常让Sanic默认处理
        raise exception
    
    @sanic_app.exception(404)
    async def handle_404(request, exception):
        """处理404错误，用于SPA路由回退"""
        # 如果是API请求，返回JSON格式的404
        if request.path.startswith('/api/'):
            return json_response({
                'code': 404,
                'message': 'API路由未找到'
            }, status=404)
        
        # 非API请求，尝试处理静态文件或SPA路由
        frontend_dist = getattr(sanic_app.ctx, 'frontend_dist', None)
        if not frontend_dist:
            return empty(status=404)
        
        path = request.path.lstrip('/')
        
        # 检查是否是静态资源文件
        static_extensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.ico', 
                            '.svg', '.woff', '.woff2', '.ttf', '.eot', '.json', '.map',
                            '.xml', '.txt', '.webmanifest']
        
        if any(path.lower().endswith(ext) for ext in static_extensions):
            file_path = os.path.join(frontend_dist, path)
            if os.path.exists(file_path) and os.path.isfile(file_path):
                return await file(file_path)
        
        # SPA路由：所有其他请求返回index.html
        index_path = os.path.join(frontend_dist, 'index.html')
        if os.path.exists(index_path):
            return await file(index_path)
        
        return empty(status=404)

def configure_blueprints(sanic_app):
    """注册蓝图 - 自动发现机制"""
    app_dict = {}
    
    # 自动发现并注册 apps/modules 下的所有蓝图
    for _, modname, ispkg in pkgutil.walk_packages(["apps/modules"]):
        try:
            module = importlib.import_module(f"apps.modules.{modname}.views")
            attr = getattr(module, modname)
            if isinstance(attr, Blueprint):
                if app_dict.get(modname) is None:
                    app_dict[modname] = attr
                    sanic_app.blueprint(attr)
        except AttributeError:
            pass  # 模块没有对应的Blueprint，跳过
        except Exception as e:
            logger.error(f"❌ 注册蓝图失败 [{modname}]: {e}")


def configure_static_files(sanic_app):
    """配置静态文件服务和SPA路由支持"""
    # 获取前端构建产物目录配置
    frontend_dist_config = getattr(Config, 'FRONTEND_DIST_PATH', '../frontend/dist')
    
    # 计算backend目录的路径
    # __file__ 是 backend/apps/__init__.py
    # os.path.dirname(__file__) = backend/apps/
    # .. = backend/
    backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    
    # 从backend目录出发，使用相对路径
    # 如果配置是相对路径，则相对于backend目录；如果是绝对路径，则直接使用
    if os.path.isabs(frontend_dist_config):
        frontend_dist = frontend_dist_config
    else:
        frontend_dist = os.path.abspath(os.path.join(backend_dir, frontend_dist_config))
    
    # 如果目录不存在，尝试其他可能的路径
    if not os.path.exists(frontend_dist):
        # Docker 环境下的路径
        docker_path = '/app/frontend/dist'
        if os.path.exists(docker_path):
            frontend_dist = docker_path
            logger.info(f"✓ 使用Docker环境路径: {frontend_dist}")
        else:
            logger.warning(f"⚠️  前端构建目录不存在: {frontend_dist}")
            logger.warning(f"   尝试过的路径:")
            logger.warning(f"   - {frontend_dist}")
            logger.warning(f"   - {docker_path}")
            logger.warning(f"   静态文件服务将不可用")
            return
    
    logger.info(f"✓ 静态文件目录: {frontend_dist}")
    
    # 保存前端目录路径到app配置中，供路由使用
    sanic_app.ctx.frontend_dist = frontend_dist
    
    # 使用Sanic内置静态文件服务（性能更好）
    # 静态资源文件（assets目录）
    sanic_app.static('/assets', os.path.join(frontend_dist, 'assets'))
    
    # 注意：不再使用通配路由 `/<path:path>`，而是通过404异常处理器来处理SPA路由
    # 这样可以确保API路由优先匹配，不会被拦截
    # 静态文件（如favicon.ico等）可以通过404异常处理器处理
    
    # 根路径
    @sanic_app.route('/')
    async def index(request):
        """根路径返回index.html"""
        index_path = os.path.join(frontend_dist, 'index.html')
        if os.path.exists(index_path):
            return await file(index_path)
        return html('<h1>YPrompt</h1><p>前端构建文件未找到，请先构建前端项目。</p>')



def create_app(env=None,name=None):
    """
    create an app with config file
    """
    # init a sanic app
    name = name if name else __name__
    app = Sanic(name)
    # 配置日志
    logging.config.dictConfig(Config.BASE_LOGGING)
    # 加载sanic的配置内容
    app.config.update_config(Config)
    # 配置插件扩展
    configure_extensions(app)
    # 配置蓝图（API路由，必须先注册）
    configure_blueprints(app)
    # 配置静态文件服务（必须在蓝图之后注册，确保API路由优先匹配）
    configure_static_files(app)
    
    # 调试：打印所有注册的路由
    if logger.level <= 10:  # DEBUG级别
        logger.debug("已注册的路由:")
        for route in app.router.routes_all.values():
            if route.uri.startswith('/api/'):
                logger.debug(f"  API路由: {list(route.methods)} {route.uri}")
            elif '<path:path>' in route.uri:
                logger.debug(f"  通配路由: {list(route.methods)} {route.uri}")
    
    return app

