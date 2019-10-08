'use strict';
import App from '../../framework/app';
import createStore from './store/index';
import createRouter from './router/index';
import createI18n from './i18n/index';
import entry from './index.vue';
export default new App({ entry, createStore, createRouter, createI18n }).render();