import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GStore from './store/GStore.js'
import 'nprogress/nprogress.css'

createApp(App).use(store).provide('GStore', GStore).use(router).mount('#app')
