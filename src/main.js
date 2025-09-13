import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n/index.js'
import './styles/tailwind.css'
import './styles/themes.css'
import { initTheme } from './composables/useTheme.js'

// Initialize theme
initTheme()

const app = createApp(App)
app.use(i18n)
app.mount('#app')