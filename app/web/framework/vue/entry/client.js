import Vue from 'vue';
import plugin from '../plugin';
import '../filter';
import '../directive';
import '../component';
Vue.use(plugin);
export default function(options) {
  const state = window.__INITIAL_STATE__ || {};
  if (options.store) {
    options.store.replaceState(state);
  } else {
    options.data = { ...state, ...options.data };
  }
  const hookRender = options.hookRender || Vue.hookRender;
  if (hookRender) {
    const context = { state };
    hookRender(context, options);
  }
  const app = new Vue(options);
  app.$mount('#app');
}
