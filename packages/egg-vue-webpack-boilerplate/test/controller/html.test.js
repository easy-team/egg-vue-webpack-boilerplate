'use strict';
const mm = require('egg-mock');
const {
  webpackReady,
  assertCSR,
  assertDevJSResource,
} = require('../utils/helper');

describe('test/controller/html.test.js', () => {
  let app;
  before(async () => {
    mm.env('local');
    app = mm.app();
    await app.ready();
    await webpackReady(app);
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should work when simple', async () => {
    await app
      .httpRequest()
      .get('/html/simple')
      .expect(200)
      .expect((res) => {
        assertCSR(res);
        assertDevJSResource(res, 'html/simple');
      });
  });

  it('should work when spa', async () => {
    await app
      .httpRequest()
      .get('/html')
      .expect(200)
      .expect((res) => {
        assertCSR(res);
        assertDevJSResource(res, 'html/spa');
      });
  });
});
