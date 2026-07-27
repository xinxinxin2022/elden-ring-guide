<template>
  <footer class="app-footer">
    <div class="footer-top container">
      <div class="footer-brand">
        <h3 class="footer-logo">⚔ Elden Ring <span>Guide</span></h3>
        <p class="footer-tagline">{{ t('footer.tagline') }}</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>{{ t('footer.navigate') }}</h4>
          <ul>
            <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
            <li><router-link to="/guides">{{ t('footer.allGuides') }}</router-link></li>
            <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
            <li><router-link to="/contact">{{ t('nav.contact') }}</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>{{ t('footer.popularGuides') }}</h4>
          <ul>
            <li><router-link to="/guides/beginner-guide">{{ t('footer.beginnerGuide') }}</router-link></li>
            <li><router-link to="/guides/best-starting-classes">{{ t('footer.bestClasses') }}</router-link></li>
            <li><router-link to="/guides/boss-order-guide">{{ t('footer.bossOrder') }}</router-link></li>
            <li><router-link to="/guides/best-builds-guide">{{ t('footer.bestBuilds') }}</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>{{ t('footer.legal') }}</h4>
          <ul>
            <li><router-link to="/privacy-policy">{{ t('footer.privacy') }}</router-link></li>
            <li><router-link to="/terms-of-service">{{ t('footer.terms') }}</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>&copy; {{ currentYear }} Elden Ring Guide. {{ t('footer.rights') }}</p>
      <p class="footer-disclaimer">{{ t('footer.disclaimer') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  background: var(--color-bg-dark);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  padding: 60px 24px 40px;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--color-gold-bright);
  margin-bottom: 12px;
}

.footer-logo span {
  font-weight: 400;
  color: var(--color-gold);
}

.footer-tagline {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  font-family: var(--font-ui);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.footer-col h4 {
  font-family: var(--font-ui);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  margin-bottom: 16px;
  font-weight: 600;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 8px;
}

.footer-col a {
  font-family: var(--font-ui);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.footer-col a:hover {
  color: var(--color-gold-bright);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 20px 24px;
  text-align: center;
}

.footer-bottom p {
  font-family: var(--font-ui);
  font-size: 0.8rem;
  color: var(--color-text-dim);
  margin-bottom: 4px;
}

.footer-disclaimer {
  font-size: 0.75rem !important;
  max-width: 600px;
  margin: 4px auto 0;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 40px 16px 24px;
  }

  .footer-brand {
    max-width: 100%;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
</style>
