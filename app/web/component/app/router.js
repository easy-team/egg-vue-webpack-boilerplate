import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';
import DetailView from './detail';

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
      component: DetailView
    }
  ]
});

export default router;
