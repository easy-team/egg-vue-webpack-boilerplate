const path = require('path');
const baseDir = path.resolve(__dirname, '..');
const configPath = path.join(baseDir, 'config/config.local.js');
const buildConfig = require(configPath)({ baseDir }).vuewebpackdev;
const env = process.env.BUILD_ENV || 'prod';

require('egg-vue-webpack-dev').build(baseDir, env, buildConfig);
