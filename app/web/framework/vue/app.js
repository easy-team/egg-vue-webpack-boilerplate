import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import createStore from 'store/app';
import router from 'component/app/router';
import './filter';
import './directive';
import './component';

export default class App {
  constructor(options) {
    this.options = options;
    this.router = router;
    this.store = createStore(this.state);
    this.app = {
      ...options,
      router: this.router,
      store: this.store
    };
    sync(this.store, this.router);
  }

  get state() {
    return EASY_ENV_IS_NODE ? {} : window.__INITIAL_STATE__;
  }

  bootstrap() {
    if (EASY_ENV_IS_NODE) {
      return this.server({});
    }
    return this.client();
  }

  client() {
    Vue.prototype.$http = require('axios');
    const app = new Vue(this.app);
    app.$mount('#app');
    return app;
  }

  server() {
    return context => {
      this.router.push(context.state.url);
      const matchedComponents = this.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({
          code: '404'
        });
      }
      return Promise.all(
        matchedComponents.map(component => {
          if (component.preFetch) {
            return component.preFetch(this.store);
          }
          return null;
        })
      ).then(() => {
        context.state = {
          ...this.store.state,
          ...context.state
        };
        return new Vue(this.app);
      });
    };
  }
}