import { createMemoryHistory, createRouter } from 'vue-router'

import BigfootMap from '../components/BigfootMap.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: BigfootMap
    // meta: {
    //   layout: 'default'
    // }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView,
  //   children: [
  //     {
  //       path: '/123',
  //       name: 'aboutchild',
  //       component: AboutViewChild
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router