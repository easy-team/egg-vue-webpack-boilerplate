import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';

const App = {};

App.data = () => {
  return window.__INITIAL_STATE__ || {};
};

App.init = options => {
  return App.client(options);
};


App.render = options => {
  Vue.prototype.$http = require('axios');
  if (options.store) {
    options.store.replaceState(App.data());
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
};


App.use = component => {
  Vue.use(component);
};

App.component = (name, component) => {
  Vue.component(name, component);
};


export default App;
