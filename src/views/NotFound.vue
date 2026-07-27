<template>
  <div class="not-found-page">
    <div class="container text-center">
      <div class="error-content">
        <h1 class="error-code">{{ t('notFound.code') }}</h1>
        <h2 class="error-title">{{ t('notFound.title') }}</h2>
        <p class="error-text">
          {{ t('notFound.text') }}
        </p>
        <div class="error-actions">
          <router-link to="/" class="btn btn--primary">{{ t('notFound.home') }}</router-link>
          <router-link to="/guides" class="btn">{{ t('notFound.guides') }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 60px 24px;
}

.error-content {
  max-width: 600px;
}

.error-code {
  font-family: var(--font-heading);
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 900;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 16px;
  text-shadow: 0 0 40px rgba(201, 169, 97, 0.3);
}

.error-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: var(--color-gold-bright);
  margin-bottom: 16px;
}

.error-text {
  font-family: var(--font-body);
  font-size: 1.15rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 36px;
}

.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
