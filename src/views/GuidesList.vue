<template>
  <div class="guides-list-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">{{ t('guides.title') }}</h1>
        <p class="page-subtitle">{{ t('guides.subtitle') }}</p>
      </div>

      <div class="filters">
        <button
          v-for="cat in allCategories"
          :key="cat.slug"
          class="filter-btn"
          :class="{ active: selectedCategory === cat.slug }"
          @click="selectCategory(cat.slug)"
        >
          {{ loc(cat.name) }}
        </button>
      </div>

      <div class="content-layout">
        <div class="guides-main">
          <div v-if="filteredGuides.length" class="guides-grid">
            <GuideCard v-for="guide in filteredGuides" :key="guide.id" :guide="guide" />
          </div>
          <div v-else class="no-results">
            <p>{{ t('guides.noResults') }}</p>
          </div>
        </div>
        <Sidebar class="guides-sidebar" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import GuideCard from '@/components/GuideCard.vue'
import Sidebar from '@/components/Sidebar.vue'
import { guides, categories, localized } from '@/data/guides'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const loc = (field) => localized(field, locale.value)

const selectedCategory = ref('all')

const allCategories = computed(() => [
  { slug: 'all', name: { en: 'All Guides', zh: '全部攻略' } },
  ...categories
])

const filteredGuides = computed(() => {
  if (selectedCategory.value === 'all') return guides
  return guides.filter(g => {
    const cat = typeof g.category === 'object' ? g.category.en : g.category
    return cat.toLowerCase().replace(/\s+/g, '-') === selectedCategory.value
  })
})

const selectCategory = (slug) => {
  selectedCategory.value = slug
  if (slug === 'all') {
    router.replace('/guides')
  } else {
    router.replace(`/guides?category=${slug}`)
  }
}

onMounted(() => {
  const cat = route.query.category
  if (cat) selectedCategory.value = cat
})
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 48px 0 32px;
}

.page-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-gold-bright);
  margin-bottom: 12px;
}

.page-subtitle {
  font-family: var(--font-ui);
  font-size: 1.05rem;
  color: var(--color-text-muted);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 40px;
}

.filter-btn {
  font-family: var(--font-ui);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 8px 18px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-gold-dim);
  color: var(--color-gold);
}

.filter-btn.active {
  background: var(--color-gold);
  color: var(--color-bg-deepest);
  border-color: var(--color-gold);
}

.content-layout {
  display: flex;
  gap: 40px;
  padding-bottom: 80px;
}

.guides-main {
  flex: 1;
  min-width: 0;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.guides-sidebar {
  display: block;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: var(--color-text-muted);
  font-family: var(--font-ui);
}

@media (max-width: 1024px) {
  .content-layout {
    flex-direction: column;
  }
  .guides-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .guides-grid {
    grid-template-columns: 1fr;
  }
}
</style>
