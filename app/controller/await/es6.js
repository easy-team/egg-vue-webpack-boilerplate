const Model = require('../../mocks/article/list');

module.exports = app => {

  return class ES6Controller extends app.Controller {

    * index() {
      const { ctx } = this;
      yield ctx.renderClient('index/index.js', Model.getPage(1, 10));
    }

  }
};