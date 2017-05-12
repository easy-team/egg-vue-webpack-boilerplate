const path = require('path');

exports.config = require('../../config/webpackConfig');

exports.getOption = config => {
  return {
    entry: {
      vendor: ['vue']
    },
    resolve: {
      alias: {
        asset: path.join(config.baseDir, 'app/web/asset'),
        app: path.join(config.baseDir, 'app/web/framework/vue/app'),
        component: path.join(config.baseDir, 'app/web/component'),
        framework: path.join(config.baseDir, 'app/web/framework'),
        store: path.join(config.baseDir, 'app/web/store')
      }
    }
  };
};

