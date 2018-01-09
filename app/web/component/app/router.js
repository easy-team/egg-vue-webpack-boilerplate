import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: () => import('./detail')
    }
  ]
});

export default router;
