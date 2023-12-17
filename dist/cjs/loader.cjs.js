'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-42823bda.js');

/*
 Stencil Client Patch Esm v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ion-phaser.cjs",[[0,"ion-phaser",{"game":[1040],"initialize":[4],"getInstance":[64],"destroy":[64]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
