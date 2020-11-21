'use strict';
const mm = require('egg-mock');
const { 
  webpackReady, 
  assertText,
  assertSSR,
  assertCSR,
  assertDevResource
} = require('../utils/helper');

describe('test/controller/blog.test.js', () => {
  describe('GET /', () => {
    let app;
    before(async () => {
      mm.env('local');
      app = mm.app();
      await app.ready();
      await webpackReady(app);
    });

    afterEach(mm.restore);
    after(() => app.close());

    it('should work when js ssr', async () => {
      await app
        .httpRequest()
        .get('/')
        .expect(200)
        .expect(res => {
          assertText(res, '<h1>Egg Vue 工程方案</h1>');
          assertText(res, '<a href="/detail/1">Egg React 服务端渲染(SSR)之快速开始</a>');
          assertSSR(res);
          assertDevResource(res, 'blog');
        });
    });
    it('should work when jsx ssr', async () => {
      await app
        .httpRequest()
        .get('/about')
        .expect(200)
        .expect((res) => {
          assertSSR(res);
          assertDevResource(res, 'blog');
        });
    });
    it('should work when ssr spa route about', async () => {
      await app
        .httpRequest()
        .get('/about')
        .expect(200)
        .expect((res) => {
          assertSSR(res);
          assertDevResource(res, 'blog');
        });
    });
    it('should work when csr', async () => {
      await app
        .httpRequest()
        .get('/csr')
        .expect(200)
        .expect((res) => {
          assertCSR(res);
          assertDevResource(res, 'blog');
        });
    });
  });
});
