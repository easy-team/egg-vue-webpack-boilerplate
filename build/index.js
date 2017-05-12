const EggWebpackVue = require('egg-webpack-vue');
const clientConfig = require('./client');
const serverConfig = require('./server');
EggWebpackVue.EasyWebpack.build([clientConfig, serverConfig]);
