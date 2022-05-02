const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  data: [],
  value: '( )',
  data2: [],

  getLength() {
    return this.data.length;
    
  },
  addLink(value) {
   this.data.push(`( ${value} )`);
   return this; 
  },
  removeLink(position) {
    if(((position) > this.data.length) || ((position -1) < 0) || (typeof position !== 'number')){
      throw new Error("You can't remove incorrect link");
      this.data.length = 0;
    }else {
      this.data.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.data.reverse();
    return this;
  },
  finishChain() {
    this.data2 = this.data.slice();
    this.data = [];
    return this.data2.join('~~');
  }
  
};


module.exports = {
  chainMaker
};
