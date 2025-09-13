import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zhCN from '../locales/zh-CN.json'
import ms from '../locales/ms.json'

// Get browser language
function getBrowserLanguage() {
  const lang = navigator.language || navigator.userLanguage
  if (lang.startsWith('zh')) {
    return 'zh-CN'
  } else if (lang.startsWith('ms')) {
    return 'ms'
  }
  return 'en'
}

// Get saved language from localStorage or browser default
function getInitialLanguage() {
  const savedLang = localStorage.getItem('portfolio-language')
  return savedLang || getBrowserLanguage()
}

// Update HTML lang attribute
function updateHtmlLang(locale) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', locale)
  }
}

const messages = {
  en,
  'zh-CN': zhCN,
  ms
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLanguage(),
  fallbackLocale: 'en',
  messages
})

// Set initial HTML lang
updateHtmlLang(i18n.global.locale.value)

// Language switching function
export function setLanguage(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('portfolio-language', locale)
  updateHtmlLang(locale)
}

// Get available locales
export const availableLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ms', name: 'Bahasa Malaysia', flag: '🇲🇾' }
]

export default i18n