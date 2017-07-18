import Vue from 'vue';
import './filter';
import './directive';
import './component';

const App = {};

App.data = () => {
  return window.__INITIAL_STATE__ || {};
};

App.init = options => {
  if (typeof window === 'object') {
    return App.client(options);
  }
  return App.server(options);
};


App.client = options => {
  Vue.prototype.$http = require('axios');
  options.el = '#app';
  if (options.store) {
    options.store.replaceState(App.data());
  } else if (window.__INITIAL_STATE__) {
    options.data = App.data();
  }
  return new Vue(options);
};

App.server = options => {
  if (options.store && options.router) {
    return context => {
      options.router.push(context.state.url);
      const matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({ code: '404' });
      }
      return Promise.all(
        matchedComponents.map(component => {
          if (component.preFetch) {
            return component.preFetch(options.store);
          }
          return null;
        })
      ).then(() => {
        context.state = options.store.state;
        return new Vue(options);
      });
    };
  }
  return context => {
    const VueApp = Vue.extend(options);
    const app = new VueApp({ data: context.state });
    return new Promise(resolve => {
      resolve(app);
    });
  };
};

App.use = component => {
  Vue.use(component);
};

App.component = (name, component) => {
  Vue.component(name, component);
};


export default App;
