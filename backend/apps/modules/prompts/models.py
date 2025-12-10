"""
提示词模块数据模型（FastAPI Pydantic）
用于请求验证和响应序列化
"""
from pydantic import BaseModel
from typing import Optional, List


# 保存提示词请求
class SavePromptRequest(BaseModel):
    id: Optional[int] = None
    title: str
    description: Optional[str] = None
    requirement_report: Optional[str] = None
    thinking_points: Optional[List[str]] = None
    initial_prompt: Optional[str] = None
    advice: Optional[List[str]] = None
    final_prompt: str
    language: str = "zh"
    format: str = "markdown"
    prompt_type: str = "system"
    tags: Optional[List[str]] = None
    create_version: bool = True
    change_summary: Optional[str] = None


# 提示词信息
class PromptInfo(BaseModel):
    id: int
    user_id: int
    title: str
    description: Optional[str] = None
    requirement_report: Optional[str] = None
    thinking_points: Optional[str] = None
    initial_prompt: Optional[str] = None
    advice: Optional[str] = None
    final_prompt: str
    language: str
    format: str
    prompt_type: str
    is_favorite: int
    is_public: int
    view_count: int
    use_count: int
    tags: Optional[str] = None
    current_version: Optional[str] = None
    total_versions: Optional[int] = None
    last_version_time: Optional[str] = None
    create_time: str
    update_time: str


# 提示词列表项
class PromptListItem(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    language: str
    format: str
    prompt_type: str
    is_favorite: int
    is_public: int
    tags: Optional[List[str]] = None
    view_count: int
    use_count: int
    current_version: Optional[str] = None
    total_versions: Optional[int] = None
    last_version_time: Optional[str] = None
    create_time: str
    update_time: str


# 提示词列表响应
class PromptListData(BaseModel):
    total: int
    page: int
    limit: int
    items: List[PromptListItem]


class PromptListResponse(BaseModel):
    code: int = 200
    data: PromptListData


# 保存成功响应
class SavePromptData(BaseModel):
    id: int
    create_time: str
    message: Optional[str] = None


class SavePromptResponse(BaseModel):
    code: int = 200
    message: str = "保存成功"
    data: SavePromptData


# 收藏请求
class FavoriteRequest(BaseModel):
    is_favorite: bool


# 通用成功响应
class SuccessResponse(BaseModel):
    code: int = 200
    message: str


# 提示词详情响应
class PromptDetailResponse(BaseModel):
    code: int = 200
    data: PromptInfo


# 错误响应
class ErrorResponse(BaseModel):
    code: int
    message: str
