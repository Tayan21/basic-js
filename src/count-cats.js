const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
  let matrix2 = matrix.join().split(',');
  for(let i = 0; i < matrix2.length; i++){
      if(matrix2[i] === '^^'){
        cats += 1;
      }
  }
  return cats;
}

module.exports = {
  countCats
};
