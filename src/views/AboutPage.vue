<template>
  <div class="about-page">
    <div class="container container--narrow">
      <header class="page-header text-center">
        <h1>{{ t('about.title') }}</h1>
        <p class="page-lead">{{ t('about.lead') }}</p>
      </header>

      <section class="about-section">
        <h2>{{ t('about.whoTitle') }}</h2>
        <p>
          {{ t('about.whoP1') }}
        </p>
        <p>
          {{ t('about.whoP2') }}
        </p>
      </section>

      <section class="about-section">
        <h2>{{ t('about.missionTitle') }}</h2>
        <p>
          {{ t('about.missionP1') }}
        </p>
        <p>
          {{ t('about.missionP2') }}
        </p>
        <ul>
          <li><strong>{{ t('about.accurate') }}</strong> {{ t('about.accurateDesc') }}</li>
          <li><strong>{{ t('about.comprehensive') }}</strong> {{ t('about.comprehensiveDesc') }}</li>
          <li><strong>{{ t('about.upToDate') }}</strong> {{ t('about.upToDateDesc') }}</li>
          <li><strong>{{ t('about.accessible') }}</strong> {{ t('about.accessibleDesc') }}</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>{{ t('about.teamTitle') }}</h2>
        <p>
          {{ t('about.teamP1') }}
        </p>
        <p>
          {{ t('about.teamP2') }}
        </p>
      </section>

      <section class="about-section">
        <h2>{{ t('about.contactTitle') }}</h2>
        <p>
          {{ t('about.contactP') }} <router-link to="/contact">{{ t('about.contactLink') }}</router-link> {{ t('about.contactEnd') }}
        </p>
      </section>

      <section class="about-section">
        <h2>{{ t('about.disclaimerTitle') }}</h2>
        <p>
          {{ t('about.disclaimerP1') }}
        </p>
        <p>
          {{ t('about.disclaimerP2') }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.about-page {
  padding: 60px 24px 80px;
}

.page-header {
  margin-bottom: 48px;
}

.page-header h1 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-gold-bright);
  margin-bottom: 12px;
}

.page-lead {
  font-family: var(--font-ui);
  font-size: 1.15rem;
  color: var(--color-text-muted);
}

.about-section {
  margin-bottom: 40px;
}

.about-section h2 {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--color-gold);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.about-section p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 16px;
}

.about-section ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.about-section li {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 8px;
  color: var(--color-text);
}
</style>
