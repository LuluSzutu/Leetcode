/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  bracketSets = new Map();
  bracketSets.set('(', ')');
  bracketSets.set('{', '}');
  bracketSets.set('[', ']');
  
  let queOpen = [];
  while (s.length > 0) {
    while (s[0] === '(' || s[0] === '[' || s[0] === '{' ) {
      queOpen.push(s[0]);
      s = s.slice(1);
    }
    while (s[0] === ')' || s[0] === ']' || s[0] === '}' ) {
      let ql = queOpen.length;
      if (bracketSets.get(queOpen[ql-1]) != s[0]) {
        return false;
      } else {
        s = s.slice(1);
        queOpen = queOpen.slice(0,-1);
      }    
    }
  }
  if (queOpen.length === 0) {
    return true;
  } else {
    return false;
  }
};

