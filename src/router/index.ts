import { createRouter, createWebHistory } from 'vue-router'


const Index = () => import('../views/Home/index.vue')
const Login = () => import('../views/Login/index.vue')
const Layout =() => import('../LayOut/Layout.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path : '/users',
      name:'home',
      component:Index
    }
  ]
})

export default router
