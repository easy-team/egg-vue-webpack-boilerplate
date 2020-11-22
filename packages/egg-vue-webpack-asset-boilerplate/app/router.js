'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/asset');
  // Asset Render
  router.get('/asset/simple', controller.asset.index.simple);
  router.get('/asset(/.*)?', controller.asset.index.spa);
};