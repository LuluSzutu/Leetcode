/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = "";
  
  let m = 0;
  let len1 = strs[0].length;
  let p0 = strs[0][m];
  while(isAllSame(strs,m,p0) && m < len1) {
    result += p0;
    m++;
    p0 = strs[0][m];
  }
  
  return result;
};

function isAllSame(strs,m,p) {
  for (let i = 1; i < strs.length; i++) {
    let pm = strs[i][m];
    if (pm != p) {
      return false;
    }
  }
  return true;
}

