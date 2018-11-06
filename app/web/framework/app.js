import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueI18n from 'vue-i18n';

export default class App {
  constructor(config) {
    this.config = config;
    Vue.use(VueI18n);
  }

  bootstrap() {
    const options = this.create(window.__INITIAL_STATE__);
    const app = new Vue(options);
    app.$mount('#app');
  }

  fetch(store, router) {
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents) {
      return Promise.reject('No Match Component');
    }
    return Promise.all(
      matchedComponents.map(component => {
        if (component.methods && component.methods.fetchApi) {
          return component.methods.fetchApi.call(component, { $store: store, $router: router });
        }
        return null;
      })
    );
  }

  create(initState) {
    const { index, options, createI18n, createStore, createRouter } = this.config;
    const store = createStore(initState);
    const router = createRouter();
    router.afterEach(() => {
      this.fetch(store, router);
    });
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