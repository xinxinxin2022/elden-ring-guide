<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3 class="sidebar-title">{{ t('sidebar.popularGuides') }}</h3>
      <ul class="sidebar-list">
        <li v-for="guide in popularGuides" :key="guide.slug">
          <router-link :to="`/guides/${guide.slug}`" class="sidebar-link">
            <span class="sidebar-link-icon">▸</span>
            {{ loc(guide.title) }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">{{ t('sidebar.categories') }}</h3>
      <ul class="sidebar-list">
        <li v-for="cat in categories" :key="cat.slug">
          <router-link :to="`/guides?category=${cat.slug}`" class="sidebar-link">
            <span class="sidebar-link-icon">◆</span>
            {{ loc(cat.name) }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="sidebar-section sidebar-cta">
      <div class="cta-glow"></div>
      <h3 class="sidebar-title">{{ t('sidebar.joinTitle') }}</h3>
      <p>{{ t('sidebar.joinText') }}</p>
      <router-link to="/guides" class="btn btn--primary btn--sm">{{ t('sidebar.browseAll') }}</router-link>
    </div>
  </aside>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { guides, categories, localized } from '@/data/guides'

const { t, locale } = useI18n()
const loc = (field) => localized(field, locale.value)

const popularGuides = guides.slice(0, 6)
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
}

.sidebar-section {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.sidebar-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.sidebar-list {
  list-style: none;
}

.sidebar-list li {
  margin-bottom: 4px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-ui);
  font-size: 0.88rem;
  color: var(--color-text-muted);
  padding: 8px 0;
  transition: all var(--transition-fast);
}

.sidebar-link:hover {
  color: var(--color-gold-bright);
  padding-left: 4px;
}

.sidebar-link-icon {
  font-size: 0.7rem;
  color: var(--color-gold-dim);
}

.sidebar-cta {
  position: relative;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-bg-card), rgba(201, 169, 97, 0.05));
}

.cta-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(201, 169, 97, 0.06) 0%, transparent 60%);
  pointer-events: none;
}

.sidebar-cta p {
  font-family: var(--font-ui);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.btn--sm {
  padding: 8px 20px;
  font-size: 0.8rem;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
  }
}
</style>
