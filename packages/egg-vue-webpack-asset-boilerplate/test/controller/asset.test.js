'use strict';
const mm = require('egg-mock');
const { 
  webpackReady, 
  assertCSR,
  assertDevResource
} = require('../utils/helper');

describe('test/controller/asset.test.js', () => {
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

    it('should work when simple', async () => {
      await app
        .httpRequest()
        .get('/asset/simple')
        .expect(200)
        .expect(res => {
          assertCSR(res);
          assertDevResource(res, 'common');
        });
    });

    it('should work when spa', async () => {
      await app
        .httpRequest()
        .get('/asset')
        .expect(200)
        .expect(res => {
          assertCSR(res);
          assertDevResource(res, 'common');
        });
    });
  });
});
