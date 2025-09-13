<template>
  <div class="container-pro">
    <div class="flex items-center justify-center min-h-screen text-center">
      <div class="max-w-4xl mx-auto animate-fade-in-up">
        <div class="mb-8">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 card" :style="{ background: 'linear-gradient(135deg, var(--accent), var(--text))' }">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="个人头像" class="w-full h-full object-cover" />
          </div>
        </div>
        
        <div class="mb-6 animate-fade-in-up delay-200">
          <h1 class="text-5xl md:text-7xl font-bold mb-4 gradient-text">{{ $t('hero.greeting') }}</h1>
          <p class="text-xl md:text-2xl mb-2" :style="{ color: 'var(--muted)' }">{{ $t('hero.position') }}</p>
          <p class="text-lg" :style="{ color: 'var(--muted)' }">{{ $t('hero.tagline') }}</p>
        </div>
        
        <div class="mb-8 animate-fade-in-up delay-300">
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="skill in featuredSkills" :key="skill" class="pill">{{ skill }}</span>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <a href="#projects" class="btn">{{ $t('hero.viewProjects') }}</a>
          <a href="#contact" class="btn-ghost">{{ $t('hero.contactMe') }}</a>
        </div>
        
        <div class="mt-16 animate-fade-in-up delay-500">
          <div class="flex flex-col items-center">
            <p class="text-sm mb-4" :style="{ color: 'var(--muted)' }">{{ $t('hero.scrollDown') }}</p>
            <div class="w-6 h-10 rounded-full border-2 flex justify-center" :style="{ borderColor: 'var(--accent)' }">
              <div class="w-1 h-3 rounded-full mt-2 animate-bounce" :style="{ background: 'var(--accent)' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 animate-pulse" :style="{ background: 'radial-gradient(circle, var(--accent), transparent)' }"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse delay-1000" :style="{ background: 'radial-gradient(circle, var(--accent), transparent)' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  setup() {
    const featuredSkills = ['C#', '.NET', 'Vue.js', 'JavaScript', 'MSSQL', 'ASP.NET']
    return { featuredSkills }
  }
}
</script>
