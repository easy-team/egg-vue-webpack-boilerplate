'use strict';

const WebpackVue = require('egg-webpack-vue');
const WebpackBuilder = WebpackVue.WebpackBuilder;
module.exports = app => {
  const config = app.config.webpackvue;
  const builder = new WebpackBuilder(config);
  return builder.create();
};
