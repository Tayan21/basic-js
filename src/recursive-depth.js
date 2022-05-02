const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  constructor(flatArr) {
    this.flatArr = flatArr;
    
  }

  calculateDepth(arr) {
    this.flatArr = 1;
    if(arr.filter(i => i.constructor.name === "Array").length != 0){
      return flatArr + calculateDepth([].concat(...arr.filter(i =>  i.constructor.name === "Array")))
    } else {
      return 0;
    }
    /*arr.forEach(el =>{
      if(typeof (el) == 'object'){
        this.flatArr++;
        calculateDepth(el);
      }
    });
    return this.flatArr;*/
  }
}
const depthCalc = new DepthCalculator();
depthCalc.flatArr = 1;

module.exports = {
  DepthCalculator
};
