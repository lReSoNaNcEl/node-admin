import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/pages/index.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/pages/news/index.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
