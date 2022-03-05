# 3. Longest Substring Without Repeating Characters

## Problem
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
```bash
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3
```

## Solution
Sliding Window Algorithm

accumulate substring, find repeated character, restart the substring from the index of the first duplicated character plus 1. use Max keep tracking the longest substring.. 

Runtime: 99 ms, faster than 87.64% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 47.1 MB, less than 48.34% of JavaScript online submissions for Longest Substring Without Repeating Characters. 


