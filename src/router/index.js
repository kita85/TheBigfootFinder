import { createWebHashHistory, createRouter } from 'vue-router'

import BffHomeView from '../views/BffHomeView.vue'
import BffMapView from '../views/BffMapView.vue'
import BffEventsView from '../views/BffEventsView.vue'
import BffShopView from '../views/BffShopView.vue'
import BffNewsView from '../views/BffNewsView.vue'
import BffDataView from '../views/BffDataView.vue'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: BffMapView
    // meta: {
    //   layout: 'default'
    // }
  },
  { 
    path: '/temp',
    name: 'temp',
    component: BffHomeView
  },
  { 
    path: '/events',
    name: 'events',
    component: BffEventsView
  },
  { 
    path: '/shop',
    name: 'shop',
    component: BffShopView
  },
  { 
    path: '/news',
    name: 'news',
    component: BffNewsView
  },
  { 
    path: '/data',
    name: 'data',
    component: BffDataView
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
  history: createWebHashHistory(),
  routes,
})

export default router