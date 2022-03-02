import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const home = () => import('@/views/home/index')
const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    }
]
const router = new VueRouter({
    routes
})

export default router



