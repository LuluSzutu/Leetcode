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
two pointer checking whether is palindromic.
go through all sting, find all palindromic substring, compare size. 

Runtime: 9201 ms, faster than 5.01% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 48.9 MB, less than 27.34% of JavaScript online submissions for Longest Palindromic Substring.

## Solution 2
from center out, check whether palindromic substing exit, find max length.
Here need to separate odd or even palindromic substring, and need to check both possiblilty. 
Because string like "ccc" exist. 

Runtime: 235 ms, faster than 47.00% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 50.2 MB, less than 17.89% of JavaScript online submissions for Longest Palindromic Substring.

Much better than solution number 1.


