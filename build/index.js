const VueWebpack = require('easywebpack-vue');
const clientConfig = require('./client');
const serverConfig = require('./server');
const config = {
  webpackConfig: [clientConfig, serverConfig]
};
if (process.env.BUILD_ENV === 'view') {
  VueWebpack.server(config);
} else {
  VueWebpack.build(config);
}
