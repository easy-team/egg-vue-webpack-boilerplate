
module.exports = app => {
  app.get('/api/article/list', app.controller.app.list);
  app.get('/api/article/:id', app.controller.app.detail);
  app.get('/*', app.controller.app.index);
};
