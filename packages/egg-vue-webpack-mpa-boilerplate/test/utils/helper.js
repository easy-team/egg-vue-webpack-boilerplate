
'use strict';
const assert = require('assert');

exports.webpackReady = async (app) => {
  return new Promise((resolve) => {
    app.messenger.on('webpack_build_state', (data) => {
      if (data.state) {
        resolve(data);
      }
    });
  });
}

exports.assertText = function (res, text) {
  assert(new RegExp(text).test(res.text));
}

exports.assertNotText = function (res, text) {
  assert(!new RegExp(text).test(res.text));
}

exports.assertSSR = function (res) {
  exports.assertNotText(res, '<div id="app"></div>');
}

exports.assertCSR = function (res) {
  exports.assertText(res, '<div id="app"></div>');
}

exports.assertDevCssResource = function (res, entry) {
  exports.assertText(res, `<link( rel="stylesheet")? href="/public/css/${entry}.css"( rel="stylesheet")?>`);
}

exports.assertDevJSResource = function (res, entry) {
  exports.assertText(res, '<script( type="text/javascript")? src="/public/js/runtime.js"( type="text/javascript")?></script>');
  exports.assertText(res, '<script( type="text/javascript")? src="/public/js/common.js"( type="text/javascript")?></script>');
  exports.assertText(res, `<script( type="text/javascript")? src="/public/js/${entry}.js"( type="text/javascript")?></script>`);
  exports.assertText(res, 'window.__INITIAL_STATE__');
}

exports.assertDevResource = function (res, entry) {
  exports.assertDevCssResource(res, entry);
  exports.assertDevJSResource(res, entry);
}
