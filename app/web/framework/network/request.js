'use strict';
import axios from 'axios';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';
export default {
  post(url, json, store) {
    const { state } = store;
    const headers = { 'x-csrf-token': state.csrf };
    if (EASY_ENV_IS_NODE) {
      headers.Cookie = `csrfToken=${state.csrf}`;
    }
    return axios.post(`${state.origin}${url}`, json, { headers });
  },
  get(url, store) {
    const { state } = store;
    return axios.get(`${state.origin}${url}`);
  }
};