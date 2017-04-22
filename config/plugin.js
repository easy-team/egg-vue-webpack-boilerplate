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
  package: 'egg-vue-webpack-dev'
};

exports.logview = {
  package: 'egg-logview',
  env: [ 'local' ]
};
