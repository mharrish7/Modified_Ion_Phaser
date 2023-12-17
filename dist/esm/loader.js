import { p as promiseResolve, b as bootstrapLazy } from './index-afc87935.js';
export { s as setNonce } from './index-afc87935.js';

/*
 Stencil Client Patch Esm v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ion-phaser",[[0,"ion-phaser",{"game":[1040],"initialize":[4],"getInstance":[64],"destroy":[64]}]]]], options);
  });
};

export { defineCustomElements };
