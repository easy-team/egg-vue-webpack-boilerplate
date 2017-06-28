const EasyWebpack = require('easywebpack');
const config = [];
if (process.env.BUILD_ENV === 'html') {
  const htmlConfig = require('./html');
  Array.prototype.push.apply(config, [htmlConfig]);
} else {
  const clientConfig = require('./client');
  const serverConfig = require('./server');
  Array.prototype.push.apply(config, [clientConfig, serverConfig]);
}
if (process.env.NODE_SERVER) {
  EasyWebpack.server(config);
} else {
  EasyWebpack.build(config);
}
