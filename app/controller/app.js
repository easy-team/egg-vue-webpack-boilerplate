const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class AppController extends Controller {
  async index() {
    await this.ctx.render('app.js', {
      url: this.ctx.url.replace(/\/app/, '')
    });
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = this.ctx.query.id;
    this.ctx.body = Model.getDetail(id);
  }
}

module.exports = AppController;