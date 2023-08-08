import { createRouter, createWebHistory } from 'vue-router'


const Login = () => import('../views/Login/index.vue')

const Layout =() => import('../LayOut/Layout.vue')

const Merchant = () => import ('../views/Merchant/index.vue')
const Region = () => import ('../views/Region/index.vue')
const FactoryWarehouse = () => import ('../views/FactoryWarehouse/index.vue')

const Staff = () => import('../views/Staff/index.vue')
const Store = () => import('../views/Store/index.vue')
const Supplier = () => import('../views/Supplier/index.vue')

const StoreTerminal = () => import('../views/StoreTerminal/index.vue')
const Customer = () => import('../views/Customer/index.vue')
const Customers = () => import('../views/Customers/index.vue')



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/index',
      name: '首页',
      component: Layout,
      children :[
        {
          path:'/index/merchant',
          name:'商户管理',
          component: Merchant
        },
        {
          path:'/index/region',
          name:'区域管理',
          component: Region
        },
        {
          path:'/index/factoryWarehouse',
          name:'厂库管理',
          component: FactoryWarehouse
        },
        {
          path:'/index/store',
          name:'门店管理',
          component: Store
        },
        {
          path : '/index/staff',
          name:'员工管理',
          component:Staff
        },
        {
          path : '/index/supplier',
          name:'供应商管理',
          component:Supplier
        },
        {
          path:'/index/storeTerminal',
          name:'门店终端管理',
          component: StoreTerminal
        },
        {
          path:'/index/customer',
          name:'客户管理',
          component: Customer
        },
        {
          path:'/index/customers',
          name:'客户分类',
          component: Customers
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
