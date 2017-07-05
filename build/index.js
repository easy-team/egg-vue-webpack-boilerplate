const EasyWebpack = require('easywebpack');
const htmlConfig = require('./html');
const clientConfig = require('./client');
const serverConfig = require('./server');
const config = [clientConfig, serverConfig, htmlConfig];
if (process.env.NODE_SERVER) {
  EasyWebpack.server(config);
} else {
  EasyWebpack.build(config);
}
