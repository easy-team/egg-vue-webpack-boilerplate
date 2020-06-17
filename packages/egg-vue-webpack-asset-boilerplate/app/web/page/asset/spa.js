'use strict';
import App from 'framework/app.js';
import index from 'component/spa/index.vue';
import createStore from 'component/spa/store';
import createRouter from 'component/spa/router';

const options = { base: '/asset' };

export default new App({
  index,
  options,
  createStore,
  createRouter,
}).bootstrap();
