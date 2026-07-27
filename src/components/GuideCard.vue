<template>
  <router-link :to="`/guides/${guide.slug}`" class="guide-card card">
    <div class="guide-card-image">
      <img
        :src="guide.image"
        :alt="loc(guide.title)"
        loading="lazy"
        @error="handleImageError"
      />
      <div class="guide-card-overlay">
        <span class="guide-card-category">{{ loc(guide.category) }}</span>
      </div>
    </div>
    <div class="guide-card-body">
      <h3 class="guide-card-title">{{ loc(guide.title) }}</h3>
      <p class="guide-card-excerpt">{{ loc(guide.excerpt) }}</p>
      <div class="guide-card-meta">
        <span class="guide-card-date">{{ guide.date }}</span>
        <span class="guide-card-read-time">{{ guide.readTime }} {{ t('guides.minRead') }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { localized } from '@/data/guides'

const { t, locale } = useI18n()
const loc = (field) => localized(field, locale.value)

defineProps({
  guide: {
    type: Object,
    required: true
  }
})

const handleImageError = (e) => {
  e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop'
}
</script>

<style scoped>
.guide-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.guide-card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--color-bg-surface);
}

.guide-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.guide-card:hover .guide-card-image img {
  transform: scale(1.05);
}

.guide-card-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
}

.guide-card-category {
  font-family: var(--font-ui);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: rgba(10, 10, 15, 0.85);
  color: var(--color-gold);
  padding: 4px 10px;
  border-radius: 3px;
  border: 1px solid var(--color-border-gold);
}

.guide-card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.guide-card-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  color: var(--color-gold-bright);
  margin-bottom: 8px;
  line-height: 1.3;
  transition: color var(--transition-fast);
}

.guide-card:hover .guide-card-title {
  color: var(--color-gold);
}

.guide-card-excerpt {
  font-family: var(--font-ui);
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  margin-bottom: 16px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.guide-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-ui);
  font-size: 0.78rem;
  color: var(--color-text-dim);
  padding-top: 12px;
  border-top: 1px solid var(--color-border);
}
</style>
