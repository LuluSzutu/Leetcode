/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // convert to string
  xStr = x.toString();
  
  if (xStr.length === 1) {
    return true;
  }
  
  // sliding window
  let start = 0;
  let end = xStr.length - 1;
  while (start < end) {
    if (xStr[start] === xStr[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

