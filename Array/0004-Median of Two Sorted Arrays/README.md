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


