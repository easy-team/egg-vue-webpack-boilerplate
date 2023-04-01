import Vue from 'vue';
import { sync } from 'vuex-router-sync';

export default class App {
  constructor(config) {
    this.config = config;
  }

  bootstrap() {
    
    EASY_ENV_IS_NODE && console.log(EASY_ENV_IS_NODE, new Date())
    !EASY_ENV_IS_NODE && console.log(EASY_ENV_IS_NODE, new Date())
    // node 代表服务器环境
    if (EASY_ENV_IS_NODE) {
      return this.server();
    }
    // 非node 代表客户端环境（浏览器）
    // 一套代码，服务端和客户端都会用到，服务端走服务端渲染，客户端走客户端渲染挂载
    // 服务端和客户端都要创建各自的vue实例
    return this.client();
  }

  create(initState) {
    const { index, options, createStore, createRouter } = this.config;
    // 客户端创建的实例state是根据服务端的所维护的state来创建的
    const store = createStore(initState, options);
    const router = createRouter(initState, options);
    sync(store, router);
    return {
      ...index,
      ...options,
      router,
      store
    };
  }

  client() {
    Vue.prototype.$http = require('axios');
    const options = this.create(window.__INITIAL_STATE__);
    const { router, store } = options;
    router.beforeEach((route, redirec, next) => {
      next();
    });
    router.afterEach((route, redirec) => {
      console.log('>>afterEach', route);
      if (route.matched && route.matched.length) {
        const asyncData = route.matched[0].components.default.asyncData;
        if (asyncData) {
          asyncData(store, route);
        }
      }
    });
    const app = new Vue(options);
    const root = document.getElementById('app');
    const hydrate = root.childNodes.length > 0;
    app.$mount('#app', hydrate);
    return app;
  }

  server() {
    return context => {
      const options = this.create(context.state);
      const { store, router } = options;
      router.push(context.state.url);
      return new Promise((resolve, reject) => {
        router.onReady(() => {
          const matchedComponents = router.getMatchedComponents();
          if (!matchedComponents) {
            return reject({ code: '404' });
          }
          return Promise.all(
            matchedComponents.map(component => {
              if (component.asyncData) {
                return component.asyncData(store, store.state.route);
              }
              return null;
            })
          ).then(() => {
            context.state = {
              ...store.state,
              ...context.state,
              test: 'wtf'
            };
            return resolve(new Vue(options));
          });
        });
      });
    };
  }
}