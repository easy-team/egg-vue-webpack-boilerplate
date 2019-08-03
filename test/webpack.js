const easywebpack = require('@easy-team/easywebpack-vue');
const webpackConfigList = easywebpack.getWebpackConfig();
webpackConfigList.forEach(webpackConfig => {
  console.log(webpackConfig.target, webpackConfig.entry);
});