'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/article/list', controller.app.list);
  router.post('/api/article/add', controller.app.add);
  router.get('/api/article/del/:id', controller.app.del);
  router.get('/api/article/:id', controller.app.detail);
  router.get('*', controller.app.home);
};