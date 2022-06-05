/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substring = "";
    let maxLen = 0;
    
    let len = s.length;
    for (let i = 0; i < len; i++) {
      let char = s[i];
      let ind = substring.indexOf(char);
      if (ind != -1) {
        substring = substring.slice(ind+1);
      }
      substring = substring + char;
      maxLen = Math.max(maxLen, substring.length);
    }
  return maxLen;
};
