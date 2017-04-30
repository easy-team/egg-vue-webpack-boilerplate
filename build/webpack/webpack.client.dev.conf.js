'use strict';

process.env.BUILD_ENV = 'dev';
process.env.BUILD_CLIENT = true;
const path = require('path');
const WebpackVue = require('egg-webpack-vue');
const WebpackBuilder = WebpackVue.WebpackBuilder;
module.exports = app => {
  const config = app.config.webpackvue;
  const baseConfig = require('./webpack.base.conf')(app);
  const builder = new WebpackBuilder(config);
  builder.setOption(baseConfig);
  builder.setOption({
    devtool: 'source-map',
    performance: {
      hints: false
    }
  });
  return builder.create();
};
