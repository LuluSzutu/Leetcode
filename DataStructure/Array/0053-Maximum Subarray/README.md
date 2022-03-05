# 53.Maximum Subarray

## Problem
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:
```dash
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```
## Solution
### Method 1
Kadane
Local maximum equal to sum of the subarray+nums[i] or nums[i], which one is bigger. 
Global maximum is the maximum one in all local maximus subarries. 

Runtime: 80 ms, faster than 68.07% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 40.3 MB, less than 48.49% of JavaScript online submissions for Maximum Subarray.

### Method 2
The problem of finding maximum subarray is that there has integers less than 0. If the sum of subarray less than 0, this wouldn't be the answer, so we calculate the sum again start from the last element.

Runtime: 95 ms, faster than 37.14% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 40.1 MB, less than 62.46% of JavaScript online submissions for Maximum Subarray. 

### Method 3
Divide-and-Conquer
Divide the problem into maximum subarray in left or maximum subarray in right, or cross middle. 

Find-Maximum-Subarray(A,low,high)
  mid = (low+high)/2
  Find-Maximum-Subarray(A,low,mid)
  Find-Maximum-Subarray(A,mid,high)
  Find-Max-cross-Subarray(A,low,mid,high)
return Max(3 ansers);

Runtime: 280 ms, faster than 6.18% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 47 MB, less than 6.08% of JavaScript online submissions for Maximum Subarray.






