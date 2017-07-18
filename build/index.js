'use strict';
const easyWebpack = require('easywebpack');
const clientConfig = require('./web/client');
const serverConfig = require('./web/server');
const webpackConfig = [clientConfig, serverConfig];
easyWebpack.build(webpackConfig, () => {
  console.log('build success');
});