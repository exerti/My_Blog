
import { RouteRecordRaw, Router, createRouter, createWebHashHistory } from "vue-router";


const routes:RouteRecordRaw[]  = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../view/Home.vue')
    }
]

const router:Router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router