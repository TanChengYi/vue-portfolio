<template>
  <div class="container-pro">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">{{ $t('about.title') }}</h2>
      <p class="text-xl max-w-3xl mx-auto" :style="{ color: 'var(--muted)' }">
        {{ $t('about.subtitle') }}
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="animate-fade-in-up delay-200">
        <div class="card">
          <h3 class="text-2xl font-bold mb-6" :style="{ color: 'var(--text)' }">
            {{ $t('about.myStory') }}
          </h3>
          <div class="space-y-4 text-lg leading-relaxed" :style="{ color: 'var(--muted)' }">
            <p>{{ $t('about.storyContent', { years: yearsOfExperience }) }}</p>
            <p>{{ $t('about.storyContent2') }}</p>
            <p>{{ $t('about.storyContent3') }}</p>
          </div>
          
          <div class="mt-8">
            <h4 class="text-lg font-semibold mb-4" :style="{ color: 'var(--text)' }">
              {{ $t('about.highlights') }}
            </h4>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="highlight in highlights" :key="highlight.labelKey" class="text-center p-4 rounded-lg transition-all duration-300 hover:scale-105" :style="{ background: 'var(--bg)', border: '1px solid var(--accent)' }">
                <div class="text-2xl font-bold gradient-text">{{ highlight.value }}</div>
                <div class="text-sm" :style="{ color: 'var(--muted)' }">{{ $t(highlight.labelKey) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="animate-fade-in-up delay-300">
        <div class="card">
          <h3 class="text-2xl font-bold mb-6" :style="{ color: 'var(--text)' }">
            {{ $t('about.skills') }}
          </h3>
          <div class="space-y-6">
            <div v-for="skillCategory in skills" :key="skillCategory.category">
              <h4 class="text-lg font-semibold mb-3" :style="{ color: 'var(--accent)' }">{{ skillCategory.category }}</h4>
              <div class="space-y-3">
                <div v-for="skill in skillCategory.items" :key="skill.name" class="flex items-center gap-3">
                  <span class="text-lg">{{ skill.icon }}</span>
                  <span class="font-medium" :style="{ color: 'var(--text)' }">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { skills } from '../data/projects.js'

export default {
  name: 'About',
  setup() {
    const { t } = useI18n()
    
    const yearsOfExperience = computed(() => {
      const startYear = 2020
      const currentYear = new Date().getFullYear()
      return currentYear - startYear
    })
    
    const highlights = [
      { value: '25+', labelKey: 'about.projects' },
      { value: '4+', labelKey: 'about.years' },
      { value: '10+', labelKey: 'about.technologies' },
      { value: '100%', labelKey: 'about.satisfaction' }
    ]
    
    return { yearsOfExperience, highlights, skills }
  }
}
</script>