# 647. Palindromic Substrings

## Problem
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:
```dash
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```
Example 2:
```dash
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

## Solution

```dash
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    count_sub = 0;
    for (let i = 0; i < s.length; i++) {
        n_even = countPalindrome(i, s, "even");
        n_odd = countPalindrome(i, s, "odd");
        count_sub = count_sub + n_even + n_odd;
    }
    return count_sub;
};

function countPalindrome(center_ind, str, mode) {
    let start, end;
    let num_palstr = 0;
    if (mode === "odd") {
        start = end = center_ind;
    }
    if (mode === "even") {
        start = center_ind;
        end = center_ind + 1;
    }
    while (start >= 0 && end < str.length) {
        if (str[start] == str[end]) {
            num_palstr++;
        } else {
            break;
        }
        start--;
        end++;
    }
    return num_palstr;
}
```
**Time:** O(n)
**Space:** O(n)

Success:
Runtime: 88ms
Memory: 42.8 MB
