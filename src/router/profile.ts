import auth from '@/router/_middleware/auth'

export default [
  {
    component: () => import('@/views/Profile.vue'),
    meta: { middleware: [auth] },
    path: '/profile',
  },
]
