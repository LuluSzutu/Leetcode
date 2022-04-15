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

```dash
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let intMap = new Map();
  intMap.set(1, 'I');
  intMap.set(4, 'IV');
  intMap.set(5,'V');
  intMap.set(9,'IX');
  intMap.set(10,'X');
  intMap.set(40,'XL');
  intMap.set(50,'L');
  intMap.set(90,'XC');
  intMap.set(100,'C');
  intMap.set(400,'CD');
  intMap.set(500,'D');
  intMap.set(900,'CM');
  intMap.set(1000,'M');
  
  let romanS = "";
  let intStr = num.toString();
  let intArr = [];
  let len = intStr.length;
  let d = len;
  for (let i = 0; i < len; i++) {
    let s = intStr[i];
    let si = parseInt(s);
    d--;
    if (d === 3) {
      for (let j = 0; j < si; j++) {
        romanS = romanS + 'M';
      }      
    } else if (d === 2) {
      if (si < 4) {
        for (let j = 0; j < si; j++) {
          romanS = romanS + 'C';
        }
      } else if (si === 4) {
        romanS = romanS + 'CD';
      } else if (si === 5) {
        romanS = romanS + 'D';
      } else if (si > 5 && si < 9) {
        romanS = romanS + 'D';
        for (let l = 0; l < si-5; l++) {
          romanS = romanS + 'C';
        }
      } else if (si === 9) {
        romanS = romanS + 'CM';
      }  
    } else if (d === 1) {
      if (si < 4) {
        for (let j = 0; j < si; j++) {
          romanS = romanS + 'X';
        }
      } else if (si === 4) {
        romanS = romanS + 'XL';
      } else if (si === 5) {
        romanS = romanS + 'L';
      } else if (si > 5 && si < 9) {
        romanS = romanS + 'L';
        for (let l = 0; l < si-5; l++) {
          romanS = romanS + 'X';
        }
      } else if (si === 9) {
        romanS = romanS + 'XC';
      }    
    } else if (d === 0) {
      if (si < 4) {
        for (let j = 0; j < si; j++) {
          romanS = romanS + 'I';
        }
      } else if (si === 4) {
        romanS = romanS + 'IV';
      } else if (si === 5) {
        romanS = romanS + 'V';
      } else if (si > 5 && si < 9) {
        romanS = romanS + 'V';
        for (let l = 0; l < si-5; l++) {
          romanS = romanS + 'I';
        }
      } else if (si === 9) {
        romanS = romanS + 'IX';
      }      
    }
  }
  
  return romanS;
};
```
**Time:** O(n) number of the digits in the number
**Space:** O(1)

Success:
Runtime: 224 ms, faster than 38.05% of JavaScript online submissions for Integer to Roman.
Memory Usage: 49.2 MB, less than 20.55% of JavaScript online submissions for Integer to Roman.

2. greedy algorithm. 
Keep minus the number in the integer-to-roman array until 0. 

```dash
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = '';
  let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV','I'];
  
  while (num != 0) {
    let i = 0;
    while (num - value[i] < 0) {
      i++;
    }
    num -= value[i];
    result += symbol[i];
  }
  
  return result;
};
```
**Time:** O(n) number of the digits in the number
**Space:** O(1)

Success:
Runtime: 203 ms, faster than 50.35% of JavaScript online submissions for Integer to Roman.
Memory Usage: 46.2 MB, less than 76.99% of JavaScript online submissions for Integer to Roman.

3. using hashtable store the number and symbole pair. Loop through the map, divide the key and append the Roman symbol repeatly, continue do it for the remains, until go through all the key-value paire in the hashtable. 

```dash
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let intMap = new Map();
  intMap.set(1000,'M');
  intMap.set(900,'CM');
  intMap.set(500,'D');
  intMap.set(400,'CD');
  intMap.set(100,'C');
  intMap.set(90,'XC');
  intMap.set(50,'L');
  intMap.set(40,'XL');
  intMap.set(10,'X');
  intMap.set(9,'IX');
  intMap.set(5,'V');
  intMap.set(4, 'IV');
  intMap.set(1, 'I');
  
  let result = '';
  intMap.forEach((value, key) => {
    let n = Math.floor(num/key);
    if ( n !== 0) {
      for (let i = 0; i < n; i++) {
        result += intMap.get(key);  
      }
    }
    num = num % key;
  });
  
  return result;
};
```

**Time:** O(n) number of the digits in the number
**Space:** O(1)

Success:
Runtime: 110 ms, faster than 96.39% of JavaScript online submissions for Integer to Roman.
Memory Usage: 49.5 MB, less than 25.15% of JavaScript online submissions for Integer to Roman.



