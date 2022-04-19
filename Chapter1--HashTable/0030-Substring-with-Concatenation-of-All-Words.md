# 30. Substring with Concatenation of All Words

## Problem

You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

Example 1:

```dash
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
```

## Solution
First loop, put words into a Hashtable, to record each word and the times each word appear. 
Second loop, sliding window to get each substring (length equal to the length of all words together), create a current Hasttable to record the word and the times of each word appear. Compare the **Current Hashtable** with the **Words Hashtable**, if they match, record the first index of the substring. 

```dash
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  // create map for store the words. 
  let wordsMap = new Map();
  for (let w = 0; w < words.length; w++) {
    if (wordsMap.has(words[w])) {
      wordsMap.set(words[w], wordsMap.get(words[w]) + 1);
    } else {
      wordsMap.set(words[w], 0);
    }
  }
  
  let wordLen = words[0].length;
  let wordsLen = words.length * wordLen;
  
  let ans = [];
  
  // sliding window
  for (let i = 0; i < s.length - wordsLen + 1; i++) {  
    let subString = s.slice(i,i+wordsLen);
    
    let start = 0;
    let end = wordsLen;
    let currMap = new Map();
    while (start < end) {
      let ssub = subString.slice(start, start + wordLen);
      if (wordsMap.has(ssub)) {
        if (currMap.has(ssub)) {
          currMap.set(ssub, currMap.get(ssub) + 1);
        } else {
          currMap.set(ssub, 0);
        } 
        start = start + wordLen;
      } else {
        break;
      }
    }
    
    // compare wordsMap with currMap.
    if (currMap.size > 0) {
      if (compareTwoMap(wordsMap,currMap)) {
        console.log(wordsMap,currMap);
        ans.push(i);
      }
    }
  }
  
  return ans;
};

function compareTwoMap(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  
  for (var [key, value] of map1) {
    let value2 = map2.get(key);
    if (value !== value2) {
      return false;
    }
  }
  
  return true;
}
```
**Time:** O(nm) Note: m is the length of words, n is the length of string. 
**Space:** O(m) Note: use two maps, one dynamic--m, one static--m. 

Success:
Runtime: 346 ms, faster than 71.23% of JavaScript online submissions for Substring with Concatenation of All Words.
Memory Usage: 49.5 MB, less than 77.17% of JavaScript online submissions for Substring with Concatenation of All Words.

