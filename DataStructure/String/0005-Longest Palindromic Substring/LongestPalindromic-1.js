/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;  
  let maxlen = 0;
  let substring = "";
  let maxsub = "";
   
  for (let i = 0; i < len; i++) {
    last = len-1;
    while (i <= last) {
      substring = s.slice(i, last+1);
      if (checkPalindromic(substring)) {
        if (substring.length > maxlen) {
          maxlen = substring.length;
          maxsub = substring.slice();
        }
      }
      last--;
    }
  }
  return maxsub;
};
  
function checkPalindromic(str) {
  let start = 0;
  let end = str.length - 1;
  
  if (start === end) {
    return true;
  }
  
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;        
    } else {
      return false;
    }
  }
  return true; 
}

