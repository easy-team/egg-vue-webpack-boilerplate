'use strict';
const WebpackWebBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setDefine({ PROD: true });
  }
};
module.exports = WebpackWebBaseBuilder;