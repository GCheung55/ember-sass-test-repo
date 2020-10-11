/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
const sass = require('node-sass');

module.exports = EngineAddon.extend({
  name: 'test-engine',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  sassOptions: {
    implementation: sass,
    includePaths: ['app/styles']
  },

  isDevelopingAddon() {
    return true;
  }
});
