'use strict';
const egg = require('egg');
module.exports = class AdminController extends egg.Controller {
  async home(ctx) {
    await ctx.renderAsset('admin.js', { title: 'egg-vue-asset', url: ctx.path });
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