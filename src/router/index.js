import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/pages/Products.vue'),
  },
  {
    path: '/total',
    name: 'Total',
    component: () => import('@/views/pages/Total.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes,
});

export default router;
