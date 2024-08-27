import { createRouter,createWebHistory } from 'vue-router'

let routes = [
    {
      path: '/',
      name: 'home', 
      component: () => import( '../views/index.vue'),
      children:[
        {
          path: '/',
          name: 'map', 
          component: () => import( '../views/map/index.vue'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/data',
          name: 'data', 
          component: () => import( '../views/data/index.vue'),
          meta: {
            requireAuth: true
          },
        },
      ]
    },
    {
      path: '/error',
      name: 'error', 
      component: () => import( '../views/error/Error.vue'),
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
