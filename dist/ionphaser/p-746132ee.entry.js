import{r as t,g as i}from"./p-efb9ff79.js";const s=class{constructor(i){t(this,i),this.initializeGame=(t=this.game)=>{if(null!=t){if(null!=t.instance)throw new Error("A Phaser game already exist");t.parent=t.parent||this.el,t.instance=new Phaser.Game(t)}},this.game=void 0,this.initialize=!0}onGameChange(t){this.initialize&&!this.hasInitialized()&&this.initializeGame(t)}onInitialize(t,i){t&&!i&&this.initializeGame()}async getInstance(){const{instance:t}=this.game||{};return Promise.resolve(t)}async destroy(){this.hasInitialized()&&(this.game.instance.destroy(!0),this.game.instance=null)}connectedCallback(){!this.hasInitialized()&&this.initialize&&this.initializeGame()}disconnectedCallback(){this.destroy()}hasInitialized(){return this.game&&null!=this.game.instance}get el(){return i(this)}static get watchers(){return{game:["onGameChange"],initialize:["onInitialize"]}}};s.style="ion-phaser{display:block}";export{s as ion_phaser}