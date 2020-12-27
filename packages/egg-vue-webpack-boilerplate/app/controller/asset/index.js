'use strict';
// asset 前端渲染 https://www.yuque.com/easy-team/egg-vue/asset
const path = require('path');
module.exports = app => {
  const layout = path.join(app.baseDir, 'app/web/view/asset.html');
  return class AppController extends app.Controller {
    async spa() {
      const { ctx } = this;
      await ctx.renderAsset('asset/spa.js', {}, { layout });
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

    async list() {
      this.ctx.body = this.ctx.service.article.getArtilceList(this.ctx.query);
    }
  
    async detail() {
      const id = Number(this.ctx.params.id);
      this.ctx.body = this.ctx.service.article.getArticle(id);
    }
  };
};
