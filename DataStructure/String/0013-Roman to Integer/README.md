#13 Roman to Integer

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
Given a roman numeral, convert it to an integer.

## Solution
```dash
  let rMap = new Map();
  rMap.set('I',1);
  rMap.set('V',5);
  rMap.set('X',10);
  rMap.set('L',50);
  rMap.set('C',100);
  rMap.set('D',500);
  rMap.set('M',1000);
  rMap.set('IV', 4);
  rMap.set('IX', 9);
  rMap.set('XL', 40);
  rMap.set('XC', 90);
  rMap.set('CD', 400);
  rMap.set('CM', 900);
```
Runtime: 227 ms, faster than 39.59% of JavaScript online submissions for Roman to Integer.
Memory Usage: 50.2 MB, less than 10.55% of JavaScript online submissions for Roman to Integer.


