'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-42823bda.js');

/*
 Stencil Client Patch Browser v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ionphaser.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ion-phaser.cjs",[[0,"ion-phaser",{"game":[1040],"initialize":[4],"getInstance":[64],"destroy":[64]}]]]], options);
});

exports.setNonce = index.setNonce;
