'usestrict';
const egg = require('egg');
module.exports = class HomeController extends egg.Controller {
  
  async ssr() {
    const result = this.service.article.getArtilceList();
    await this.ctx.render('blog/home.js', result);
  }

  async csr() {
    const result = this.service.article.getArtilceList();
    await this.ctx.renderClient('blog/home.js', result);
  }

  async about() {
    await this.ctx.render('blog/about.js', {});
  }

  async list() {
    this.ctx.body = this.service.article.getArtilceList(this.ctx.query);
  }

  async detail() {
    const id = this.ctx.query.id;
  }
};