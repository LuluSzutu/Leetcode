# 125. Valid Palindrome

## Problem
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
```bash
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

## Solution

```dash
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // first remove all non-alphanumeric characters. 
    let true_str = "";
    for (let i = 0; i < s.length; i++) {
        if (isAlpha(s[i])) {
            let c = s[i].toLowerCase();
            true_str += c;
        } 
    }
    console.log(true_str);
    // second check whether the alphanumeric string is palindromic.
    if ( true_str.length % 2 === 0) {
        return isPalString(true_str, "even");
    } else {
        return isPalString(true_str, "odd");
    }
};

function isAlpha(char) {
    if( char.match(/^[A-Za-z0-9]*$/) ) {
        return true;
    } else {
        return false;
    }
}

function isPalString(str, mode) {
    let start, end;
    let center_ind = Math.floor(str.length / 2);
    if (mode === "odd") {
        start = end = center_ind;
    } 
    if (mode === "even") {
        start = center_ind - 1;
        end = center_ind;
    }

    while (start >= 0 && end < str.length) {
        if (str[start] != str[end]) {
            return false;
        }
        start--;
        end++;
    }

    return true;
}
```

**Time:** O(n)
**Space:** O(n)

Success:
Runtime: 100ms
Memory: 51.7MB


