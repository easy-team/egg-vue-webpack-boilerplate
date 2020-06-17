'use strict';
const mm = require('egg-mock');
const { 
  webpackReady, 
  assertText,
  assertSSR,
  assertCSR,
  assertDevJSResource
} = require('../utils/helper');

describe('test/controller/blog.test.js', () => {
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
        assertText(res, '<h1>Egg Vue</h1>');
        assertSSR(res);
        assertDevJSResource(res, 'blog/home');
      });
  });

  it('should work when ssr spa route about', async () => {
    await app
      .httpRequest()
      .get('/blog/about')
      .expect(200)
      .expect((res) => {
        assertSSR(res);
        assertDevJSResource(res, 'blog/about');
      });
  });
  it('should work when csr', async () => {
    await app
      .httpRequest()
      .get('/blog/csr')
      .expect(200)
      .expect((res) => {
        assertCSR(res);
        assertDevJSResource(res, 'blog/home');
      });
  });
});
