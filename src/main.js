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

// service.setStoreRef(store)
// service.setRouterRef(router)

createApp(App)
    .use(store)
    .use(service)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
