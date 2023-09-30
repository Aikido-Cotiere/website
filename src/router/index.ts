import { createRouter, createWebHistory } from 'vue-router'
const CMSView = () => import('../views/CMSView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },

    {
      path: "/:catchAll(.*)",
      component: CMSView,
      props: route => ({ story: route.path })
    },

  ]
})

export default router
