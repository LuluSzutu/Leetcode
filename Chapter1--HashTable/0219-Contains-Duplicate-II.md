# 219. Contains Duplicate II

## Problem
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
```dash
Input: nums = [1,2,3,1], k = 3
Output: true
```

## Solution

```dash
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let iMap = new Map();
  
  for (let j = 0; j < nums.length; j++) {
    if (iMap.has(nums[j])) {
      let iInd = iMap.get(nums[j]);
      if (Math.abs(iInd - j) <= k) {
        return true;
      } else {
        iMap.set(nums[j], j);
      }
    } else {
      iMap.set(nums[j], j);
    }
  }
  
  return false;  
};
```

**Time:** O(n)
**Space:** O(n)


Success:

Runtime: 120 ms, faster than 84.59% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 67.1 MB, less than 22.96% of JavaScript online submissions for Contains Duplicate II.
