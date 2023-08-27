import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

import authRoutes from '@/router/auth.routes'
import productRoutes from '@/router/product.routes'

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  // base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', redirect: { name: 'sign-in' } },
    ...authRoutes,
    ...productRoutes,
    {
      path: '/:catchAll(.*)',
      redirect: 'error-404',
    },
  ],
})

const sendBackToLogin = next => next({ name: 'sign-in' })
const sendBackToDashboard = next => next({ name: 'home' })

const checkAuth = async (to, from, next) => {
  const loggedIn = await store.dispatch('auth/verifyAuth')
  // Ensure we checked auth before each page load.
  if (!to.meta.allowAll) {
    if ('guarded' in to.meta) {
      if (to.meta.guarded) {
        if (!loggedIn) {
          return sendBackToLogin(next)
        }
      } else if (loggedIn) {
        return sendBackToDashboard(next)
      }
    } else if (!loggedIn) {
      return sendBackToLogin(next)
    }
  }
  return next()
}

router.beforeEach(checkAuth)

export default router
