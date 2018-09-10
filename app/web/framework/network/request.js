'use strict';
import axios from 'axios';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';
export default {
  post(url, json, store) {
    const { state } = store;
    return axios.post(`${state.origin}${url}`, json, {
      headers: {
        'x-csrf-token': state.csrf,
        Cookie: `csrfToken=${state.csrf}`
      }
    });
  },
  get(url, store) {
    const { state } = store;
    return axios.get(`${state.origin}${url}`);
  }
};