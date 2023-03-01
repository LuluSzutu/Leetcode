# 5. Longest Palindromic Substring

## Problem
Given a string s, return the longest palindromic substring in s.

Example 1:

```dash
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

## Solution
1. two pointer checking whether is palindromic. go through all sting, find all palindromic substring, compare size. 

```dash
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
```

Success:
Runtime: 9201 ms, faster than 5.01% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 48.9 MB, less than 27.34% of JavaScript online submissions for Longest Palindromic Substring.

2. from center out, check whether palindromic substing exit, find max length.
Here need to separate odd or even palindromic substring, and need to check both possiblilty. 
Because string like "ccc" exist. 

```dash
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest_pal_str = "";
    for (let i = 0; i < s.length; i++) {
        let pal_str;
        let pal_odd = findPalindrome(i, s, "odd");
        let pal_even = findPalindrome(i, s, "even" );
        if (pal_odd.length > pal_even.length) {
            pal_str = pal_odd;
        } else {
            pal_str = pal_even;
        }

        if (pal_str.length > longest_pal_str.length) {
            longest_pal_str = pal_str;
        }
    }
    return longest_pal_str;  
};

function findPalindrome(center_ind, str, mode) {
    let palStr = "";
    let len = str.length;
    let start, end;
    if (mode === "odd") {
        start = end = center_ind;
    } else if (mode === "even") {
        start = center_ind;
        end = center_ind + 1;
    }

    while (start >= 0 && end <= len) {
        if (str[start] == str[end]) {
            palStr = str.slice(start, end+1);
            start--;
            end++;
        } else {
            break;
        }
    }

    return palStr;
}

```

Success:
Runtime: 133 ms, faster than 47.00% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 50.1 MB, less than 17.89% of JavaScript online submissions for Longest Palindromic Substring.

Much better than solution number 1.
