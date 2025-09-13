<template>
  <div class="container-pro">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">工作经历</h2>
      <p class="text-xl max-w-3xl mx-auto" :style="{ color: 'var(--muted)' }">我的职业成长历程，记录着每一个重要的里程碑和技能提升</p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" :style="{ background: 'var(--accent)' }"></div>
        
        <div class="space-y-12">
          <div v-for="(experience, index) in experiences" :key="index" class="relative flex items-center animate-fade-in-up" :class="`delay-${(index + 1) * 200}`">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10" :style="{ background: 'var(--bg)', borderColor: 'var(--accent)' }"></div>
            
            <div class="w-full" :class="index % 2 === 0 ? 'pr-1/2 mr-8 text-right' : 'pl-1/2 ml-8'">
              <div class="card">
                <div class="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" :style="{ background: 'var(--accent)', color: 'var(--bg)' }">{{ experience.duration }}</div>
                
                <h3 class="text-xl font-bold mb-2" :style="{ color: 'var(--text)' }">{{ experience.position }}</h3>
                <h4 class="text-lg font-semibold mb-2" :style="{ color: 'var(--accent)' }">{{ experience.company }}</h4>
                <p class="text-sm mb-4" :style="{ color: 'var(--muted)' }">📍 {{ experience.location }}</p>
                
                <p class="mb-4 leading-relaxed" :style="{ color: 'var(--text)' }">{{ experience.description }}</p>
                
                <div class="mb-4">
                  <h5 class="font-semibold mb-2" :style="{ color: 'var(--text)' }">主要成就：</h5>
                  <ul class="space-y-1">
                    <li v-for="achievement in experience.achievements" :key="achievement" class="text-sm flex items-start gap-2" :style="{ color: 'var(--muted)' }">
                      <span :style="{ color: 'var(--accent)' }">•</span>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 class="font-semibold mb-2" :style="{ color: 'var(--text)' }">技术栈：</h5>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in experience.tech" :key="tech" class="pill text-xs">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-16 animate-fade-in-up delay-600">
      <p class="text-lg mb-6" :style="{ color: 'var(--muted)' }">想了解更多详细信息？</p>
      <button class="btn">📄 下载完整简历</button>
    </div>
  </div>
</template>

<script>
import { experiences } from '../data/projects.js'

export default {
  name: 'Experience',
  setup() {
    return { experiences }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .absolute.left-1\/2 {
    left: 2rem;
  }
  
  .pr-1\/2,
  .pl-1\/2 {
    padding-left: 4rem;
    padding-right: 0;
    text-align: left;
  }
  
  .mr-8,
  .ml-8 {
    margin: 0;
  }
}
</style>