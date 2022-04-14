# 1. Two Sum

## Problem
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
```bash
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Solution
1. Use a Map (HashTable) to store checked element, loop through each element until find one in the Map equal to Target - CurrentElement.  

```dash
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} twoSum
 */
var twoSum = function(nums, target) {
  let comp = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

```
**Time:** O(n)
**Space:** O(n)

Success:
Runtime: 79 ms, beats 82.36% of javascript submissions.
Memory Usage: 43.1 MB, beats 29.50% of javascript submissions. 

2. HashTable + two pointers, can save some time, but not space.

```dash
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let val1 = nums[start];
    let val2 = nums[end];
    if (map.has(val1)) {
      return [map.get(val1),start];
    } else {
      map.set(target - val1,start);
      start++;
    }
    
    if (map.has(val2)) {
      return [map.get(val2),end];
    } else {
      map.set(target - val2, end);
      end--;
    }
  }
  return [];
};

```
**Time:** O(n/2) -> O(n)
**Space:** O(n)

Success:
Runtime: 59 ms, faster than 98.75% of JavaScript online submissions for Two Sum.
Memory Usage: 42.7 MB, less than 54.58% of JavaScript online submissions for Two Sum.




