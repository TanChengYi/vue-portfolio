import { ref, computed } from 'vue'

// 主题列表
export const themeList = [
  { name: 'neon', label: '霓虹科技', icon: '⚡' },
  { name: 'glass', label: '玻璃态', icon: '🔮' },
  { name: 'minimal', label: '极简', icon: '⚪' },
  { name: 'retro', label: '复古', icon: '📼' },
  { name: 'sakura', label: '樱花', icon: '🌸' },
  { name: 'ocean', label: '海洋', icon: '🌊' }
]

// 响应式状态
const currentTheme = ref('neon')
const isDark = ref(false)

// 计算属性
export const theme = computed(() => currentTheme.value)
export const darkMode = computed(() => isDark.value)

// 获取随机主题
function getRandomTheme() {
  const randomIndex = Math.floor(Math.random() * themeList.length)
  return themeList[randomIndex].name
}

// 检测系统主题偏好
function getSystemPreference() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

// 应用主题到 HTML 元素
function applyThemeToDOM(themeName, dark) {
  if (typeof document === 'undefined') return
  
  const html = document.documentElement
  
  // 移除所有主题类
  themeList.forEach(theme => {
    html.classList.remove(`theme-${theme.name}`)
  })
  
  // 添加当前主题类
  html.classList.add(`theme-${themeName}`)
  
  // 设置明暗模式
  if (dark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

// 保存到 localStorage
function saveToStorage(themeName, dark) {
  if (typeof localStorage === 'undefined') return
  
  localStorage.setItem('portfolio-theme', themeName)
  localStorage.setItem('portfolio-dark-mode', dark.toString())
}

// 从 localStorage 读取
function loadFromStorage() {
  if (typeof localStorage === 'undefined') return { theme: null, dark: null }
  
  const savedTheme = localStorage.getItem('portfolio-theme')
  const savedDark = localStorage.getItem('portfolio-dark-mode')
  
  return {
    theme: savedTheme,
    dark: savedDark ? savedDark === 'true' : null
  }
}

// 初始化主题
export function initTheme() {
  const { theme: savedTheme, dark: savedDark } = loadFromStorage()
  
  // 确定初始主题
  const initialTheme = savedTheme || getRandomTheme()
  
  // 确定初始明暗模式
  const initialDark = savedDark !== null ? savedDark : getSystemPreference()
  
  // 设置状态
  currentTheme.value = initialTheme
  isDark.value = initialDark
  
  // 应用到 DOM
  applyThemeToDOM(initialTheme, initialDark)
  
  // 保存设置
  saveToStorage(initialTheme, initialDark)
  
  // 监听系统主题变化（仅在用户没有手动设置时）
  if (typeof window !== 'undefined' && savedDark === null) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (localStorage.getItem('portfolio-dark-mode') === null) {
        setMode(e.matches ? 'dark' : 'light')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
  }
}

// 应用主题
export function applyTheme(themeName) {
  if (!themeList.find(t => t.name === themeName)) {
    console.warn(`Unknown theme: ${themeName}`)
    return
  }
  
  currentTheme.value = themeName
  applyThemeToDOM(themeName, isDark.value)
  saveToStorage(themeName, isDark.value)
}

// 随机主题
export function randomizeTheme() {
  const randomTheme = getRandomTheme()
  applyTheme(randomTheme)
}

// 设置明暗模式
export function setMode(mode) {
  const dark = mode === 'dark'
  isDark.value = dark
  applyThemeToDOM(currentTheme.value, dark)
  saveToStorage(currentTheme.value, dark)
}

// 切换明暗模式
export function toggleMode() {
  setMode(isDark.value ? 'light' : 'dark')
}

// 获取当前主题信息
export function getCurrentThemeInfo() {
  return themeList.find(t => t.name === currentTheme.value) || themeList[0]
}

// 导出 composable
export function useTheme() {
  return {
    theme,
    darkMode,
    themeList,
    applyTheme,
    randomizeTheme,
    setMode,
    toggleMode,
    getCurrentThemeInfo
  }
}