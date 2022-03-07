import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/book'
    },
    {
        path: '/book',
        name: 'book',
        component: () => import('@/views/book/index'),
        children: [
            {
                path: '/book/epub/:bookName',
                name: 'bookReader',
                component: () => import('@/components/book/bookReader'),
            }
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router



