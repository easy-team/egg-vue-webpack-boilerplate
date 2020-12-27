'use strict';
// html 前端渲染 https://www.yuque.com/easy-team/egg-vue/html
module.exports = (app) => {
  return class AppController extends app.Controller {
    async spa() {
      const { ctx } = this;
      await ctx.render('spa.tpl', { state: { ...ctx.locals} });
    }

    async simple() {
      const { ctx } = this;
      const state = {
        ...ctx.locals,
        site: {
          name: 'Egg Vue HTML Render',
          url: 'https://easyjs.cn' 
        }
      };
      await ctx.render('simple.tpl', { state });
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
