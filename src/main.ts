import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
