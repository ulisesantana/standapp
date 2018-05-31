import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', name: 'tasks', component: 'Tasks' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../pages/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
