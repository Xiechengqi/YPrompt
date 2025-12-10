/**
 * 认证状态管理
 * 管理用户登录、token、用户信息
 * 支持 debug 模式，在 debug 模式下使用 mock API
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { isDebugMode, mockRequest } from '@/services/mockApiService'

export interface User {
  id: number
  username: string
  name: string
  avatar: string
  email?: string
  auth_type: 'local'
  is_admin: number
  last_login_time?: string
}

export const useAuthStore = defineStore('auth', () => {
  // 状态
  const token = ref<string | null>(localStorage.getItem('yprompt_token'))
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  
  // 计算属性
  const isLoggedIn = computed(() => !!token.value && !!user.value)
  
  /**
   * 设置token
   */
  const setToken = (newToken: string | null) => {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('yprompt_token', newToken)
    } else {
      localStorage.removeItem('yprompt_token')
    }
  }
  
  /**
   * 设置用户信息
   */
  const setUser = (newUser: User | null) => {
    user.value = newUser
    if (newUser) {
      localStorage.setItem('yprompt_user', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('yprompt_user')
    }
  }
  
  /**
   * 从localStorage恢复用户信息
   */
  const restoreUser = () => {
    const savedUser = localStorage.getItem('yprompt_user')
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser)
      } catch (error) {
        // 解析失败，清除无效数据
        localStorage.removeItem('yprompt_user')
      }
    }
  }
  
  /**
   * 本地用户名密码登录
   */
  const loginWithPassword = async (username: string, password: string): Promise<{ success: boolean; message?: string }> => {
    isLoading.value = true
    try {
      let result: any
      
      // Debug 模式：使用 mock API
      if (isDebugMode()) {
        result = await mockRequest('POST', '/api/auth/local/login', { username, password })
      } else {
        // 正常模式：使用真实 API
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || ''
        const url = `${apiBaseUrl}/api/auth/local/login`
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
        
        // 检查响应状态
        if (!response.ok) {
          // 尝试解析错误响应
          try {
            const errorResult = await response.json()
            return {
              success: false,
              message: errorResult.message || `请求失败: ${response.status} ${response.statusText}`
            }
          } catch (parseError) {
            return {
              success: false,
              message: `网络错误: ${response.status} ${response.statusText}`
            }
          }
        }
        
        result = await response.json()
      }
      
      if (result.code === 200 && result.data) {
        setToken(result.data.token)
        setUser(result.data.user)
        
        // 登录成功后，强制重新加载云端提示词配置
        try {
          const { promptConfigManager } = await import('@/config/prompts')
          await promptConfigManager.forceReloadFromCloud()
        } catch (error) {
          console.error('登录后加载云端配置失败:', error)
        }
        
        return { success: true }
      } else {
        return {
          success: false,
          message: result.message || '登录失败，请检查用户名和密码'
        }
      }
    } catch (error) {
      console.error('登录请求失败:', error)
      // 网络错误或 CORS 错误
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return {
          success: false,
          message: '无法连接到服务器，请检查网络连接和 API 地址配置'
        }
      }
      return {
        success: false,
        message: error instanceof Error ? error.message : '登录失败，请稍后重试'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * 获取认证配置
   */
  const getAuthConfig = async (): Promise<{
    local_auth_enabled: boolean
    login_username?: string
  } | null> => {
    try {
      let result: any
      
      // Debug 模式：使用 mock API
      if (isDebugMode()) {
        result = await mockRequest('GET', '/api/auth/config')
      } else {
        // 正常模式：使用真实 API
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/auth/config`)
        result = await response.json()
      }
      
      if (result.code === 200 && result.data) {
        return result.data
      }
      return null
    } catch (error) {
      return null
    }
  }
  
  /**
   * 刷新token
   */
  const refreshToken = async (): Promise<boolean> => {
    if (!token.value) return false
    
    try {
      let result: any
      
      // Debug 模式：使用 mock API
      if (isDebugMode()) {
        result = await mockRequest('POST', '/api/auth/refresh')
      } else {
        // 正常模式：使用真实 API
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/auth/refresh`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        })
        result = await response.json()
      }
      
      if (result.code === 200 && result.data) {
        setToken(result.data.token)
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }
  
  /**
   * 获取用户信息
   */
  const fetchUserInfo = async (): Promise<boolean> => {
    if (!token.value) return false
    
    try {
      let result: any
      
      // Debug 模式：使用 mock API
      if (isDebugMode()) {
        result = await mockRequest('GET', '/api/auth/userinfo')
      } else {
        // 正常模式：使用真实 API
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/auth/userinfo`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token.value}`,
          },
        })
        result = await response.json()
      }
      
      if (result.code === 200 && result.data) {
        setUser(result.data)
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }
  
  /**
   * 登出
   */
  const logout = async () => {
    if (token.value) {
      try {
        // Debug 模式：使用 mock API
        if (isDebugMode()) {
          await mockRequest('POST', '/api/auth/logout')
        } else {
          // 正常模式：使用真实 API
          await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/auth/logout`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token.value}`,
            },
          })
        }
      } catch (error) {
        // 忽略登出错误，继续清除本地状态
      }
    }
    
    // 清除本地状态
    setToken(null)
    setUser(null)
    
    // 清除sessionStorage中的会话标记，确保下次登录重新加载云端配置
    sessionStorage.removeItem('yprompt_config_session_loaded')
    
    // 清除所有应用相关的 localStorage 数据
    const keysToRemove = [
      // 优化模块相关
      'user_prompt_optimize_data',
      'yprompt_optimize_active_mode',
      'yprompt_optimize_cache',
      'yprompt_user_optimize_active_tab',
      'yprompt_optimize_loaded_user_prompt',
      'yprompt_optimize_result',
      // 生成模块相关
      'yprompt_generate_messages',
      'yprompt_generate_prompt_data',
      // 其他可能的缓存
      'yprompt_settings_cache',
    ]
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key)
    })
    
    // 也可以清除所有以 yprompt_ 或 user_prompt_ 开头的 key
    const allKeys = Object.keys(localStorage)
    allKeys.forEach(key => {
      if (key.startsWith('yprompt_') || key.startsWith('user_prompt_')) {
        // 排除 token 和 user (已经在上面清除了)
        if (key !== 'yprompt_token' && key !== 'yprompt_user') {
          localStorage.removeItem(key)
        }
      }
    })
  }
  
  /**
   * 初始化认证状态
   */
  const initialize = async () => {
    // 恢复用户信息
    restoreUser()
    
    // 如果有token但没有用户信息，尝试获取
    if (token.value && !user.value) {
      await fetchUserInfo()
    }
  }
  
  return {
    // 状态
    token,
    user,
    isLoading,
    isLoggedIn,
    
    // 方法
    setToken,
    setUser,
    loginWithPassword,
    getAuthConfig,
    refreshToken,
    fetchUserInfo,
    logout,
    initialize,
  }
})

