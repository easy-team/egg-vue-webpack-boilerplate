import Vue from 'vue';
import plugin from '../plugin';
import '../filter';
import '../directive';
import '../component';
import axios from 'axios';
Vue.prototype.$http = axios;
Vue.use(plugin);
export default function(options) {
  const state = window.__INITIAL_STATE__ || {};
  if (options.store) {
    options.store.replaceState(state);
  } else {
    options.data = state;
  }
  const hookRender = options.hookRender || Vue.hookRender;
  if (hookRender) {
    const context = { state };
    hookRender(context, options);
  }
  const app = new Vue(options);
  app.$mount('#app');
}
