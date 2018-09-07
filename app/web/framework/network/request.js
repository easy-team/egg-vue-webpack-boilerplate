'use strict';
import axios from 'axios';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.timeout = 15000;
export default class Request {
  constructor(config, store) {
    this.config = config;
    this.store = store;
  }
  get(url, headers = {}) {
    return axios.get(url, headers);
  }
  post(url, json = {}, headers = {}) {
    return axios.post(url, json, headers);
  }
}