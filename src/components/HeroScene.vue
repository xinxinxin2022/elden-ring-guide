<template>
  <div class="hero-scene" ref="containerRef">
    <canvas ref="canvasRef"></canvas>
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="hero-title-line">{{ t('hero.subtitle') }}</span>
        <span class="hero-title-accent">{{ t('hero.accent') }}</span>
      </h1>
      <p class="hero-subtitle">{{ t('hero.description') }}</p>
      <div class="hero-actions">
        <router-link to="/guides" class="btn btn--primary">{{ t('hero.browseGuides') }}</router-link>
        <router-link to="/guides/beginner-guide" class="btn">{{ t('hero.startHere') }}</router-link>
      </div>
    </div>
    <div class="hero-particles" ref="particlesRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const canvasRef = ref(null)
const containerRef = ref(null)
const particlesRef = ref(null)
let animationId = null
let particles = []

onMounted(() => {
  initParticles()
  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
})

const initParticles = () => {
  const container = particlesRef.value
  if (!container) return

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 8 + 's'
    particle.style.animationDuration = (6 + Math.random() * 8) + 's'
    particle.style.opacity = 0.2 + Math.random() * 0.5
    particle.style.width = (2 + Math.random() * 4) + 'px'
    particle.style.height = particle.style.width
    container.appendChild(particle)
  }
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
}
</script>

<style scoped>
.hero-scene {
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 120%, rgba(201, 169, 97, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 50% -20%, rgba(75, 50, 25, 0.06) 0%, transparent 50%),
    linear-gradient(180deg, var(--color-bg-deepest) 0%, #0d0d14 100%);
}

.hero-scene canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 24px;
  max-width: 800px;
}

.hero-title {
  margin-bottom: 20px;
}

.hero-title-line {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 400;
  color: var(--color-text-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.hero-title-accent {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  color: var(--color-gold-bright);
  text-shadow:
    0 0 40px rgba(201, 169, 97, 0.3),
    0 0 80px rgba(201, 169, 97, 0.1);
  letter-spacing: 0.04em;
  line-height: 1.1;
}

.hero-subtitle {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Floating particles — simulating Grace/golden motes */
.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
}

.particle {
  position: absolute;
  bottom: -10px;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 6px rgba(201, 169, 97, 0.6);
  animation: float-up linear infinite;
}

@keyframes float-up {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100vh) translateX(30px);
    opacity: 0;
  }
}

/* Decorative runes border */
.hero-scene::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border: 1px solid rgba(201, 169, 97, 0.08);
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
}

.hero-scene::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border: 1px solid rgba(201, 169, 97, 0.05);
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .hero-scene {
    min-height: 70vh;
  }
}
</style>
