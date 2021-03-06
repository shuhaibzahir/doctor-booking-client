import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupUser.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Loginpage.vue')
  },
 
  {
    path: '/hospital/:id',
    name: 'hospital',
    component: () => import('../views/Hospital.vue')
  },
  {
    path: '/doctor/:id',
    name: 'doctor',
    component: () => import('../views/Doctorview.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 , behavior:'smooth'}
  },
})

export default router
