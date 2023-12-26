
import { RouteRecordRaw, Router, createRouter, createWebHashHistory } from "vue-router";


const routes:RouteRecordRaw[]  = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {title: '首页'}
      },
    //   {
    //     path: '/all',
    //     name: 'allArticle',
    //     component: () => import('../views/AllArticle'),
    //     meta: {title: '全部文章', params: 'allArticle'}
    
    //   },
    //   {
    //     path: '/category/:cate',
    //     name: 'category',
    //     component: () => import('../views/Home.vue'),
    //     meta: {title: '分类', params: 'cate'}
    //   },
    //   {
    //     path: '/search/:words',
    //     name: 'search',
    //     component: () => import('../views/Home.vue'),
    //     meta: {title: '搜索', params: 'words'}
    //   },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {title: '关于'}
      },
    //   {
    //     path: '/archive',
    //     name: 'archive',
    //     component: () => import('../views/Archive.vue'),
    //     meta: {title: '归档'}
    //   },
    //   {
    //     path: '/friend',
    //     name: 'friend',
    //     component: () => import('../views/Friend.vue'),
    //     meta: {title: '友链'}
    //   },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import('../components/Articles.vue'),
        meta: {title: '文章'}
      },
      {
        path: "/:catchAll(.*)",
        name: '404',
        meta: {
          title: '404',
        },
        component: () => import('../views/404.vue')
      }
]

const router:Router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router