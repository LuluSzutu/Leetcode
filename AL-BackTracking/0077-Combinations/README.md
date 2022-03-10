# 77 Combinations

## Problem
Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

Example 1:
``dash
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

## Solution
BackTracking and not re-do the start number.

Success:

Runtime: 123 ms, faster than 83.89% of JavaScript online submissions for Combinations.
Memory Usage: 48.6 MB, less than 39.86% of JavaScript online submissions for Combinations.

