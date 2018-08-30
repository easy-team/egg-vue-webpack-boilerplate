import Vue from 'vue';
import VueI18n from 'vue-i18n';
import '../filter';
import '../directive';
import '../component';
import createI18n from 'framework/i18n';
export default function(options) {
  Vue.use(VueI18n);
  Vue.prototype.$http = require('axios');
  if (options.store) {
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const i18n = createI18n(window.__INITIAL_STATE__.locale);
  options.i18n = i18n;
  const app = new Vue(options);
  app.$mount('#app');
}
