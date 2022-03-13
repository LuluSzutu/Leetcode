/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let len = s.length;
  let ind = 0;
  return rsRecursion (ind, len, s);  
};

function rsRecursion (ind, len, s) {
  if (ind >= len - 1) {
    return s;
  }
  let temp = s[len-1];
  s.splice(len-1,1);
  s.splice(ind,0,temp);
  ind++;
  return rsRecursion(ind,len, s);
}

