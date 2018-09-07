import Vue from 'vue';

import VueRouter from 'vue-router';
import Dashboard from '../view/dashboard/index.vue';
import ArticleList from '../view/list.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/admin/',
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/article/list',
      component: ArticleList
    },
    {
      path: '/article/add',
      component: () => import('../view/write/index.vue')
    },
    {
      path: '/article/detail/:id',
      component: () => import('../view/detail.vue')
    },
    {
      path: '*', component: () => import('../view/notfound.vue')
    }
  ]
});
