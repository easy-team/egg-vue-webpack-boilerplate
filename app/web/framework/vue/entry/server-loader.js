'use strict';
module.exports = function(source) {
  this.cacheable();
  return `
    import render from 'server';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    export default render({ ...Page });
  `;
};