# 12. Integer to Roman

## Problem
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

```dash
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

## Solution
1. check each digit, compare with 4 and 5 and 9. 
Runtime: 224 ms, faster than 38.05% of JavaScript online submissions for Integer to Roman.
Memory Usage: 49.2 MB, less than 20.55% of JavaScript online submissions for Integer to Roman.

2. greedy algorithm. 
Keep minus the number in the integer-to-roman array until 0. 
Runtime: 203 ms, faster than 50.35% of JavaScript online submissions for Integer to Roman.
Memory Usage: 46.2 MB, less than 76.99% of JavaScript online submissions for Integer to Roman.
