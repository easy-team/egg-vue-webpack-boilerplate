const EggWebpackVue = require('egg-webpack-vue');

const clientConfig = require('./client');
//console.log(clientConfig.module.rules[0]);
const serverConfig = require('./server');
//const tmpServerConfig = Object.assign({}, serverConfig);
//delete tmpServerConfig.externals;
//console.log(tmpServerConfig.module.rules[0]);
EggWebpackVue.EasyWebpack.build([clientConfig, serverConfig]);
