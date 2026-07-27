import { createI18n } from 'vue-i18n'
import en from '@/locales/en.js'
import zh from '@/locales/zh.js'

const savedLang = typeof localStorage !== 'undefined'
  ? localStorage.getItem('elden-ring-lang')
  : null

const i18n = createI18n({
  legacy: false,
  locale: savedLang || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

export default i18n

export function setLanguage(lang) {
  i18n.global.locale.value = lang
  localStorage.setItem('elden-ring-lang', lang)
  document.documentElement.lang = lang
}

export function getLanguage() {
  return i18n.global.locale.value
}
