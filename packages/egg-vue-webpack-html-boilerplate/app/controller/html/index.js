'use strict';
// html 前端渲染 https://www.yuque.com/easy-team/egg-vue/html
module.exports = (app) => {
  return class AppController extends app.Controller {
    async spa() {
      const { ctx } = this;
      const list = ctx.service.mock.getArticleList();
      await ctx.render('spa.tpl', {
        prefix: '/html',
        url: ctx.path,
        list
      });
    }

    async simple() {
      const { ctx } = this;
      const data = {
        site: {
          name: 'Egg Vue HTML Render',
          url: 'https://easyjs.cn' 
        }
      };
      await ctx.render('simple.tpl', data);
    }
  };
};
