/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  bracketSets = new Map();
  bracketSets.set('(', ')');
  bracketSets.set('{', '}');
  bracketSets.set('[', ']');
  
  let stackOpen = [];
  while (s.length > 0) {
    while (s[0] === '(' || s[0] === '[' || s[0] === '{' ) {
      stackOpen.push(s[0]);
      s = s.slice(1);
    }
    while (s[0] === ')' || s[0] === ']' || s[0] === '}' ) {
      let ql = stackOpen.length;
      if (bracketSets.get(stackOpen[ql-1]) != s[0]) {
        return false;
      } else {
        s = s.slice(1);
        stackOpen = stackOpen.slice(0,-1);
      }    
    }
  }
  if (stackOpen.length === 0) {
    return true;
  } else {
    return false;
  }
};

