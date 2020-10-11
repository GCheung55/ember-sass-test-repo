'use strict';
const sass = require('node-sass');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },
  options: {
    sassOptions: {
      implementation: sass,
      includePaths: ['app/styles']
    },
  },
};
