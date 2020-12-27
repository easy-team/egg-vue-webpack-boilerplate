'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/html');
  router.get('/spa/api/article/list', app.controller.html.index.list);
  router.get('/spa/api/article/:id', app.controller.html.index.detail);
  // HTML Render
  router.get('/html/simple', controller.html.index.simple);
  router.get('/html(/.*)?', controller.html.index.spa);
};