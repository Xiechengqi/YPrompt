"""
提示词规则路由（FastAPI）
"""
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import Optional, Dict, Any
import logging

from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db
from .services import PromptRulesService

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/api/prompt-rules', tags=['提示词规则'])


class PromptRulesModel(BaseModel):
    system_prompt: Optional[str] = None
    user_prompt: Optional[str] = None
    rules: Optional[Dict[str, Any]] = None


class PromptRulesResponse(BaseModel):
    code: int = 200
    data: Optional[PromptRulesModel] = None
    message: Optional[str] = None


@router.get('/', response_model=PromptRulesResponse)
async def get_rules(
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """获取用户的提示词规则"""
    try:
        service = PromptRulesService(db)
        rules = await service.get_user_rules(user_id)
        
        if not rules:
            return PromptRulesResponse(
                code=200,
                data=None,
                message='用户暂无自定义规则'
            )
        
        return PromptRulesResponse(
            code=200,
            data=PromptRulesModel(**rules)
        )
        
    except Exception as e:
        logger.error(f'❌ 获取提示词规则失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'获取提示词规则失败: {str(e)}')


@router.post('/', response_model=PromptRulesResponse)
async def save_rules(
    rules_data: PromptRulesModel,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """保存用户的提示词规则"""
    try:
        service = PromptRulesService(db)
        saved_rules = await service.save_user_rules(user_id, rules_data.dict(exclude_none=True))
        
        return PromptRulesResponse(
            code=200,
            data=PromptRulesModel(**saved_rules),
            message='保存成功'
        )
        
    except Exception as e:
        logger.error(f'❌ 保存提示词规则失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'保存提示词规则失败: {str(e)}')


@router.delete('/')
async def delete_rules(
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """删除用户的提示词规则（重置为默认）"""
    try:
        service = PromptRulesService(db)
        await service.delete_user_rules(user_id)
        
        return {
            'code': 200,
            'message': '已重置为默认规则'
        }
        
    except Exception as e:
        logger.error(f'❌ 删除提示词规则失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'删除提示词规则失败: {str(e)}')
