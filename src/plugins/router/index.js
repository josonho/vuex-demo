import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [{
  name: 'home',
  path: '/',
  component: () => import('../../pages/home.vue'),
}]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;