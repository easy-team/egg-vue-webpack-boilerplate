'use strict';
const egg = require('egg');
module.exports = class AdminController extends egg.Controller {
  async home(ctx) {
    const { locale = 'cn' } = ctx.query;
    await ctx.render('app.tpl', { title: '基于 Egg + Vue + Webpack 纯HTML前端工程项目', url: ctx.path, locale });
  }
  async list(ctx) {
    this.ctx.body = ctx.service.article.getArtilceList(ctx.request.body);
  }
  async add(ctx) {
    ctx.body = this.service.article.saveArticle(ctx.request.body);
  }
  async del(ctx) {
    const { id } = ctx.params;
    ctx.body = this.service.article.deleteArticle(id);
  }
  async detail(ctx) {
    const { id } = ctx.params;
    ctx.body = await ctx.service.article.query({ id: Number(id) });
  }
};