import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'
import { execSync } from 'child_process'

// 创建注入 git commit 信息的插件
function gitCommitPlugin(): Plugin {
  const commitHash = getGitCommitHash()
  const commitDate = getGitCommitDate()
  
  return {
    name: 'git-commit-plugin',
    config(config) {
      // 通过 define 注入到代码中
      const existingDefine = config.define || {}
      return {
        define: {
          ...existingDefine,
          'import.meta.env.VITE_GIT_COMMIT_HASH': JSON.stringify(commitHash),
          'import.meta.env.VITE_GIT_COMMIT_DATE': JSON.stringify(commitDate)
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    gitCommitPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        secure: false
      }
    }
  },
  define: {
    // 支持从配置文件加载内置提供商
    __BUILTIN_PROVIDERS__: JSON.stringify(getBuiltinProviders())
  }
})

// 获取内置提供商配置
function getBuiltinProviders() {
  try {
    // 尝试从根目录的 builtin-providers.json 文件读取配置
    const configPath = resolve(__dirname, 'builtin-providers.json')
    if (fs.existsSync(configPath)) {
      const configContent = fs.readFileSync(configPath, 'utf-8')
      const config = JSON.parse(configContent)
      return config
    }
  } catch (error) {
    console.warn('⚠️ 读取内置提供商配置失败:', error.message)
  }
  
  // 如果没有配置文件或读取失败，返回空数组
  return []
}

// 获取 git commit hash（缩写，7位）
function getGitCommitHash(): string {
  // 优先使用环境变量（GitHub Actions 等 CI/CD 环境）
  if (process.env.GITHUB_SHA) {
    const hash = process.env.GITHUB_SHA.substring(0, 7)
    console.log('✅ Git commit hash (from GITHUB_SHA):', hash)
    return hash
  }
  
  // 尝试从 git 命令获取
  try {
    // 尝试多个可能的 git 仓库路径（从最可能到最不可能）
    const possiblePaths = [
      resolve(__dirname, '..'),  // 项目根目录（最可能）
      process.cwd(),              // 当前工作目录
      __dirname                   // frontend 目录
    ]
    
    for (const gitPath of possiblePaths) {
      try {
        // 先检查是否是 git 仓库（静默检查）
        execSync('git rev-parse --git-dir', {
          encoding: 'utf-8',
          cwd: gitPath,
          stdio: ['ignore', 'pipe', 'ignore']
        })
        
        // 是 git 仓库，获取 commit hash
        const hash = execSync('git rev-parse --short HEAD', { 
          encoding: 'utf-8',
          cwd: gitPath,
          stdio: ['ignore', 'pipe', 'ignore']
        }).trim()
        
        if (hash) {
          console.log(`✅ Git commit hash (from ${gitPath}):`, hash)
          return hash
        }
      } catch (pathError) {
        // 这个路径不是 git 仓库或命令失败，尝试下一个
        continue
      }
    }
    
    console.warn('⚠️ 未找到有效的 git 仓库')
    return ''
  } catch (error) {
    console.warn('⚠️ 获取 git commit hash 失败:', error instanceof Error ? error.message : String(error))
    return ''
  }
}

// 获取 git commit 日期
function getGitCommitDate(): string {
  // GitHub Actions 不直接提供日期，需要从 git 获取
  // 尝试从 git 命令获取
  try {
    // 尝试多个可能的 git 仓库路径（从最可能到最不可能）
    const possiblePaths = [
      resolve(__dirname, '..'),  // 项目根目录（最可能）
      process.cwd(),              // 当前工作目录
      __dirname                   // frontend 目录
    ]
    
    for (const gitPath of possiblePaths) {
      try {
        // 先检查是否是 git 仓库（静默检查）
        execSync('git rev-parse --git-dir', {
          encoding: 'utf-8',
          cwd: gitPath,
          stdio: ['ignore', 'pipe', 'ignore']
        })
        
        // 是 git 仓库，获取 commit 日期
        // 如果 GITHUB_SHA 存在，使用它来获取日期
        let date = ''
        if (process.env.GITHUB_SHA) {
          // 使用指定的 commit 获取日期
          date = execSync(`git log -1 --format=%ci ${process.env.GITHUB_SHA}`, { 
            encoding: 'utf-8',
            cwd: gitPath,
            stdio: ['ignore', 'pipe', 'ignore']
          }).trim()
        } else {
          // 获取当前 HEAD 的日期
          date = execSync('git log -1 --format=%ci', { 
            encoding: 'utf-8',
            cwd: gitPath,
            stdio: ['ignore', 'pipe', 'ignore']
          }).trim()
        }
        
        if (date) {
          console.log(`✅ Git commit date (from ${gitPath}):`, date)
          return date
        }
      } catch (pathError) {
        // 这个路径不是 git 仓库或命令失败，尝试下一个
        continue
      }
    }
    
    console.warn('⚠️ 未找到有效的 git 仓库或无法获取 commit 日期')
    return ''
  } catch (error) {
    console.warn('⚠️ 获取 git commit date 失败:', error instanceof Error ? error.message : String(error))
    return ''
  }
}
