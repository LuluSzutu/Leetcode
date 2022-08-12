# 242. Valid Anagram

## Problem
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

```dash
Input: s = "anagram", t = "nagaram"
Output: true
```

## Solution

```dash
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    //hash table save letters and the times it appears in the string
    let letterMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        let curLetter = s[i];
        if (letterMap.has(curLetter)) {
            letterMap.set(curLetter, letterMap.get(curLetter) + 1);
        } else {
            letterMap.set(curLetter,1);
        }
    }
    
    // check string t
    for (let j = 0; j < t.length; j++) {
        let curLetter = t[j];
        if (letterMap.has(curLetter) && letterMap.get(curLetter) > 0) {
          letterMap.set(curLetter, letterMap.get(curLetter) - 1);            
        } else {
            return false;
        }
    }
    
    return true;
};
```

**Time:** O(n)
**Space:** O(n)


Success:

Runtime: 164 ms, faster than 17.62% of JavaScript online submissions for Valid Anagram.
Memory Usage: 42.2 MB, less than 97.68% of JavaScript online submissions for Valid Anagram.
