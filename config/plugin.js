exports.static = true;

exports.vue = {
  enable: true,
  package: '@hubcarl/egg-view-vue'
};

exports.vuessr = {
  enable: true,
  package: 'egg-view-vue-ssr'
};

exports.vuewebpackdev = {
  enable: false,
  package: 'egg-vue-webpack-dev'
};

exports.webpack = {
  enable: true,
  package: 'egg-webpack'
};

exports.webpackvue = {
  enable: true,
  package: 'egg-webpack-vue'
};

exports.logview = {
  package: 'egg-logview',
  env: [ 'local' ]
};
