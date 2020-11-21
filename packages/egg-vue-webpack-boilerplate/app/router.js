'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.blog.home.ssr);
  router.get('/blog/csr', controller.blog.home.csr);
  router.get('/blog/list', controller.blog.home.list);
  router.get('/blog/about', controller.blog.home.about);
  router.get('/blog/category', controller.blog.category.index);
  router.get('/login', controller.admin.admin.login);
  router.get('/about', controller.admin.admin.login);
  router.get('/test/ssr', controller.test.index);
  router.get('/test/csr', controller.test.csr);
  // Asset Render
  router.get('/asset/simple', controller.asset.index.simple);
  // router.get('/asset(/.*)?', controller.asset.index.spa);

  // HTML Render
  router.get('/html/simple', controller.html.index.simple);
  // router.get('/html(/.*)?', controller.html.index.spa);
 
  // SPA Normal
  router.get('/spa/api/article/list', app.controller.spa.index.list);
  router.get('/spa/api/article/:id', app.controller.spa.index.detail);
  router.get('/spa(/.*)?', controller.spa.index.index);

  // SPA Element Admin
  router.post('/admin/api/article/list', controller.admin.admin.list);
  router.post('/admin/api/article/add', controller.admin.admin.add);
  router.get('/admin/api/article/del/:id', controller.admin.admin.del);
  router.get('/admin/api/article/:id', controller.admin.admin.detail);
  router.get('/admin(/.+)?', controller.admin.admin.home);
};