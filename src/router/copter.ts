import auth from './_middleware/auth'

export default [
  {
    component: () => import('@/views/drone/Drone.vue'),
    meta: { middleware: [auth] },
    name: 'main',
    path: '/drone',
  },
  {
    component: () => import('@/views/aboutUs/AboutUs.vue'),
    meta: { middleware: [auth] },
    name: 'aboutUs',
    path: '/about-us',
  },
  {
    component: () => import('@/views/drone/DroneItem.vue'),
    meta: { middleware: [auth] },
    name: 'drone.item',
    path: '/drone/:id',
  },
  {
    component: () => import('@/views/admin/AdminPanel.vue'),
    meta: { middleware: [auth] },
    name: 'admin',
    path: '/admin-panel',
  },
]
