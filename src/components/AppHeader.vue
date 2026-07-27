<template>
  <header class="app-header" :class="{ 'is-scrolled': isScrolled, 'menu-open': menuOpen }">
    <div class="header-inner container">
      <router-link to="/" class="logo" aria-label="Elden Ring Guide Home">
        <span class="logo-icon">⚔</span>
        <span class="logo-text">Elden Ring <span class="logo-accent">Guide</span></span>
      </router-link>

      <nav class="main-nav" :class="{ 'is-open': menuOpen }">
        <router-link to="/" class="nav-link" exact-active-class="active">{{ t('nav.home') }}</router-link>
        <router-link to="/guides" class="nav-link" active-class="active">{{ t('nav.guides') }}</router-link>
        <router-link to="/about" class="nav-link" active-class="active">{{ t('nav.about') }}</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">{{ t('nav.contact') }}</router-link>
        <LanguageSwitcher />
      </nav>

      <button class="menu-toggle" @click="$emit('toggle-menu')" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
        <span class="hamburger" :class="{ 'is-open': menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

defineProps({
  menuOpen: Boolean
})

defineEmits(['toggle-menu'])

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 1000;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-normal);
}

.app-header.is-scrolled {
  background: rgba(10, 10, 15, 0.95);
  border-bottom-color: var(--color-border);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-gold-bright);
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.logo-icon {
  font-size: 1.6rem;
  filter: drop-shadow(0 0 8px rgba(201, 169, 97, 0.4));
}

.logo-accent {
  color: var(--color-gold);
  font-weight: 400;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  font-family: var(--font-ui);
  font-size: 0.88rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  padding: 8px 16px;
  border-radius: 4px;
  transition: all var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--color-gold-bright);
}

.nav-link.active {
  color: var(--color-gold);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--color-gold);
  border-radius: 1px;
}

/* Mobile menu toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-gold);
  position: relative;
  transition: all var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-gold);
  transition: all var(--transition-fast);
}

.hamburger::before { top: -7px; }
.hamburger::after { bottom: -7px; }

.hamburger.is-open {
  background: transparent;
}

.hamburger.is-open::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger.is-open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .main-nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: rgba(10, 10, 15, 0.98);
    padding: 40px 24px;
    gap: 4px;
    transform: translateX(100%);
    transition: transform var(--transition-normal);
  }

  .main-nav.is-open {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 16px;
    width: 100%;
    text-align: center;
  }
}
</style>
