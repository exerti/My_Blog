import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'
import router from './router'
import Elements from './utils/Elements'
createApp(App).use(router).use(Elements).mount('#app')
