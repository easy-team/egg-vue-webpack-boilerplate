
const path = require('path');

module.exports = (projectRoot, config) => {
  const baseWebpackConfig = {
    entry: {
      vendor: [ 'vue' ]
    },
    resolve: {
      alias: {
        asset: path.join(projectRoot, 'app/web/asset'),
        app: path.join(projectRoot, 'app/web/framework/vue/app'),
        component: path.join(projectRoot, 'app/web/component'),
        framework: path.join(projectRoot, 'app/web/framework'),
        store: path.join(projectRoot, 'app/web/store')
      }
    },
    externals: {},
    plugins: []
  };
  return baseWebpackConfig;
};
