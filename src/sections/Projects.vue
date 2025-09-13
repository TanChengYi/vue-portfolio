<template>
  <div class="container-pro">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">{{ $t('projects.title') }}</h2>
      <p class="text-xl max-w-3xl mx-auto" :style="{ color: 'var(--muted)' }">{{ $t('projects.subtitle') }}</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(project, index) in projects" :key="project.title" class="card group cursor-pointer animate-fade-in-up" :class="`delay-${(index % 3 + 1) * 100}`">
        <div class="relative mb-6 rounded-xl overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" :style="{ background: project.cover ? 'none' : 'var(--card)' }">
            <img v-if="project.cover" :src="project.cover" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div v-else class="w-full h-full flex items-center justify-center text-6xl" :style="{ color: 'var(--accent)' }">🚀</div>
          </div>
          
          <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            <a v-if="project.links?.demo" :href="project.links.demo" target="_blank" rel="noopener noreferrer" class="btn text-sm px-4 py-2" @click.stop>🔗 {{ $t('projects.preview') }}</a>
            <a v-if="project.links?.repo" :href="project.links.repo" target="_blank" rel="noopener noreferrer" class="btn-ghost text-sm px-4 py-2" @click.stop>📚 {{ $t('projects.sourceCode') }}</a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--text)' }">{{ project.title }}</h3>
          <p class="text-sm leading-relaxed mb-4" :style="{ color: 'var(--muted)' }">{{ project.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.stack" :key="tech" class="pill text-xs">{{ tech }}</span>
          </div>
          
          <div class="flex gap-3">
            <a v-if="project.links?.demo" :href="project.links.demo" target="_blank" rel="noopener noreferrer" class="btn text-sm flex-1 text-center">{{ $t('projects.viewDemo') }}</a>
            <a v-if="project.links?.repo" :href="project.links.repo" target="_blank" rel="noopener noreferrer" class="btn-ghost text-sm flex-1 text-center">{{ $t('projects.viewCode') }}</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-16 animate-fade-in-up delay-500">
      <p class="text-lg mb-6" :style="{ color: 'var(--muted)' }">{{ $t('projects.moreProjects') }}</p>
      <a href="https://github.com/TanChengYi" target="_blank" rel="noopener noreferrer" class="btn">{{ $t('projects.visitGithub') }}</a>
    </div>
  </div>
</template>

<script>
import { projects } from '../data/projects.js'

export default {
  name: 'Projects',
  setup() {
    return { projects }
  }
}
</script>