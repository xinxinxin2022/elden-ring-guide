<template>
  <div class="contact-page">
    <div class="container container--narrow">
      <header class="page-header text-center">
        <h1>{{ t('contact.title') }}</h1>
        <p class="page-lead">{{ t('contact.lead') }}</p>
      </header>

      <div class="contact-layout">
        <section class="contact-form-section">
          <h2>{{ t('contact.formTitle') }}</h2>
          <p>
            {{ t('contact.formDesc') }}
          </p>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">{{ t('contact.name') }}</label>
              <input type="text" id="name" v-model="form.name" required :placeholder="t('contact.namePlaceholder')" />
            </div>
            <div class="form-group">
              <label for="email">{{ t('contact.email') }}</label>
              <input type="email" id="email" v-model="form.email" required :placeholder="t('contact.emailPlaceholder')" />
            </div>
            <div class="form-group">
              <label for="subject">{{ t('contact.subject') }}</label>
              <select id="subject" v-model="form.subject" required>
                <option value="" disabled>{{ t('contact.subjectSelect') }}</option>
                <option value="general">{{ t('contact.subjectGeneral') }}</option>
                <option value="feedback">{{ t('contact.subjectFeedback') }}</option>
                <option value="error">{{ t('contact.subjectError') }}</option>
                <option value="collaboration">{{ t('contact.subjectCollaboration') }}</option>
                <option value="other">{{ t('contact.subjectOther') }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">{{ t('contact.message') }}</label>
              <textarea id="message" v-model="form.message" required rows="6" :placeholder="t('contact.messagePlaceholder')"></textarea>
            </div>
            <button type="submit" class="btn btn--primary" :disabled="submitted">
              {{ submitted ? t('contact.sent') : t('contact.send') }}
            </button>
            <p v-if="submitted" class="success-message">
              {{ t('contact.success') }}
            </p>
          </form>
        </section>

        <aside class="contact-info">
          <h2>{{ t('contact.infoTitle') }}</h2>

          <div class="info-card">
            <h3>{{ t('contact.emailLabel') }}</h3>
            <p>{{ t('contact.emailDesc') }}</p>
            <a href="mailto:contact@eldenringguide.com" class="contact-link">contact@eldenringguide.com</a>
          </div>

          <div class="info-card">
            <h3>{{ t('contact.responseTitle') }}</h3>
            <p>{{ t('contact.responseDesc') }}</p>
          </div>

          <div class="info-card">
            <h3>{{ t('contact.communityTitle') }}</h3>
            <p>{{ t('contact.communityDesc') }}</p>
            <ul>
              <li>Reddit: r/EldenRing</li>
              <li>Discord: Community servers</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // In production, this would send to a backend service
  // For now, we'll just show a success message
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}
</script>

<style scoped>
.contact-page {
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

.contact-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  align-items: start;
}

.contact-form-section h2,
.contact-info h2 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.contact-form-section p {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-family: var(--font-ui);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: var(--font-ui);
  font-size: 1rem;
  padding: 12px 16px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-gold);
  box-shadow: 0 0 0 2px rgba(201, 169, 97, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.success-message {
  color: var(--color-gold);
  font-family: var(--font-ui);
  font-size: 0.95rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 24px;
}

.info-card h3 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-gold-bright);
  margin-bottom: 8px;
}

.info-card p {
  font-family: var(--font-ui);
  font-size: 0.92rem;
  color: var(--color-text-muted);
  margin-bottom: 8px;
}

.contact-link {
  color: var(--color-gold);
  font-family: var(--font-ui);
  font-size: 0.95rem;
  font-weight: 500;
}

.info-card ul {
  list-style: none;
  padding: 0;
}

.info-card li {
  font-family: var(--font-ui);
  font-size: 0.92rem;
  color: var(--color-text-muted);
  margin-bottom: 4px;
  padding-left: 16px;
  position: relative;
}

.info-card li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-gold-dim);
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
</style>
