import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { service } from './services'
import 'bootstrap'

// Fontawesome Icons
import './utils/font-awesome-icons.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// SCSS
import './assets/global.scss'

// Google Analytics
import { configure } from "vue-gtag";

configure({
  tagId: process.env.VUE_APP_GOOGLE_ANALYTICS
})
console.log('GA', process.env.VUE_APP_GOOGLE_ANALYTICS)
// service.setStoreRef(store)
// service.setRouterRef(router)

createApp(App)
    .use(store)
    .use(service)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
