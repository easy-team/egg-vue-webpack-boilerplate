const EasyWebpack = require('easywebpack');

const ClientBuilder = require(`./client`);
const ServerBuilder = require(`./server`);

const webpackConfig = require('../../config/webpackConfig');
const clientConfig = new ClientBuilder(webpackConfig.webpackvue).create();
const serverConfig = new ServerBuilder(webpackConfig.webpackvue).create();

console.log('clientConfig', clientConfig.plugins, serverConfig.module);

console.log('serverConfig', serverConfig.plugins, serverConfig.module);

EasyWebpack.build([clientConfig, serverConfig]);