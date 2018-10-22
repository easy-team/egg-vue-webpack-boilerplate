// target: web 表示只获取前端构建 Webpack 配置
// refer: https://www.yuque.com/easy-team/easywebpack/native
const easywebpack = require('easywebpack-vue');
const vuxLoader = require('vux-loader');
const baseWebpackConfig = easywebpack.getWebpackConfig({
  target: 'vue', // target: web 表示只获取前端构建 Webpack 配置
});
// 拿到基础配置, 可以进行二次加工
module.exports = vuxLoader.merge(baseWebpackConfig, {
  plugins: ['vux-ui']
});