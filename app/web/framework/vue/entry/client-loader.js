'use strict';
module.exports = function(source) {
  return `
    import Client from 'client';
    import Page from '${this.resourcePath}';
    export default Client.render({ ...Page });
  `;
};