'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  
  async ssr() {
    const result = this.service.article.getArtilceList();
    await this.ctx.render('index/index.js', result);
  }

  async csr() {
    const result = this.service.article.getArtilceList();
    await this.ctx.renderClient('index/index.js', result);
  }

  async list() {
    this.ctx.body = this.service.article.getArtilceList(this.ctx.query);
  }

  async detail() {
    const id = this.ctx.query.id;
  }
};