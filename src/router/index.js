import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Master.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:{path:'/home'},
    children: [
      {
        path: 'home',
        name: 'Home-page',
        component: () => import('../views/frontend/home/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/product_details/:product_id',
        name: 'Product-Details',
        component: () => import('../views/frontend/home/Product_details.vue')
      },
    ]
  },
  {
    path:'/admin',
    name:'admin-login',
    component:()=>import('../views/auth/Master.vue'),
    redirect:{path:'/admin/login'},
    children:[
     {
        path:'/login',
        name:'Login',
        component:()=>import('../views/auth/Login.vue'),
      },
      {
        path:'/register',
        name:'Registration',
        component:()=>import('../views/auth/Registration.vue'),
      },
     
    ]
  },
  {
    path:'/logout',
    name:'Logout',
    component:()=>import('../views/auth/Logout.vue'),
  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component:()=>import('../views/admin/Master.vue'),
    redirect:{path:'/dashboard/home'},
    children:[
     {
        path:'home',
        name:'DHome',
        component:()=>import('../views/admin/dashboard/Dsahboard.vue'),
      },
      {
        path:'add-category',
        name:'add-category',
        component:()=>import('../views/admin/category/Category-add.vue'),
      },
      {
        path:'all-category',
        name:'all-category',
        component:()=>import('../views/admin/category/Category-list.vue'),
      },
      {
        path:'edit-category/:category_id',
        name:'edit-category',
        component:()=>import('../views/admin/category/Category-edit.vue'),
      },
      {
        path:'all-products',
        name:'all-products',
        component:()=>import('../views/admin/product/Product-list.vue'),
      },
    ]
  },
  {
    path:'*',
    name:'Dashboard1',
    component:()=>import('../views/admin/dashboard/Dsahboard.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
