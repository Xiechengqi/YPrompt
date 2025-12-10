"""
认证路由
支持本地用户名密码认证
"""
from sanic import Blueprint
from sanic.response import json
from sanic_ext import openapi
from sanic.log import logger

from apps.utils.jwt_utils import JWTUtil
from apps.utils.auth_middleware import auth_required
from .services import AuthService
from .models import *


# 创建认证蓝图
auth = Blueprint('auth', url_prefix='/api/auth')


# ====================================
# 本地用户名密码认证
# ====================================

@auth.post('/local/login')
@openapi.summary("本地用户名密码登录")
@openapi.description("使用用户名和密码登录（用于私有部署）")
@openapi.body({"application/json": {
    "username": openapi.String(description="用户名", required=True),
    "password": openapi.String(description="密码", required=True)
}})
@openapi.response(200, {"application/json": LoginResponse}, description="登录成功")
@openapi.response(400, {"application/json": ErrorResponse}, description="用户名或密码错误")
async def local_login(request):
    """
    本地用户名密码登录接口
    
    用于私有部署场景，无需OAuth认证
    """
    try:
        data = request.json
        username = data.get('username', '').strip()
        password = data.get('password', '')
        
        # 1. 参数验证
        if not username or not password:
            return json({
                'code': 400,
                'message': '用户名和密码不能为空'
            })
        
        # 2. 验证用户名和密码（从环境变量配置）
        from config import settings
        auth_service = AuthService(request.app.ctx.db)
        user = await auth_service.verify_local_user(
            username, 
            password,
            settings.LOGIN_USERNAME,
            settings.LOGIN_PASSWORD
        )
        
        if not user:
            return json({
                'code': 400,
                'message': '用户名或密码错误'
            })
        
        # 3. 生成JWT Token
        token = JWTUtil.generate_token(
            user['id'],
            username,  # 使用username作为标识
            expire_hours=24*7  # 7天有效期
        )
        
        # 4. 返回响应
        logger.info(f'✅ 本地用户登录成功: username={username}, id={user["id"]}')
        
        return json({
            'code': 200,
            'message': '登录成功',
            'data': {
                'token': token,
                'user': {
                    'id': user['id'],
                    'name': user['name'],
                    'username': username,
                    'avatar': user.get('avatar', ''),
                    'auth_type': 'local',
                    'is_admin': user.get('is_admin', 0),
                    'last_login_time': str(user.get('last_login_time', ''))
                }
            }
        })
        
    except Exception as e:
        logger.error(f'❌ 本地登录接口异常: {e}', exc_info=True)
        return json({
            'code': 500,
            'message': f'登录失败: {str(e)}'
        })


# ====================================
# 通用接口
# ====================================

@auth.post('/refresh')
@openapi.summary("刷新Token")
@openapi.description("使用旧Token刷新获取新Token")
@openapi.secured("BearerAuth")
@openapi.response(200, {"application/json": RefreshTokenResponse}, description="刷新成功")
@openapi.response(401, {"application/json": ErrorResponse}, description="Token无效")
async def refresh_token(request):
    """
    刷新Token接口
    
    通过旧Token生成新Token,延长登录状态
    """
    try:
        # 获取Authorization头
        auth_header = request.headers.get('Authorization')
        
        if not auth_header or not auth_header.startswith('Bearer '):
            return json({
                'code': 401,
                'message': '缺少有效的Token'
            })
        
        old_token = auth_header.split(' ')[1]
        
        # 刷新Token
        new_token = JWTUtil.refresh_token(old_token, expire_hours=24*7)  # 7天有效期
        
        if not new_token:
            return json({
                'code': 401,
                'message': 'Token无效或已过期,请重新登录'
            })
        
        return json({
            'code': 200,
            'message': '刷新成功',
            'data': {
                'token': new_token
            }
        })
        
    except Exception as e:
        logger.error(f'❌ 刷新Token失败: {e}')
        return json({
            'code': 500,
            'message': f'刷新失败: {str(e)}'
        })


@auth.get('/userinfo')
@auth_required
@openapi.summary("获取当前用户信息")
@openapi.description("通过Token获取当前登录用户的详细信息")
@openapi.secured("BearerAuth")
@openapi.response(200, {"application/json": {"code": int, "data": UserInfo}}, description="获取成功")
@openapi.response(401, {"application/json": ErrorResponse}, description="未授权")
async def get_userinfo(request):
    """
    获取当前用户信息接口
    
    需要在请求头中携带有效的JWT Token
    """
    try:
        # 从认证中间件获取user_id
        user_id = request.ctx.user_id
        
        # 查询用户信息
        auth_service = AuthService(request.app.ctx.db)
        user = await auth_service.get_user_by_id(user_id)
        
        if not user:
            return json({
                'code': 404,
                'message': '用户不存在'
            })
        
        return json({
            'code': 200,
            'data': {
                'id': user['id'],
                'name': user['name'],
                'username': user.get('username', ''),
                'avatar': user.get('avatar', ''),
                'email': user.get('email', ''),
                'auth_type': user.get('auth_type', 'local'),
                'is_active': user.get('is_active', 1),
                'is_admin': user.get('is_admin', 0),
                'last_login_time': str(user.get('last_login_time', '')),
                'create_time': str(user.get('create_time', ''))
            }
        })
        
    except Exception as e:
        logger.error(f'❌ 获取用户信息失败: {e}')
        return json({
            'code': 500,
            'message': f'获取失败: {str(e)}'
        })


@auth.post('/logout')
@auth_required
@openapi.summary("用户登出")
@openapi.description("用户登出(客户端需清除本地Token)")
@openapi.secured("BearerAuth")
@openapi.response(200, {"application/json": {"code": int, "message": str}}, description="登出成功")
async def logout(request):
    """
    用户登出接口
    
    由于使用JWT,服务端无状态,实际登出由客户端清除Token实现
    此接口仅用于记录日志
    """
    try:
        user_id = request.ctx.user_id
        logger.info(f'📤 用户登出: user_id={user_id}')
        
        return json({
            'code': 200,
            'message': '登出成功'
        })
        
    except Exception as e:
        logger.error(f'❌ 登出接口异常: {e}')
        return json({
            'code': 500,
            'message': f'登出失败: {str(e)}'
        })


# ====================================
# 系统信息接口
# ====================================

@auth.get('/config')
@openapi.summary("获取认证配置")
@openapi.description("获取系统支持的认证方式和登录用户信息")
@openapi.response(200, {"application/json": {
    "code": int,
    "data": {
        "local_auth_enabled": openapi.Boolean(description="是否启用本地认证"),
        "login_username": openapi.String(description="登录用户名（从环境变量）")
    }
}})
async def get_auth_config(request):
    """
    获取认证配置接口
    
    前端可以根据此接口返回的配置决定显示哪些登录选项
    返回登录用户名用于前端预填充
    """
    try:
        from config import settings
        return json({
            'code': 200,
            'data': {
                'local_auth_enabled': True,  # 本地认证始终可用
                'login_username': settings.LOGIN_USERNAME  # 返回配置的用户名
            }
        })
        
    except Exception as e:
        logger.error(f'❌ 获取认证配置失败: {e}')
        return json({
            'code': 500,
            'message': f'获取配置失败: {str(e)}'
        })
