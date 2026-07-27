<template>
  <div id="elden-ring-app" :class="{ 'menu-open': mobileMenuOpen }">
    <AppHeader @toggle-menu="mobileMenuOpen = !mobileMenuOpen" :menu-open="mobileMenuOpen" />
    <main class="main-content">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
const { locale } = useI18n()
const mobileMenuOpen = ref(false)

// Sync document lang attribute with i18n locale
watch(locale, (lang) => {
  document.documentElement.lang = lang
}, { immediate: true })

// Update head meta on route change
const headData = ref({
  title: 'Elden Ring Guide',
  meta: [
    { name: 'description', content: 'Your comprehensive Elden Ring guide.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://game-elden.asia/' }
  ]
})

useHead(headData)

watch(() => route.meta, (meta) => {
  if (meta.title) {
    headData.value.title = meta.title
  }
  if (meta.description) {
    headData.value.meta = [
      { name: 'description', content: meta.description },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      ...(meta.image ? [{ property: 'og:image', content: meta.image }] : [])
    ]
  }
}, { immediate: true })

// Close mobile menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style>
/* Base transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
