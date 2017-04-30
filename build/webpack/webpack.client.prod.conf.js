'use strict';
process.env.BUILD_CLIENT = true;
const WebpackVue = require('egg-webpack-vue');
const WebpackBuilder = WebpackVue.WebpackBuilder;
module.exports = app => {
  const config = app.config.webpackvue;
  const builder = new WebpackBuilder(config, {
    devtool: 'source-map',
    performance: {
      hints: false
    }
  });
  return builder.create();
};
