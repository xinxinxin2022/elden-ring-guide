<template>
  <div class="home-page">
    <HeroScene />

    <section class="section featured-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('home.featuredTitle') }}</h2>
          <p class="section-subtitle">{{ t('home.featuredSubtitle') }}</p>
        </div>
        <div class="guides-grid">
          <GuideCard v-for="guide in featuredGuides" :key="guide.id" :guide="guide" />
        </div>
        <div class="section-cta">
          <router-link to="/guides" class="btn">{{ t('home.viewAll') }}</router-link>
        </div>
      </div>
    </section>

    <section class="section categories-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('home.categoryTitle') }}</h2>
          <p class="section-subtitle">{{ t('home.categorySubtitle') }}</p>
        </div>
        <div class="categories-grid">
          <router-link
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/guides?category=${cat.slug}`"
            class="category-card"
          >
            <span class="category-icon">{{ cat.icon }}</span>
            <h3 class="category-name">{{ loc(cat.name) }}</h3>
            <p class="category-desc">{{ loc(cat.description) }}</p>
            <span class="category-count">{{ getCatCount(cat.slug) }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section about-section">
      <div class="container container--narrow text-center">
        <h2 class="section-title">{{ t('home.whyTitle') }}</h2>
        <p class="about-text">{{ t('home.whyText') }}</p>
        <div class="stats-row">
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">{{ t('home.guides') }}</span>
          </div>
          <div class="stat">
            <span class="stat-number">100+</span>
            <span class="stat-label">{{ t('home.bosses') }}</span>
          </div>
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">{{ t('home.builds') }}</span>
          </div>
        </div>
        <router-link to="/about" class="btn mt-4">{{ t('home.learnMore') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroScene from '@/components/HeroScene.vue'
import GuideCard from '@/components/GuideCard.vue'
import { guides, categories, localized } from '@/data/guides'

const { t, locale } = useI18n()
const loc = (field) => localized(field, locale.value)

const featuredGuides = computed(() => guides.slice(0, 6))

const getCatCount = (slug) => {
  return guides.filter(g => {
    const cat = typeof g.category === 'object' ? g.category.en : g.category
    return cat.toLowerCase().replace(/\s+/g, '-') === slug
  }).length
}
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  color: var(--color-gold-bright);
  margin-bottom: 12px;
}

.section-subtitle {
  font-family: var(--font-ui);
  font-size: 1.05rem;
  color: var(--color-text-muted);
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

.section-cta {
  text-align: center;
  margin-top: 48px;
}

/* Categories */
.categories-section {
  background: var(--color-bg-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.category-card:hover {
  border-color: var(--color-border-gold);
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.category-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-gold-bright);
  margin-bottom: 8px;
}

.category-desc {
  font-family: var(--font-ui);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  flex: 1;
}

.category-count {
  font-family: var(--font-ui);
  font-size: 0.78rem;
  color: var(--color-gold);
  font-weight: 600;
}

/* About section */
.about-text {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  max-width: 680px;
  margin: 0 auto 36px;
  line-height: 1.8;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-family: var(--font-ui);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@media (max-width: 768px) {
  .guides-grid {
    grid-template-columns: 1fr;
  }

  .stats-row {
    gap: 32px;
  }
}
</style>
