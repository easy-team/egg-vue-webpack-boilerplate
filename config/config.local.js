const path = require('path');

module.exports = app => {
  const exports = {};

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: ['plugins'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs')
  };

  exports.webpack = {
    port:8090,
    clientConfig: path.join(app.baseDir, 'build/webpack/webpack.client.dev.conf.js'),
    serverConfig: path.join(app.baseDir, 'build/webpack/webpack.server.dev.conf.js'),
  };

  exports.webpackvue = {
    baseDir: app.baseDir,
    build: {
      path: 'public',
      publicPath: '/public/',
      prefix: 'static',
      entry: [path.join(app.baseDir, 'app/web/page')],
      commonsChunk: ['vendor']
    },
    webpack: {
      styleLoader: 'vue-style-loader',
      loaderOption: {
        sass: {
          includePaths: [path.resolve(__dirname, 'app/web/asset/style')]
        }
      },
      pluginOption: {
        ExtractTextPlugin: {
          extract: true
        }
      }
    }
  };

  exports.vuewebpackdev = {
    build: {
      port: 8090,
      commonsChunk: ['vendor']
    },
    env: {
      dev: {
        uglifyJs: false
      },
      test: {
        uglifyJs: false,
        uglifyJsConfig: {
          compress: {
            drop_console: false,
            drop_debugger: false
          }
        }
      },
      prod: {
        uglifyJs: true,
        serverBundleExclude: []
      }
    }
  };

  return exports;
};
