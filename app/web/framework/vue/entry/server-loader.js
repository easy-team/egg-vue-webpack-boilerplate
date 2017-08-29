'use strict';
module.exports = function(source) {
  return `
    import Server from 'server';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    export default Server.render({ ...Page });
  `;
};