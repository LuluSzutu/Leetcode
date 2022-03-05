# 54.Spiral Matrix

## Problem
Given an m x n matrix, return all elements of the matrix in spiral order.

   ------------
   1  | 2 | 3 |
   ------------
   4  | 5 | 6 |
   ------------
   7  | 8 | 9 |
   ----------- 

Example 1:
```dash
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```

## Solution
### Method1
Iterate from top, right, bottom, left until go through all matrix elements. 


Runtime: 111 ms, faster than 8.65% of JavaScript online submissions for Spiral Matrix.
Memory Usage: 38.3 MB, less than 88.46% of JavaScript online submissions for Spiral Matrix.


### Method2
Use recursive

Each recursion go through the outside of the matrix (go right, down, left, up), and remove the element from the matrix using SHIFT and POP structure, and run the left-over matrix again. 

Runtime: 79 ms, faster than 26.92% of JavaScript online submissions for Spiral Matrix.
Memory Usage: 38.2 MB, less than 88.49% of JavaScript online submissions for Spiral Matrix.
