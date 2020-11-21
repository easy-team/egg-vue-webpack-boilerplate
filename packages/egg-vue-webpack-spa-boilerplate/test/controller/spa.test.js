'use strict';
const mm = require('egg-mock');
const { 
  webpackReady, 
  assertCSR,
  assertDevResource
} = require('../utils/helper');

describe('test/controller/spa.test.js', () => {
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

    it('should work when spa index', async () => {
      await app
        .httpRequest()
        .get('/spa')
        .expect(200)
        .expect(res => {
          assertCSR(res);
          assertDevResource(res, 'common');
        });
    });

    it('should work when spa about', async () => {
      await app
        .httpRequest()
        .get('/spa/about')
        .expect(200)
        .expect(res => {
          assertCSR(res);
          assertDevResource(res, 'common');
        });
    });
  });
});
