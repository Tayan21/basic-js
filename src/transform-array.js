const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let arr2 = arr.slice(0);
  if(arr2 instanceof Array){
    for(let i = 0; i < arr2.length; i++){
      if(arr2[i] == '--discard-next'){
        if(i < arr2.length-1){
          if(arr2[i] === 'string'){
            arr2.splice(i,3);
          }else{
            arr2.splice(i,3);
          }
        }else{  
          arr2.splice(i,1);
        }
        
      } else if(arr2[i] == '--discard-prev'){
        if(i >= 1){
          arr2.splice(i-1,2);
        }else{
          arr2.splice(i, 1);
        }
        
        
      }else if(arr2[i] == '--double-next'){
        if(i < arr2.length-1){
          arr2.splice(i,1,arr2[i+1]);
        }else{
          arr2.splice(i,1);
        }
        
      }else if(arr2[i] == '--double-prev'){
        if(i >= 1){
          arr2.splice(i,1,arr2[i-1]);
        }else{
          arr2.splice(i, 1);
        }
        
        
      }
      
    }
    
  } else{
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  return arr2;
}

module.exports = {
  transform
};
