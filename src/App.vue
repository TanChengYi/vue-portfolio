<template>
  <div class="min-h-screen transition-all duration-300" :style="{ background: 'var(--bg)' }">
    <!-- 固定导航栏 -->
    <nav class="fixed top-0 left-0 right-0 z-50 nav-blur border-b" :style="{ borderColor: 'var(--accent)' }">
      <div class="container-pro">
        <div class="flex items-center justify-between h-16">
          <!-- Logo/品牌名 -->
          <div class="flex items-center">
            <h1 class="text-xl font-bold gradient-text">{{ $t('site.title') }}</h1>
          </div>
          
          <!-- 导航链接 - 桌面端 -->
          <div class="hidden md:flex items-center space-x-8">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-sm font-medium transition-all duration-300 hover:scale-105"
              :style="{ color: 'var(--text)' }"
              @mouseover="(e) => e.target.style.color = 'var(--accent)'"
              @mouseleave="(e) => e.target.style.color = 'var(--text)'"
            >
              {{ $t(link.labelKey) }}
            </a>
          </div>
          
          <!-- 语言切换器、主题切换器和移动端菜单 -->
          <div class="flex items-center gap-4">
            <LangSwitcher />
            <ThemeSwitcher />
            
            <!-- 移动端菜单按钮 -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2 rounded-lg transition-all duration-300"
              :style="{ 
                background: 'var(--card)', 
                color: 'var(--accent)',
                boxShadow: 'var(--shadow)'
              }"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- 移动端导航菜单 -->
        <div
          v-show="mobileMenuOpen"
          class="md:hidden py-4 animate-fade-in"
          :style="{ borderTop: '1px solid var(--accent)' }"
        >
          <div class="flex flex-col space-y-3">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="mobileMenuOpen = false"
              class="text-sm font-medium py-2 transition-all duration-300"
              :style="{ color: 'var(--text)' }"
            >
              {{ $t(link.labelKey) }}
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- 主要内容 -->
    <main class="pt-16">
      <!-- Hero 区块 -->
      <section id="hero" class="min-h-screen flex items-center">
        <Hero />
      </section>
      
      <!-- About 区块 -->
      <section id="about" class="py-20">
        <About />
      </section>
      
      <!-- Projects 区块 -->
      <section id="projects" class="py-20" :style="{ background: 'var(--card)' }">
        <Projects />
      </section>
      
      <!-- Experience 区块 -->
      <section id="experience" class="py-20">
        <Experience />
      </section>
      
      <!-- Contact 区块 -->
      <section id="contact" class="py-20" :style="{ background: 'var(--card)' }">
        <Contact />
      </section>
    </main>
    
    <!-- 返回顶部按钮 -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 rounded-full transition-all duration-300 hover:scale-110 z-40"
      :style="{ 
        background: 'var(--accent)', 
        color: 'var(--bg)',
        boxShadow: 'var(--shadow)'
      }"
      :title="$t('common.backToTop')"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LangSwitcher from './components/LangSwitcher.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import Hero from './sections/Hero.vue'
import About from './sections/About.vue'
import Projects from './sections/Projects.vue'
import Experience from './sections/Experience.vue'
import Contact from './sections/Contact.vue'

export default {
  name: 'App',
  components: {
    LangSwitcher,
    ThemeSwitcher,
    Hero,
    About,
    Projects,
    Experience,
    Contact
  },
  setup() {
    const { t } = useI18n()
    const mobileMenuOpen = ref(false)
    const showBackToTop = ref(false)
    
    // 导航链接
    const navLinks = [
      { href: '#about', labelKey: 'nav.about' },
      { href: '#projects', labelKey: 'nav.projects' },
      { href: '#experience', labelKey: 'nav.experience' },
      { href: '#contact', labelKey: 'nav.contact' }
    ]
    
    // 滚动处理
    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
      
      // 关闭移动端菜单
      if (mobileMenuOpen.value) {
        mobileMenuOpen.value = false
      }
    }
    
    // 返回顶部
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    // 平滑滚动到锚点
    const setupSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            const offsetTop = target.offsetTop - 80 // 考虑固定导航栏高度
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        })
      })
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      setupSmoothScroll()
      
      // 添加页面加载动画
      document.body.style.opacity = '0'
      setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out'
        document.body.style.opacity = '1'
      }, 100)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      mobileMenuOpen,
      showBackToTop,
      navLinks,
      scrollToTop
    }
  }
}
</script>