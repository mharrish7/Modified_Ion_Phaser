'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-42823bda.js');

const ionPhaserCss = "ion-phaser{display:block}";

const IonPhaser = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "game": ["onGameChange"],
    "initialize": ["onInitialize"]
  }; }
};
IonPhaser.style = ionPhaserCss;

exports.ion_phaser = IonPhaser;
