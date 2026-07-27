import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './styles/global.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(i18n)

router.isReady().then(() => {
  app.mount('#app')
})
