'use strict';
module.exports = function(source) {
  return `
    import Server from 'server';
    import Page from '${this.resourcePath}';
    export default Server.render({ ...Page });
  `;
};