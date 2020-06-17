'use strict';

const { create } = require('./shell');

const common_files = [
  "app/extend",
  'app/service',
  'app/middleware', 
  'app/model', 
  'app/lib',
  'app/web/asset',
  'app/web/component',
  'babel.config.js',
  '.vscode',
  '.eslintrc.js',
  '.eslintignore',
  '.gitignore',
  'LICENSE'
];

const scopeMapping = {
  'egg-vue-webpack-spa-boilerplate': {
    files:[
      'app/controller/spa',
      'app/web/framework/app.js',
      'app/web/framework/request.js',
      'app/web/page/spa',
      'app/web/view/layout.html',
      'app/view',
      'config',
      "test/utils",
      "test/controller/spa.test.js"
    ]
  },
  'egg-vue-webpack-mpa-boilerplate': {
    files:[
      'app/controller/blog',
      'app/web/framework/entry',
      'app/web/framework/i18n',
      'app/web/framework/plugin',
      'app/web/framework/request.js',
      'app/web/page/blog',
      'app/web/view/layout.html',
      'app/view',
      'config',
      "test/utils",
      "test/controller/blog.test.js"
    ]
  },
  'egg-vue-webpack-asset-boilerplate': {
    files:[
      'app/controller/asset',
      'app/web/framework/app.js',
      'app/web/framework/request.js',
      'app/web/page/asset',
      'app/web/view',
      'app/view',
      'config',
      "test/utils",
      "test/controller/asset.test.js"
    ]
  },
  'egg-vue-webpack-html-boilerplate': {
    files:[
      'app/controller/html',
      'app/web/framework/app.js',
      'app/web/framework/request.js',
      'app/web/page/html',
      'app/web/view/layout.tpl',
      'app/view',
      'config',
      "test/utils",
      "test/controller/html.test.js"
    ]
  }
};

if (process.argv.length === 4 && process.argv[2] === '--scope') {
  const scope = process.argv[3];
  const { files: scopeFiles } = scopeMapping[scope];
  const files = [...common_files, ...scopeFiles];
  create(files, {
    sourceName: 'egg-vue-webpack-boilerplate',
    targetName: scope
  });
}
