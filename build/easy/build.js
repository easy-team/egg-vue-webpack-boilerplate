const EasyWebpack = require('easywebpack');

const clientConfig = require('./client');
console.log(clientConfig);
const serverConfig = require('./server');
//const tmpServerConfig = Object.assign({},serverConfig);
//delete tmpServerConfig.externals;
//console.log(tmpServerConfig);
//console.log(tmpServerConfig.module.rules[3]);
EasyWebpack.build([ clientConfig, serverConfig ]);
