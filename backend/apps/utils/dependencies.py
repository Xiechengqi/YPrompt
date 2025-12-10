"""
FastAPI 依赖注入
"""
from fastapi import Depends, Request
from typing import Annotated


def get_db(request: Request):
    """
    获取数据库连接依赖
    
    使用方法:
        @router.get('/endpoint')
        async def endpoint(db = Depends(get_db)):
            # 使用 db 进行数据库操作
            ...
    """
    return request.app.state.db
