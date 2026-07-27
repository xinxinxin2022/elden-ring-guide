<template>
  <div class="guide-detail-page" v-if="guide">
    <div class="container">
      <nav class="breadcrumbs">
        <router-link to="/">{{ t('nav.home') }}</router-link>
        <span class="separator">›</span>
        <router-link to="/guides">{{ t('nav.guides') }}</router-link>
        <span class="separator">›</span>
        <span>{{ loc(guide.title) }}</span>
      </nav>

      <div class="content-layout">
        <article class="guide-main">
          <header class="guide-header">
            <span class="guide-category-badge">{{ loc(guide.category) }}</span>
            <h1 class="guide-title">{{ loc(guide.title) }}</h1>
            <div class="guide-meta">
              <span>{{ guide.date }}</span>
              <span class="meta-sep">•</span>
              <span>{{ guide.readTime }} {{ t('guides.minRead') }}</span>
            </div>
          </header>

          <div class="guide-hero-image">
            <img :src="guide.image" :alt="loc(guide.title)" loading="eager" />
          </div>

          <div class="article-content" v-html="loc(guide.content)"></div>

          <footer class="guide-footer">
            <div class="guide-tags" v-if="guide.tags && guide.tags.length">
              <span class="tag" v-for="tag in guide.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="guide-nav-links">
              <router-link v-if="prevGuide" :to="`/guides/${prevGuide.slug}`" class="nav-arrow prev">
                ← {{ loc(prevGuide.title) }}
              </router-link>
              <router-link v-if="nextGuide" :to="`/guides/${nextGuide.slug}`" class="nav-arrow next">
                {{ loc(nextGuide.title) }} →
              </router-link>
            </div>
          </footer>
        </article>

        <Sidebar class="guide-sidebar" />
      </div>
    </div>
  </div>

  <div v-else class="not-found container text-center section">
    <h1>{{ t('guideDetail.guideNotFound') }}</h1>
    <p>{{ t('guideDetail.notFoundText') }}</p>
    <router-link to="/guides" class="btn">{{ t('guideDetail.browseAll') }}</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Sidebar from '@/components/Sidebar.vue'
import { guides, localized } from '@/data/guides'

const route = useRoute()
const { t, locale } = useI18n()
const loc = (field) => localized(field, locale.value)

const slug = computed(() => route.params.slug)

const guide = computed(() => {
  return guides.find(g => g.slug === slug.value)
})

const guideIndex = computed(() => {
  return guides.findIndex(g => g.slug === slug.value)
})

const prevGuide = computed(() => {
  return guideIndex.value > 0 ? guides[guideIndex.value - 1] : null
})

const nextGuide = computed(() => {
  return guideIndex.value < guides.length - 1 ? guides[guideIndex.value + 1] : null
})
</script>

<style scoped>
.guide-detail-page {
  padding-top: 40px;
  padding-bottom: 80px;
}

.guide-header {
  text-align: center;
  margin-bottom: 36px;
}

.guide-category-badge {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: rgba(201, 169, 97, 0.1);
  color: var(--color-gold);
  padding: 6px 14px;
  border-radius: 3px;
  border: 1px solid var(--color-border-gold);
  margin-bottom: 16px;
}

.guide-title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--color-gold-bright);
  margin-bottom: 16px;
  line-height: 1.2;
}

.guide-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-ui);
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.meta-sep {
  color: var(--color-text-dim);
}

.guide-hero-image {
  margin-bottom: 36px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.guide-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

.guide-footer {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tag {
  font-family: var(--font-ui);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  padding: 4px 12px;
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: 3px;
}

.guide-nav-links {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.nav-arrow {
  font-family: var(--font-ui);
  font-size: 0.9rem;
  color: var(--color-gold);
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: all var(--transition-fast);
  max-width: 48%;
  text-decoration: none;
}

.nav-arrow:hover {
  border-color: var(--color-gold-dim);
  background: rgba(201, 169, 97, 0.05);
}

.content-layout {
  display: flex;
  gap: 40px;
}

.guide-main {
  flex: 1;
  min-width: 0;
}

.guide-sidebar {
  display: block;
}

@media (max-width: 1024px) {
  .content-layout {
    flex-direction: column;
  }
  .guide-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .guide-nav-links {
    flex-direction: column;
  }
  .nav-arrow {
    max-width: 100%;
  }
}
</style>
