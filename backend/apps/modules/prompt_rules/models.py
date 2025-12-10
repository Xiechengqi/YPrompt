"""
提示词规则数据模型（FastAPI Pydantic）
"""
from pydantic import BaseModel
from typing import Optional


class PromptRulesModel(BaseModel):
    """用户提示词规则模型"""
    system_prompt: Optional[str] = None
    user_prompt: Optional[str] = None
    rules: Optional[dict] = None
    
    # 详细字段（可选）
    system_prompt_rules: Optional[str] = None
    user_guided_prompt_rules: Optional[str] = None
    requirement_report_rules: Optional[str] = None
    thinking_points_extraction_prompt: Optional[str] = None
    thinking_points_system_message: Optional[str] = None
    system_prompt_generation_prompt: Optional[str] = None
    system_prompt_system_message: Optional[str] = None
    optimization_advice_prompt: Optional[str] = None
    optimization_advice_system_message: Optional[str] = None
    optimization_application_prompt: Optional[str] = None
    optimization_application_system_message: Optional[str] = None
    quality_analysis_system_prompt: Optional[str] = None
    user_prompt_quality_analysis: Optional[str] = None
    user_prompt_quick_optimization: Optional[str] = None
    user_prompt_rules: Optional[str] = None


class PromptRulesResponse(BaseModel):
    """提示词规则响应模型"""
    code: int = 200
    data: Optional[PromptRulesModel] = None
    message: Optional[str] = None
