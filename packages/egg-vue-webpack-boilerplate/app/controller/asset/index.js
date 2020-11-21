'use strict';
// asset 前端渲染 https://www.yuque.com/easy-team/egg-vue/asset
const path = require('path');
module.exports = app => {
  const layout = path.join(app.baseDir, 'app/web/view/asset.html');
  return class AppController extends app.Controller {
    async spa() {
      const { ctx } = this;
      const list = ctx.service.mock.getArticleList(); 
      await ctx.renderAsset('asset/spa.js', { prefix: '/asset', url: '/asset', list }, { layout });
    }
    async simple() {
      const { ctx } = this;
      const data = {
        site: {
          name: 'Egg Vue Asset Render',
          url: 'https://easyjs.cn' 
        }
      };
      const options = {
        layout
      };
      await ctx.renderAsset('asset/simple.js', data, options);
    }
  };
};
