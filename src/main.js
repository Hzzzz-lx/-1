import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/tailwind.css'
import { Icon } from '@iconify/vue'
const app = createApp(App)
app.use(createPinia())
app.use(Antd)
app.use(router)
app.use(Icon)
app.mount('#app')
