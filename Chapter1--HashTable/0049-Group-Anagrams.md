# 49. Group Anagrams

## Problem
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

```dash
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

## Solution
1. bruce force solution

```dash
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ans = [];

  while (strs.length > 0) {
    let len = strs.length;
    let cstr = strs[0];
    
    for (let i = 0; i < ans.length; i++) {
      let st = ans[i][0];
      // check whether is anagram. 
      if (isAnagram(st, cstr)) {
        ans[i].push(cstr);
        // remove the checked string from strs. 
        strs.shift(1);
        break;
      }
    }
    
    // if strs didn't change after checking the anagram
    if (len === strs.length) {
      let carr = [cstr];
      ans.push(carr);   
      strs.shift();
    } 
    
    //console.log(ans, strs);
  }
  
  return ans;    
};

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  
  for (let i = 0; i < str1.length; i++) {
    let c = str1[i];
    let ind = str2.indexOf(c);
    if (ind < 0) { // cannot find
      return false;
    }
    // remove s from str2.
    str2 = str2.slice(0,ind) + str2.slice(ind+1,str2.length);
  }
  
  return true;
}
```

**Time:** O(n^2*m) // n for while loop, n for answer array, m for check anagram
**Space:** O(n)  

Success:
Runtime: 686 ms, faster than 5.02% of JavaScript online submissions for Group Anagrams.
Memory Usage: 51.1 MB, less than 99.54% of JavaScript online submissions for Group Anagrams.

2. Use a Hashtable to store **Sorted** string, and use this one to check if anagram exist.

```dash
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // define output array
    const output = []
    // define map
    const map = {}
    // loop through strs
    for(let i = 0; i < strs.length; i++) {
       // sort current str
        const strSorted = strs[i].split('').sort().join('')
        // if sorted string is present in map
        if(map[strSorted]!==undefined) {
           // get index of output array to push current str
            output[map[strSorted]].push(strs[i])
        } else {
             // push current str into output array
            output.push([strs[i]])
            // add sorted str to map
            // set map[sorted str] = output array length - 1 
            map[strSorted] = output.length-1
        }

    }

    // return output array
    return output   
};
```

**Time:** O(n*mlog(m)) // using sort method, sort time complexity is log(m). 
**Space:** O(n) // hastable size n(sorted string) + n. 

Success: 
Runtime: 160 ms, faster than 68.70% of JavaScript online submissions for Group Anagrams.
Memory Usage: 53.1 MB, less than 72.26% of JavaScript online submissions for Group Anagrams.
