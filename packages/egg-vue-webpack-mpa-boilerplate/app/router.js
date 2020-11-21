'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.blog.home.ssr);
  router.get('/blog/csr', controller.blog.home.csr);
  router.get('/blog/list', controller.blog.home.list);
  router.get('/blog/about', controller.blog.home.about);
  router.get('/blog/category', controller.blog.category.index);
};