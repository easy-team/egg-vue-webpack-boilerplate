'use strict';

process.env.BUILD_ENV = 'dev';
process.env.BUILD_CLIENT = false;

const WebpackBuilder = require('egg-webpack-vue').WebpackBuilder;

module.exports = app => {
  const config = app.config.webpackvue;
  const builder = new WebpackBuilder(config);
  return builder.create();
};
