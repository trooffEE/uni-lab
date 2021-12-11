import guest from '@/router/_middleware/guest'

export default [
  {
    name: 'auth',
    path: '/auth',
    redirect: '/auth/login',
  },
  {
    component: () => import('@/views/auth/Login.vue'),
    meta: { middleware: [guest] },
    name: 'auth.login',
    path: '/auth/login',
  },
  {
    component: () => import('@/views/auth/Registration.vue'),
    meta: { middleware: [guest] },
    name: 'auth.register',
    path: '/auth/register',
  },
]
