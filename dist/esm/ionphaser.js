import { p as promiseResolve, b as bootstrapLazy } from './index-afc87935.js';
export { s as setNonce } from './index-afc87935.js';

/*
 Stencil Client Patch Browser v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ion-phaser",[[0,"ion-phaser",{"game":[1040],"initialize":[4],"getInstance":[64],"destroy":[64]}]]]], options);
});
