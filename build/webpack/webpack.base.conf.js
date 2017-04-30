
const path = require('path');

module.exports = app => {
  const baseWebpackConfig = {
    entry: {
      vendor: [ 'vue' ]
    },
    resolve: {
      alias: {
        asset: path.join(app.baseDir, 'app/web/asset'),
        app: path.join(app.baseDir, 'app/web/framework/vue/app'),
        component: path.join(app.baseDir, 'app/web/component'),
        framework: path.join(app.baseDir, 'app/web/framework'),
        store: path.join(app.baseDir, 'app/web/store')
      }
    },
    externals: {},
    plugins: []
  };
  return baseWebpackConfig;
};
