# 205. Isomorphic Strings

## Problem
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
```dash
Input: s = "egg", t = "add"
Output: true
```

## Solution
Hashtable map s[i] to t[i], remember to check whether t[i] was appeared in the value of the map before. 

```dash
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length != t.length) {
    return false;
  }
  
  let replaceMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (replaceMap.has(s[i])) {
      if (t[i] != replaceMap.get(s[i])) {
        return false;
      }
    } else if (Array.from(replaceMap.values()).includes(t[i])) {
      // two characters in s cannot map to the same character in t. 
      return false
    } else {
      replaceMap.set(s[i],t[i]);
    }
  }
  
  return true;    
};
```

**Time:** O(n)
**Space:** O(n)

Success:

Runtime: 90 ms, faster than 63.53% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 43 MB, less than 64.24% of JavaScript online submissions for Isomorphic Strings.


