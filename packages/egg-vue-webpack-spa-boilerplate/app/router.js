'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/spa');
  router.get('/spa/api/article/list', app.controller.spa.index.list);
  router.get('/spa/api/article/:id', app.controller.spa.index.detail);
  router.get('/spa(/.*)?', controller.spa.index.index);
};