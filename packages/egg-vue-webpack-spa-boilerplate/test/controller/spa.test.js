'use strict';
const mm = require('egg-mock');
const {
  webpackReady,
  assertCSR,
  assertSSR,
  assertDevJSResource,
} = require('../utils/helper');

describe('test/controller/spa.test.js', () => {
  let app;
  before(async () => {
    mm.env('local');
    app = mm.app();
    await app.ready();
    await webpackReady(app);
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should work when spa ssr', async () => {
    await app
      .httpRequest()
      .get('/spa')
      .expect(200)
      .expect((res) => {
        assertSSR(res);
        assertDevJSResource(res, 'spa');
      });
  });

  it('should work when spa csr', async () => {
    await app
      .httpRequest()
      .get('/spa?mode=csr')
      .expect(200)
      .expect((res) => {
        assertCSR(res);
        assertDevJSResource(res, 'spa');
      });
  });

  it('should work when spa about', async () => {
    await app
      .httpRequest()
      .get('/spa/detail/946940')
      .expect(200)
      .expect((res) => {
        assertSSR(res);
        assertDevJSResource(res, 'spa');
      });
  });
});
