const Model = require('../../mocks/article/list');

const Controller = require('egg').Controller;
// Node 8 async/await, please see feature/node8 or upgrade node 8, and * to async, yield to await
class AwaitController extends Controller {
  async index() {
    await this.ctx.render('index/index.js', Model.getPage(1, 10));
  }

  async client() {
    await this.ctx.renderClient('index/index.js', Model.getPage(1, 10));
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