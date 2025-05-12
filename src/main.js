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

// Meta tags
import { createHead } from '@unhead/vue/client'
const head = createHead({
    init: [
    {
        title: 'The Bigfoot Finder',
        titleTemplate: '%s | The Bigfoot Finder',
        meta: [
            { name: 'description', content: 'Uncover patterns in Bigfoot sightings and explore data-driven clues behind future encounters.' }
        ]
    },
    ]
})

// initialize the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup
if (window && window.__INITIAL_STATE__) {
    store.state.value = window.__INITIAL_STATE__;
}

configure({
  tagId: process.env.VUE_APP_GOOGLE_ANALYTICS
})

createApp(App)
    .use(store)
    .use(service)
    .use(router)
    .use(head)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
