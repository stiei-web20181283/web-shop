import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: 'home', icon: '', noCache: true }
      }
    ]
  }
]
export default new Router({
  routes: constantRouterMap
})
