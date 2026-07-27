<template>
  <div class="lang-switcher">
    <button
      class="lang-btn"
      :class="{ active: currentLang === 'en' }"
      @click="switchLang('en')"
      :aria-label="'Switch to English'"
    >
      EN
    </button>
    <span class="lang-sep">/</span>
    <button
      class="lang-btn"
      :class="{ active: currentLang === 'zh' }"
      @click="switchLang('zh')"
      :aria-label="'切换到中文'"
    >
      中
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLanguage } from '@/i18n'

const { locale } = useI18n()

const currentLang = computed(() => locale.value)

const switchLang = (lang) => {
  setLanguage(lang)
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 12px;
}

.lang-btn {
  font-family: var(--font-ui);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: transparent;
  color: var(--color-text-dim);
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.02em;
}

.lang-btn:hover {
  color: var(--color-gold);
}

.lang-btn.active {
  color: var(--color-gold);
  border-color: var(--color-border-gold);
  background: rgba(201, 169, 97, 0.08);
}

.lang-sep {
  font-size: 0.75rem;
  color: var(--color-text-dim);
}

@media (max-width: 768px) {
  .lang-switcher {
    margin: 16px 0 0;
    justify-content: center;
  }
}
</style>
