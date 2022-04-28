# 217. Contains Duplicate

## Problem
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
```dash
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
```

## Solution
simple hashtable.

```dash
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length === 1) {
    return false;
  }
  
  let nMap = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (nMap[nums[i]] >= 0) {
      return true;
    }
    nMap[nums[i]] = 0;
  }
  
  return false;    
};
```

**Time:** O(n)
**Space:** O(n)

Success:

Runtime: 91 ms, faster than 82.84% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 51.4 MB, less than 32.70% of JavaScript online submissions for Contains Duplicate.

