# 349.Intersection of Two Arrays

## Problem
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
```dash
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

## Solution

### Method1
Sort two arraies, remove duplicated numbers. Use binary search find each number from the shortest array in the other array. 

Runtime: 355 ms, faster than 5.18% of JavaScript online submissions for Intersection of Two Arrays.
Memory Usage: 47.6 MB, less than 5.13% of JavaScript online submissions for Intersection of Two Arrays.

### Method2
Sort two arraies. Use Hash table iterate through all arrays, set to 1 if current element didn't show up in the hash table, otherwise ++. 

Runtime: 84 ms, faster than 43.15% of JavaScript online submissions for Intersection of Two Arrays.
Memory Usage: 41.7 MB, less than 5.13% of JavaScript online submissions for Intersection of Two Arrays.



