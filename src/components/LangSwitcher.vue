<template>
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
      <span class="text-lg">{{ currentLocale.flag }}</span>
      <span class="hidden sm:inline text-sm font-medium">{{ currentLocale.name }}</span>
      <svg 
        class="w-4 h-4 transition-transform duration-200" 
        :class="{ 'rotate-180': showDropdown }" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <!-- Dropdown menu -->
    <div
      v-show="showDropdown"
      class="absolute top-full right-0 mt-2 py-2 w-48 rounded-lg z-50 animate-fade-in"
      :style="{ 
        background: 'var(--card)', 
        boxShadow: 'var(--shadow)',
        border: '1px solid var(--accent)'
      }"
    >
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="changeLanguage(locale.code)"
        class="w-full px-4 py-2 text-left flex items-center gap-3 transition-all duration-200 hover:scale-[1.02]"
        :class="{ 'font-medium': locale.code === $i18n.locale }"
        :style="{ 
          color: locale.code === $i18n.locale ? 'var(--accent)' : 'var(--text)',
          background: locale.code === $i18n.locale ? 'rgba(var(--accent), 0.1)' : 'transparent'
        }"
      >
        <span class="text-lg">{{ locale.flag }}</span>
        <span class="text-sm">{{ locale.name }}</span>
        <span v-if="locale.code === $i18n.locale" class="ml-auto text-xs">✓</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLanguage, availableLocales } from '../i18n/index.js'

export default {
  name: 'LangSwitcher',
  setup() {
    const { locale } = useI18n()
    const showDropdown = ref(false)
    
    // Get current locale info
    const currentLocale = computed(() => {
      return availableLocales.find(l => l.code === locale.value) || availableLocales[0]
    })
    
    // Change language
    const changeLanguage = (newLocale) => {
      setLanguage(newLocale)
      showDropdown.value = false
    }
    
    // Click outside to close dropdown
    const handleClickOutside = (event) => {
      const dropdown = event.target.closest('.relative')
      if (!dropdown) {
        showDropdown.value = false
      }
    }
    
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })
    
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })
    
    return {
      showDropdown,
      currentLocale,
      availableLocales,
      changeLanguage
    }
  }
}
</script>