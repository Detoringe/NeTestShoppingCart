// adjusted router directory name and file name (better for future sub router handling)
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const mainRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // page from creating a new project
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // add page for shopping cart test project
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      // route level code-splitting
      // this generates a separate chunk (ShoppingCart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShoppingCartView.vue'),
    },
  ],
})

export { mainRouter }
