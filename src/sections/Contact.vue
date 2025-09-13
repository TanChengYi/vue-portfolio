<template>
  <div class="container-pro">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">{{ $t('contact.title') }}</h2>
      <p class="text-xl max-w-3xl mx-auto" :style="{ color: 'var(--muted)' }">{{ $t('contact.subtitle') }}</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div class="animate-fade-in-up delay-200">
        <div class="card">
          <h3 class="text-2xl font-bold mb-8" :style="{ color: 'var(--text)' }">{{ $t('contact.contactInfo') }}</h3>
          <div class="space-y-6">
            <div v-for="contact in contactInfo" :key="contact.type" class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl" :style="{ background: 'var(--accent)', color: 'var(--bg)' }">
                {{ contact.icon }}
              </div>
              <div>
                <h4 class="font-semibold" :style="{ color: 'var(--text)' }">{{ $t(`contact.${contact.type}`) }}</h4>
                <p :style="{ color: 'var(--muted)' }">{{ contact.value }}</p>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <h4 class="text-lg font-semibold mb-4" :style="{ color: 'var(--text)' }">{{ $t('contact.followMe') }}</h4>
            <div class="flex gap-4">
              <a v-for="social in socialLinks" :key="social.platform" :href="social.url" target="_blank" 
                class="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                :style="{ background: 'var(--accent)', color: 'var(--bg)' }">{{ social.icon }}</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="animate-fade-in-up delay-300">
        <div class="card">
          <h3 class="text-2xl font-bold mb-8" :style="{ color: 'var(--text)' }">{{ $t('contact.sendMessage') }}</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <input v-model="form.name" type="text" required :placeholder="$t('contact.namePlaceholder')" 
              class="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
              :style="{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--accent)' }" />
            <input v-model="form.email" type="email" required :placeholder="$t('contact.emailPlaceholder')"
              class="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
              :style="{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--accent)' }" />
            <textarea v-model="form.message" required rows="5" :placeholder="$t('contact.messagePlaceholder')"
              class="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none"
              :style="{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--accent)' }"></textarea>
            <button type="submit" class="w-full btn">{{ $t('contact.sendMessage') }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Contact',
  setup() {
    const { t } = useI18n()
    const form = reactive({ name: '', email: '', message: '' })
    
    const contactInfo = [
      { type: 'email', icon: '📧', value: 'tanchengyi1997@gmail.com' },
      { type: 'location', icon: '📍', value: 'Kuala Lumpur, Malaysia' }
    ]
    
    const socialLinks = [
      { platform: 'GitHub', icon: '📚', url: 'https://github.com/TanChengYi' },
      { platform: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/jack-tan-3546011b3' }
    ]
    
    const handleSubmit = () => {
      alert(t('contact.demoMessage'))
    }
    
    return { form, contactInfo, socialLinks, handleSubmit }
  }
}
</script>