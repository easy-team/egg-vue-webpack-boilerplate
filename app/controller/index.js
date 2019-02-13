'use strict';
const path = require('path');
const egg = require('egg');
const serialize = require('serialize-javascript');
const vueServerRenderer = require('vue-server-renderer');
module.exports = class IndexController extends egg.Controller {
  async index(ctx) {
    const { app } = ctx;
    const entry = 'app.js';
    const filepath = path.join(app.config.view.root, entry);
    const manifest = require('../../config/manifest.json');
    const res = manifest.deps[entry];
    const cssLink = res.css.map(src => {
      return `<link href="${src}">`;
    });
    const jsScript = res.js.map(src => {
      return `<script src="${src}"></script>`;
    });
    jsScript.unshift(`<script> window.__INITIAL_STATE__= ${serialize({ cssLink: '', jsScript: '' }, { isJSON: true })};</script>`);
    const state = { cssLink: cssLink.join('\r\n'), jsScript: jsScript.join('\r\n') };
    if (app.config.env === 'local') {
      const strJSBundle = await app.webpack.fileSystem.readWebpackMemoryFile(filepath);
      ctx.body = await vueServerRenderer.createBundleRenderer(strJSBundle).renderToString({ state });
    } else {
      ctx.body = await vueServerRenderer.createBundleRenderer(filepath).renderToString({ state });
    }
  }
};