const EasyWebpack = require('easywebpack');
const clientConfig = require('./client');
const serverConfig = require('./server');
const config = [clientConfig, serverConfig];
if (process.env.BUILD_ENV === 'view') {
  EasyWebpack.server(config);
} else {
  EasyWebpack.build(config);
}
