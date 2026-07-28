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

          <!-- Related Guides -->
          <section class="related-guides" v-if="relatedGuides.length">
            <h2 class="related-title">{{ t('guideDetail.relatedGuides') }}</h2>
            <div class="related-grid">
              <router-link
                v-for="rg in relatedGuides"
                :key="rg.slug"
                :to="`/guides/${rg.slug}`"
                class="related-card"
              >
                <div class="related-thumb">
                  <img :src="rg.image" :alt="loc(rg.title)" loading="lazy" />
                </div>
                <div class="related-info">
                  <span class="related-category">{{ loc(rg.category) }}</span>
                  <h3 class="related-name">{{ loc(rg.title) }}</h3>
                  <span class="related-meta">{{ rg.readTime }} {{ t('guides.minRead') }}</span>
                </div>
              </router-link>
            </div>
          </section>
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

const relatedGuides = computed(() => {
  if (!guide.value) return []
  const currentCategory = typeof guide.value.category === 'object' ? guide.value.category.en : guide.value.category
  return guides
    .filter(g => g.slug !== slug.value)
    .filter(g => {
      const cat = typeof g.category === 'object' ? g.category.en : g.category
      return cat === currentCategory
    })
    .slice(0, 3)
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

/* Related Guides */
.related-guides {
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid var(--color-border);
}

.related-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-gold-bright);
  margin-bottom: 28px;
  text-align: center;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.related-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: all var(--transition-fast);
  background: var(--color-bg-surface);
}

.related-card:hover {
  border-color: var(--color-gold-dim);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.related-thumb {
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: var(--color-bg-card);
}

.related-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.related-card:hover .related-thumb img {
  transform: scale(1.05);
}

.related-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.related-category {
  font-family: var(--font-ui);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-gold);
}

.related-name {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-meta {
  font-family: var(--font-ui);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin-top: auto;
}

@media (max-width: 768px) {
  .related-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .related-thumb {
    height: 180px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
