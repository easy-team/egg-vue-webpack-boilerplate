import Vue from 'vue';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import 'element-ui/lib/theme-chalk/index.css';
import App from 'framework/app';
import createI18n from 'framework/i18n/admin';
import createStore from './store/app';
import createRouter from './router';
import index from './index.vue';

new App({ index, createI18n, createRouter, createStore }).bootstrap();


