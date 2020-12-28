import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import('../views/order/todoList.vue')
  },
  {
    path: '/newlist',
    name: 'newlist',
    component: () => import('../views/order/newlist.vue')
  },
  {
    path: '/allSta',
    name: 'allSta',
    component: () => import('../views/sta/allSta.vue')
  },
  {
    path: '/areaSta',
    name: 'areaSta',
    component: () => import('../views/sta/areaSta.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/system/company.vue')
  },
  {
    path: '/companyOperate',
    name: 'companyOperate',
    component: () => import('../views/system/companyOperate.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/order/details.vue')
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('../views/information.vue')
  },
  {
    path: '/inSta',
    name: 'inSta',
    component: () => import('../views/sta/inSta.vue')
  },
  {
    path: '/listSta',
    name: 'listSta',
    component: () => import('../views/sta/listSta.vue')
  },
  {
    path: '/outSta',
    name: 'outSta',
    component: () => import('../views/sta/outSta.vue')
  },
  {
    path: '/personalSettings',
    name: 'personalSettings',
    component: () => import('../views/personalSettings.vue')
  },
  {
    path: '/role',
    name: 'role',
    component: () => import('../views/system/role.vue')
  },
  {
    path: '/supportCompanySta',
    name: 'supportCompanySta',
    component: () => import('../views/sta/supportCompanySta.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/system/user.vue')
  },
  {
    path: '/userOperate',
    name: 'userOperate',
    component: () => import('../views/system/userOperate.vue')
  },
  {
    path: '/allList',
    name: 'allList',
    component: () => import('../views/order/allList.vue')
  },
  {
    path: '/doneList',
    name: 'doneList',
    component: () => import('../views/order/doneList.vue')
  },
  {
    path: '/detailsDone',
    name: 'detailsDone',
    component: () => import('../views/order/detailsDone.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
