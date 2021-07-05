import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collection from '../views/Collection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collection',
    name: 'Collection',
    component: Collection
  }
]

const router = new VueRouter({
  routes
})

export default router
