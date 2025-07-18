import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { MotionPlugin } from '@vueuse/motion'
import 'animate.css';
import 'flowbite'
import "preline/preline"

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(MotionPlugin)

app.mount('#app')
