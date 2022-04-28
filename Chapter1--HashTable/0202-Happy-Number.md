# 202. Happy Number

## Problem
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:
```dash
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

## Solution
### 1. double for-loop, use hashtable to check repeated sum (endless sycle) 

```dash
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let loopMap = {};
  
  let ns = n.toString();  
  while (true) {
    let sum = 0;
    for (let i = 0; i < ns.length; i++) {
      sum += ns[i]*ns[i];
    }
    if (sum === 1) {
      // happy number
      return true;
    } 
    
    if (loopMap[sum] >= 0) {
      // will be an endlessly cycle
      return false;
    }
    loopMap[sum] = 0;
  
    ns = sum.toString();
  }
};
```

**Time:** 
**Space:** 

Success:

Runtime: 69 ms, faster than 83.82% of JavaScript online submissions for Happy Number.
Memory Usage: 44.6 MB, less than 21.05% of JavaScript online submissions for Happy Number.

### 2. use two pointers, slow and fast, they will meet if there has a cycle.

```dash
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    
    do {
        slow = squareSum(slow);
        fast = squareSum(squareSum(fast));
    } while (slow !== fast);
    
    return fast === 1;
};

var squareSum = function(n) {
    let sum = 0;
    while(n) {
        sum += (n % 10) * (n % 10);
        n = parseInt(n / 10);
    }
    return sum;
};
```
Success:

Runtime: 76 ms, faster than 71.31% of JavaScript online submissions for Happy Number.
Memory Usage: 42.5 MB, less than 90.54% of JavaScript online submissions for Happy Number.

