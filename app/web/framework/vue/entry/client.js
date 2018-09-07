import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';
import axios from 'axios';
Vue.prototype.$http = axios;

export default function(options) {
  const state = window.__INITIAL_STATE__ || {};
  if (options.store) {
    options.store.replaceState(state);
  } else {
    options.data = state;
  }
  const app = new Vue(options);
  app.$mount('#app');
}
