'use strict';
import axios from 'axios';
import request from 'framework/network/request';
import VueI18n from 'vue-i18n';
import createI18n from 'framework/i18n/site';

export default {
  install(Vue) {
    if (!Vue.prototype.hasOwnProperty('$request')) {
      Vue.prototype.$request = request;
    }
    if (!Vue.hook) {
      Vue.use(VueI18n);
      Vue.hook = {
        render(context, options) {
          const i18n = createI18n(context.state.locale);
          options.i18n = i18n;
        }
      };
    }
  }
};