'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/article/list', controller.admin.list);
  router.post('/api/article/add', controller.admin.add);
  router.get('/api/article/del/:id', controller.admin.del);
  router.get('/api/article/:id', controller.admin.detail);
  router.get('*', controller.admin.home);
};