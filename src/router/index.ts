import Vue from 'vue'
import Router from 'vue-router'

import middlewarePipeline from '@/router/_middleware/pipeline'

import authRoutes from './auth'
import copterRoutes from './copter'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    ...authRoutes,
    ...copterRoutes,
    {
      name: 'app',
      path: '/',
      redirect: '/drone',
    },
    {
      component: () => import('@/views/NotFound.vue'),
      name: 'not_found',
      path: '*',
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware
  const context = { from, next, to }

  return middleware[0]({
    ...context,
    nextMiddleware: middlewarePipeline(context, middleware, 1),
  })
})
export default router
