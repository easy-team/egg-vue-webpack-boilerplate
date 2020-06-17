'use strict';
const Controller = require('egg').Controller;
class AppController extends Controller {
  async index(ctx) {
    const { mode } = ctx.query;
    if (mode === 'csr') {
      await this.ctx.renderClient('spa.js', { url: this.ctx.url.replace('/spa', '') });
    } else  {
      await this.ctx.render('spa.js', { url: this.ctx.url.replace('/spa', '') });
    }
  }

  async list() {
    this.ctx.body = this.ctx.service.article.getArtilceList(this.ctx.query);
  }

  async detail() {
    const id = Number(this.ctx.params.id);
    this.ctx.body = this.ctx.service.article.getArticle(id);
  }
}

module.exports = AppController;