'use strict';
import App from 'framework/app.js';
import index from './index.vue';
import createStore from './store';
import createRouter from './router';

const options = { base: '/' };

export default new App({
  index,
  options,
  createStore,
  createRouter,
}).bootstrap();
