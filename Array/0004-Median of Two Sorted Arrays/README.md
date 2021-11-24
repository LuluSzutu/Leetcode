# 4. Median of Two Sorted Arrays

## Problem
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
```bash
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

Example 2:
```bash
Input: nums1 = [], nums2 = [1]
Output: 1.00000
```

## Solution
Use binary search. Compare the mid and mid-1 elements of the two arrays. move the two middle lines until they are close enough to each other. Then, find the median from (mid1-1, mid1, mid2-1, mid2)

The mid1 and mid2 need to meet the following conditions:
  1. mid1 + mid2 = the median number of arryA + arrayB
  2. A(mid1-1) <= B(mid2)
  3. A(mid1) >= B(mid2-1)


```bash
                 mid1-1 mid1                          
    ---  ---  --- --- --- --- --- ---
   |   |    |    |   ||   |   |   |   |
    ---  ---  --- --- --- --- --- ---
  
                    mid2-1 mid2
    ---  ---  --- --- --- --- --- ---  ---  ---
   |   |    |    |   |   ||   |   |   |    |   |
    ---  ---  --- --- --- --- ---  ---  --- ---
```
  
When mid1 and mid2 have been found. Then the median will be:
  If m+n is even number, median = ( max(A(mid1-1), B(mid2-1)) + min(A(mid1),B(mid2)) )/2;
  If m+n is odd number, median = max(A(mid1-1), B(mid2-1));

Runtime: 145 ms, faster than 38.34% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 43.4 MB, less than 86.53% of JavaScript online submissions for Median of Two Sorted Arrays.

