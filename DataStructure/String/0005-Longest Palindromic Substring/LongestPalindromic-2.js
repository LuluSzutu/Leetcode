/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;  
  let maxlen = 0;
  let substring = "";
  let maxsub = "";
  let i = 0;
  
  // palindromic is get from center out. 
  // Should separate odd or even palindromic string
  while (i < len) {
    // for even palindromic string
    if (i+1 < len && s[i] === s[i+1]) {
      substring = findPalindromic(i,s,"even");
      if (substring.length > maxlen) {
        maxlen = substring.length;
        maxsub = substring.slice();
      }
    }
    substring = findPalindromic(i,s,"odd");
    if (substring.length > maxlen) {
      maxlen = substring.length;
      maxsub = substring.slice();
    } 
    i++;
  }
    
  return maxsub;
};

function findPalindromic(center, orgString, mode) {
  let palString = "";
  let len = orgString.length;
  let start = center;
  let end = center;
  if (mode == 'even') {
    end = center + 1;
  } 
  while (start >=0 && end <= len-1) {
    if (orgString[start] === orgString[end]) {
      palString = orgString.slice(start,end+1);
      start--;
      end++;
    } else {
      break;
    }
  }
  return palString;
}

