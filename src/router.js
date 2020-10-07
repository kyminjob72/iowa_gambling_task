import { createRouter, createWebHistory } from 'vue-router'
import index from './layout/index.vue'
import setting from './layout/setting.vue'
import test from './layout/test.vue'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: index
      },
      {
        path: '/test',
        component: test
      },
      {
        path: '/setting',
        component: setting
      },
    ]
  })
  
  export default router