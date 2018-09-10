import axios from 'axios';
import request from 'framework/network/request';
export default {
  install(Vue) {
    if (!Vue.prototype.hasOwnProperty('$request')) {
      Vue.prototype.$request = request;
    }
  }
};