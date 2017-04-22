import Vue from 'vue';
import './filter';
import './directive';
import './component';

const App = {};

App.data = () => {
  return window.__INITIAL_STATE__ ? window.__INITIAL_STATE__.data || {} : {};
};

App.init = options => {
  if (typeof window === 'object') {
    Vue.prototype.$http = require('axios');
    return App.client(options);
  }
  return App.server(options);
};


App.client = options => {
  options.el = '#app';
  if (options.store) {
    options.store.replaceState(App.data());
  } else {
    options.data = App.data();
  }
  return new Vue(options);
};

App.server = options => {
  if (options.store && options.router) {
    return data => {
      options.router.push(data.url);
      const matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({ code: '404' });
      }
      return Promise.all(
        matchedComponents.map(component => {
          if (component.preFetch) {
            return component.preFetch(options.store);
          }
        })
      ).then(() => {
        Object.assign(data, options.store.state);
        return new Vue(options);
      });
    };
  }
  return data => {
    const VueApp = Vue.extend(options);
    const app = new VueApp({ data });
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
