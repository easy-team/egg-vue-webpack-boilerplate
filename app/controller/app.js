const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class AppController extends Controller {
  async index(ctx) {
    const { mode } = ctx.query;
    if (mode === 'csr') {
      await this.ctx.renderClient('app.js', { url: this.ctx.url });
    } else  {
      await this.ctx.render('app.js', { url: this.ctx.url });
    }
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = Number(this.ctx.params.id);
    this.ctx.body = Model.getDetail(id);
  }
}

module.exports = AppController;