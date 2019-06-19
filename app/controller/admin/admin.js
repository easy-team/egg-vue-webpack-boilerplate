'use strict';
const egg = require('egg');
module.exports = class AdminController extends egg.Controller {
  async login(ctx) {
    await ctx.renderClient('admin/login/login.js', {});
  }
  async home(ctx) {
    const url = ctx.url.replace(/\/admin/, '');
    await ctx.render('admin/home/home.js', { ctx, url, title: 'easy-admin' });
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
    const id = ctx.query.id;
    ctx.body = {};
  }
};