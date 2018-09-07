'use strict';
module.exports = function(source) {
  this.cacheable();
  return `
    import Vue from 'vue';
    import Layout from 'component/layout/index';
    import render from 'client';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    Vue.component(Layout.name, Layout);
    export default render({ ...Page });
  `;
};