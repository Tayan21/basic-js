const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length
  },
  addLink(value) {
    this.chains = this.chains.concat(value)
    return this
  },
  removeLink(position) {
    if(typeof position != 'number' || position > this.chains.length || position < 1) {
      this.chains = []
      throw new Error("You can't remove incorrect link!")
    }
    position--
    this.chains = this.chains.filter((it, i) => i != position)
    return this
  },
  reverseChain() {
    let newArr = []
    if(this.chains.length == 0) return this
    for(i = this.chains.length - 1; i >= 0; i--){
      newArr = newArr.concat(this.chains[i])
    }
    this.chains = newArr;
    return this
  },
  finishChain() {
    let chainsReady = this.chains
    this.chains = []
    return chainsReady.map((it, i) => `( ${it} )`).join('~~')
  }
};


module.exports = {
  chainMaker
};
