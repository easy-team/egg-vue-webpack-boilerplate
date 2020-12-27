'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/asset');
  router.get('/spa/api/article/list', app.controller.asset.index.list);
  router.get('/spa/api/article/:id', app.controller.asset.index.detail);
  // Asset Render
  router.get('/asset/simple', controller.asset.index.simple);
  router.get('/asset(/.*)?', controller.asset.index.spa);
};