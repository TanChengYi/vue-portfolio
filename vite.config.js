import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { execSync } from 'child_process'

// 自动获取仓库名
function getRepoName() {
  try {
    // 尝试从 git remote origin 获取仓库名
    const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim()
    const match = remoteUrl.match(/([^\/]+)\.git$/) || remoteUrl.match(/([^\/]+)$/)
    if (match) {
      return match[1]
    }
  } catch (error) {
    console.warn('无法从 git remote 获取仓库名，使用环境变量或默认值')
  }
  
  // 回退到环境变量
  return process.env.REPO_NAME || 'vue-portfolio'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: `/${getRepoName()}/`,
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})