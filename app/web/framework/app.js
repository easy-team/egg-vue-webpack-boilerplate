import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueI18n from 'vue-i18n';

export default class App {
  constructor(config) {
    this.config = config;
    Vue.use(VueI18n);
    Vue.prototype.$http = require('axios');
  }

  bootstrap() {
    const options = this.create(window.__INITIAL_STATE__);
    const app = new Vue(options);
    app.$mount('#app');
  }

  create(initState) {
    const { index, options, createI18n, createStore, createRouter } = this.config;
    const store = createStore(initState);
    const router = createRouter();
    const i18n = createI18n(store.state.locale);
    sync(store, router);
    return {
      ...index,
      ...options,
      i18n,
      router,
      store
    };
  }
}