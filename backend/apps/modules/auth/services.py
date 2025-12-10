"""
认证服务类
处理用户认证相关的业务逻辑
支持: 本地用户名密码认证
"""
import datetime
import logging
from apps.utils.password_utils import PasswordUtil

logger = logging.getLogger(__name__)


class AuthService:
    """认证服务类"""
    
    def __init__(self, db):
        """
        初始化认证服务
        
        Args:
            db: 数据库连接对象(SQLite适配器)
        """
        self.db = db
    
    async def get_user_by_id(self, user_id):
        """
        根据ID获取用户
        
        Args:
            user_id: 用户ID
            
        Returns:
            dict: 用户信息,不存在返回None
        """
        try:
            sql = "SELECT * FROM users WHERE id = ?"
            user = await self.db.get(sql, [user_id])
            
            # 移除敏感字段
            if user and 'password_hash' in user:
                user = dict(user)
                del user['password_hash']
            
            return user
            
        except Exception as e:
            logger.error(f'❌ 查询用户失败: {e}')
            raise
    
    async def verify_local_user(self, username, password, config_username, config_password):
        """
        验证本地用户密码（仅验证环境变量配置的用户）
        
        Args:
            username: 用户名
            password: 明文密码
            config_username: 配置的用户名（从环境变量）
            config_password: 配置的密码（从环境变量）
            
        Returns:
            dict: 用户信息(验证成功) 或 None(验证失败)
        """
        try:
            # 1. 验证用户名和密码是否匹配环境变量配置
            if username != config_username or password != config_password:
                logger.warning(f'⚠️  用户名或密码错误: username={username}')
                return None
            
            # 2. 查询或创建用户（确保用户存在）
            sql = "SELECT * FROM users WHERE username = ? AND auth_type = 'local'"
            user = await self.db.get(sql, [username])
            
            if not user:
                # 用户不存在，创建用户
                logger.info(f'📝 用户不存在，自动创建: username={username}')
                password_hash = PasswordUtil.hash_password(password)
                current_time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                fields = {
                    'username': username,
                    'password_hash': password_hash,
                    'name': username,
                    'auth_type': 'local',
                    'is_active': 1,
                    'is_admin': 1,
                    'last_login_time': current_time
                }
                user_id = await self.db.table_insert('users', fields)
                user = await self.get_user_by_id(user_id)
            else:
                # 用户存在，检查是否激活
                if not user.get('is_active', 0):
                    logger.warning(f'⚠️  用户已被禁用: username={username}')
                    return None
                
                # 更新密码哈希（确保与配置一致）
                password_hash = PasswordUtil.hash_password(password)
                await self.db.table_update('users', {'password_hash': password_hash}, f"id = {user['id']}")
            
            # 3. 更新最后登录时间
            await self.update_last_login_time(user['id'])
            
            logger.info(f'✅ 本地用户登录成功: username={username}, id={user["id"]}')
            
            return user
            
        except Exception as e:
            logger.error(f'❌ 验证本地用户失败: {e}')
            return None
    
    async def get_user_by_username(self, username):
        """
        根据username获取用户
        
        Args:
            username: 用户名
            
        Returns:
            dict: 用户信息,不存在返回None
        """
        try:
            sql = "SELECT * FROM users WHERE username = ?"
            user = await self.db.get(sql, [username])
            
            return user
            
        except Exception as e:
            logger.error(f'❌ 查询用户失败: {e}')
            raise
    
    async def update_last_login_time(self, user_id):
        """
        更新用户最后登录时间
        
        Args:
            user_id: 用户ID
        """
        try:
            current_time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            sql = f"UPDATE users SET last_login_time = '{current_time}' WHERE id = {user_id}"
            await self.db.execute(sql)
            
        except Exception as e:
            logger.error(f'❌ 更新登录时间失败: {e}')
            # 不抛出异常,因为这不是关键操作
    
    async def deactivate_user(self, user_id):
        """
        禁用用户
        
        Args:
            user_id: 用户ID
        """
        try:
            sql = f"UPDATE users SET is_active = 0 WHERE id = {user_id}"
            await self.db.execute(sql)
            
        except Exception as e:
            logger.error(f'❌ 禁用用户失败: {e}')
            raise
    
    async def activate_user(self, user_id):
        """
        激活用户
        
        Args:
            user_id: 用户ID
        """
        try:
            sql = f"UPDATE users SET is_active = 1 WHERE id = {user_id}"
            await self.db.execute(sql)
            
        except Exception as e:
            logger.error(f'❌ 激活用户失败: {e}')
            raise

