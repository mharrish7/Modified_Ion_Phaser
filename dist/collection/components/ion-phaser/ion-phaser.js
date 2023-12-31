export class IonPhaser {
  constructor() {
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
  static get is() { return "ion-phaser"; }
  static get originalStyleUrls() {
    return {
      "$": ["ion-phaser.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ion-phaser.css"]
    };
  }
  static get properties() {
    return {
      "game": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "GameInstance",
          "resolved": "GameInstance",
          "references": {
            "GameInstance": {
              "location": "import",
              "path": "../models/game"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the configuration of the game"
        }
      },
      "initialize": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Initialize the phaser game manually"
        },
        "attribute": "initialize",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get methods() {
    return {
      "getInstance": {
        "complexType": {
          "signature": "() => Promise<GameInstance['instance']>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "Phaser": {
              "location": "global"
            },
            "GameInstance": {
              "location": "import",
              "path": "../models/game"
            }
          },
          "return": "Promise<Game>"
        },
        "docs": {
          "text": "Get the Phaser game instance",
          "tags": []
        }
      },
      "destroy": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Destroy the Phaser game instance",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "game",
        "methodName": "onGameChange"
      }, {
        "propName": "initialize",
        "methodName": "onInitialize"
      }];
  }
}
