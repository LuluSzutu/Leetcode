/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  //DFS
  if (digits.length === 0) {
    return [];
  }
  
  d2l = ['','','abc','def', 'ghi','jkl','mno','pqrs','tuv','wxyz'];
  
  let result = [];  
  findAllCombination(0,"",digits, result);
  
  return result;   
};

function findAllCombination(index, prefix, digits, result) {
  if (index == digits.length) {
    result.push(prefix);
    return result;
  }
  let cdig = digits[index];
  let cletters = d2l[cdig];
  for (let i = 0; i < cletters.length; i++) {
    findAllCombination(index+1, prefix+cletters[i], digits, result);
  }
}

