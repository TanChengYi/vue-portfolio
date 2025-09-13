<template>
  <div class="flex items-center gap-2">
    <!-- 主题选择下拉框 -->
    <div class="relative">
      <button
        @click="showDropdown = !showDropdown"
        class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        :style="{ 
          background: 'var(--card)', 
          color: 'var(--text)',
          boxShadow: 'var(--shadow)'
        }"
      >
        <span class="text-lg">{{ currentThemeInfo.icon }}</span>
        <span class="hidden sm:inline text-sm font-medium">{{ currentThemeInfo.label }}</span>
        <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': showDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <!-- 下拉菜单 -->
      <div
        v-show="showDropdown"
        class="absolute top-full left-0 mt-2 py-2 w-48 rounded-lg z-50 animate-fade-in"
        :style="{ 
          background: 'var(--card)', 
          boxShadow: 'var(--shadow)',
          border: '1px solid var(--accent)'
        }"
      >
        <button
          v-for="themeOption in themeList"
          :key="themeOption.name"
          @click="selectTheme(themeOption.name)"
          class="w-full px-4 py-2 text-left flex items-center gap-3 transition-all duration-200 hover:scale-[1.02]"
          :class="{ 'font-medium': themeOption.name === theme }"
          :style="{ 
            color: themeOption.name === theme ? 'var(--accent)' : 'var(--text)',
            background: themeOption.name === theme ? 'rgba(var(--accent), 0.1)' : 'transparent'
          }"
        >
          <span class="text-lg">{{ themeOption.icon }}</span>
          <span class="text-sm">{{ themeOption.label }}</span>
          <span v-if="themeOption.name === theme" class="ml-auto text-xs">✓</span>
        </button>
      </div>
    </div>
    
    <!-- 随机主题按钮 -->
    <button
      @click="handleRandomTheme"
      class="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-180"
      :style="{ 
        background: 'var(--card)', 
        color: 'var(--accent)',
        boxShadow: 'var(--shadow)'
      }"
      title="随机主题"
    >
      <span class="text-lg">🎲</span>
    </button>
    
    <!-- 明暗模式切换按钮 -->
    <button
      @click="handleToggleMode"
      class="p-2 rounded-lg transition-all duration-300 hover:scale-110"
      :style="{ 
        background: 'var(--card)', 
        color: 'var(--accent)',
        boxShadow: 'var(--shadow)'
      }"
      :title="darkMode ? '切换到浅色模式' : '切换到深色模式'"
    >
      <span class="text-lg">{{ darkMode ? '☀️' : '🌙' }}</span>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'

export default {
  name: 'ThemeSwitcher',
  setup() {
    const { 
      theme, 
      darkMode, 
      themeList, 
      applyTheme, 
      randomizeTheme, 
      toggleMode, 
      getCurrentThemeInfo 
    } = useTheme()
    
    const showDropdown = ref(false)
    const currentThemeInfo = ref(getCurrentThemeInfo())
    
    // 选择主题
    const selectTheme = (themeName) => {
      applyTheme(themeName)
      currentThemeInfo.value = getCurrentThemeInfo()
      showDropdown.value = false
    }
    
    // 随机主题
    const handleRandomTheme = () => {
      randomizeTheme()
      currentThemeInfo.value = getCurrentThemeInfo()
      showDropdown.value = false
    }
    
    // 切换明暗模式
    const handleToggleMode = () => {
      toggleMode()
    }
    
    // 点击外部关闭下拉菜单
    const handleClickOutside = (event) => {
      const dropdown = event.target.closest('.relative')
      if (!dropdown) {
        showDropdown.value = false
      }
    }
    
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
      // 监听主题变化，更新当前主题信息
      const updateThemeInfo = () => {
        currentThemeInfo.value = getCurrentThemeInfo()
      }
      // 简单的方式：定期检查主题变化
      const interval = setInterval(updateThemeInfo, 100)
      onUnmounted(() => {
        clearInterval(interval)
      })
    })
    
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })
    
    return {
      theme,
      darkMode,
      themeList,
      showDropdown,
      currentThemeInfo,
      selectTheme,
      handleRandomTheme,
      handleToggleMode
    }
  }
}
</script>