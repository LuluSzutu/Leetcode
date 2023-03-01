# 3. Longest Substring Without Repeating Characters

## Problem
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
```bash
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## Solution
Sliding Window Algorithm

accumulate substring, find repeated character, restart the substring from the index of the first duplicated character plus 1. use Max keep tracking the longest substring.. 

```dash
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let substring = "";
  let maxLen = 0;
  
  for (let i = 0; i < s.length; i++) {
    let index = -1;
    index = substring.indexOf(s[i]);
    if (index > -1) {
      //find repreat
      substring = substring.slice(index+1);     
    }
    substring = substring + s[i];
    maxLen = Math.max(maxLen,substring.length);
  }
  return maxLen;
};
```
**Time:** O(n)
**Space:** O(n)

Success:
Runtime: 77 ms
Memory Usage: 47.5 MB


