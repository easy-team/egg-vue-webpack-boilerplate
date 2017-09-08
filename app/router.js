
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/client', app.controller.home.home.client);
  app.get('/element', app.controller.home.home.element);
  app.get('/pager', app.controller.home.home.pager);
  app.get('/about', app.controller.about.about.index);
  app.get('/router', app.controller.router.router.index);
  app.get('/dynamic', app.controller.dynamic.dynamic.index);
  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('/app(/.+)?', app.controller.app.app.index);
  app.get('/less', app.controller.css.css.less);
  app.get('/css/module', app.controller.css.css.module);
  app.get('/sass', app.controller.css.css.sass);
  app.get('/test', app.controller.test.test.index);
};
