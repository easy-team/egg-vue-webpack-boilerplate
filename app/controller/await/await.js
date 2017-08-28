const Model = require('../../mocks/article/list');

const Controller = require('egg').Controller;

class AwaitController extends Controller {
  async index() {
    await this.ctx.render('index/index.js', Model.getPage(1, 10));
  }

  async client() {
    await this.ctx.render('index/index.js', Model.getPage(1, 10));
  }

  async element() {
    await this.ctx.render('element/element.js', Model.getPage(1, 10));
  }

  pager() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }
}

module.exports = AwaitController;