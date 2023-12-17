import { HTMLElement, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const ionPhaserCss = "ion-phaser{display:block}";

const IonPhaser$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.initializeGame = (game = this.game) => {
      if (game === null || game === undefined)
        return;
      if (game.instance !== undefined && game.instance !== null) {
        throw new Error("A Phaser game already exist");
      }
      game.parent = game.parent || this.el;
      game.instance = new Phaser.Game(game);
    };
    this.game = undefined;
    this.initialize = true;
  }
  onGameChange(game) {
    if (this.initialize && !this.hasInitialized()) {
      this.initializeGame(game);
    }
  }
  onInitialize(newInitialize, oldInitialize) {
    if (newInitialize && !oldInitialize) {
      this.initializeGame();
    }
  }
  /**
   * Get the Phaser game instance
   */
  async getInstance() {
    const { instance } = this.game || {};
    return Promise.resolve(instance);
  }
  /**
   * Destroy the Phaser game instance
   */
  async destroy() {
    if (this.hasInitialized()) {
      this.game.instance.destroy(true);
      this.game.instance = null;
    }
  }
  connectedCallback() {
    if (!this.hasInitialized() && this.initialize) {
      this.initializeGame();
    }
  }
  disconnectedCallback() {
    this.destroy();
  }
  hasInitialized() {
    return (this.game &&
      this.game.instance !== undefined &&
      this.game.instance !== null);
  }
  get el() { return this; }
  static get watchers() { return {
    "game": ["onGameChange"],
    "initialize": ["onInitialize"]
  }; }
  static get style() { return ionPhaserCss; }
};

const IonPhaser = /*@__PURE__*/proxyCustomElement(IonPhaser$1, [0,"ion-phaser",{"game":[1040],"initialize":[4]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      IonPhaser
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { IonPhaser, defineCustomElements };
