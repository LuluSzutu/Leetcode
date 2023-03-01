# 409. Longest Palindrome

## Problem
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
```bash
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
```

## Solution
Find the number of all the paired characters. If the string length longer than all the paired characters, that means there exist a single character can be used as the mid-character for the longest palindromic string. 

```dash
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let max_pal_len = 0;
    let c_map = new Map();
    // find all palindrome string for each charater as the mid-character. 
    for (let i = 0; i < s.length; i++) {
        c = s[i];
        if (c_map.has(c)) {
            let n = c_map.get(c);
            n += 1;
            c_map.set(c, n);
            if ( n % 2 == 0 ) {
                max_pal_len = max_pal_len + 2;
            }   
        } else {
            c_map.set(c, 1);
        }
    }
    return s.length > max_pal_len ? max_pal_len + 1 : max_pal_len;
};
```
**Time:** O(n)
**Space:** O(n)

Success:
Runtime: 67ms
Memory: 41.7MB
