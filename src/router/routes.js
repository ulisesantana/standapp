
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/login',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/reports',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
    // meta: {
    //   requiresAuth: true
    // }
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
