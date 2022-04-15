# 128. Longest Consecutive Sequence

## Problem

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

```dash
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

## Solution

1. Sort the array, loop through the sorted array, if nums[i]-nums[i-1] equal to 1, count++, otherwise re-count. 

```dash
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return 1;
  }
  
  // sort array
  nums.sort((a,b) => {
    return a-b;
  })
  //console.log(nums);
  
  let count = 1;
  let countArr = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i-1] === 0) {
      continue;
    }
    if (nums[i] - nums[i-1] === 1) {
      count++;
    } else {
      countArr.push(count);
      count = 1;
    }
  }
  countArr.push(count);
  
  //console.log(countArr);
  return Math.max(...countArr);
  
};
```
**Time:** O(nlogn) 

/* note: Many developers claim that JavaScript’s Array.sort method has a Big O complexity of O(nlogn), but in reality, it depends on the implementation the runtime has used. For instance, Firefox uses Merge Sort, so yes, O(nlogn) is correct as a usual execution complexity. However, the V8 runtime for instance (and thus Chrome, Node.js and even Deno), uses Timsort a mixture of Merge Sort and Insert sort that has a best-case scenario of O(n) which if you go back to the chart from above, it’s considerably better. */

**Space:** O(1)

Success:

Runtime: 105 ms, faster than 85.20% of JavaScript online submissions for Longest Consecutive Sequence.
Memory Usage: 47.5 MB, less than 98.99% of JavaScript online submissions for Longest Consecutive Sequence.

2. In the question, it says "You must write an algorithm that runs in O(n) time." So we need to find another solution not uing sort. We used a Map as a dictionary to store all the numbers, the second loop count local lenght for each consecutive number sequence, then find the max number. 

```dash
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return 1;
  }
  
  let numMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i],i);
  }
   
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // check wether number has +1 or -1 neighbor.
    if (numMap.has(nums[i]-1)) {
      continue;
    } 
    let localCount = 0; 
    let currValue = nums[i];
    while(numMap.has(currValue)) {
      localCount++;
      currValue++;
    }
    count = Math.max(count,localCount);
  }
  
  return count;  
};
```

**Time:** O(n) 
**Space:** O(n)

Success:

Runtime: 393 ms, faster than 44.63% of JavaScript online submissions for Longest Consecutive Sequence.
Memory Usage: 51.8 MB, less than 24.39% of JavaScript online submissions for Longest Consecutive Sequence.

3. Instead of using Hashtable, also can use Set to store all the numbers, so it can remove all the duplicated numbers. 

```dash
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Handle base case of empty array
    if (!nums.length) return 0;

    // Give ability to look up nums by value
    const set = new Set(nums);
    let max = 0;

    for (const num of set) {
        // Make sure we are starting at the beginning of the sequenece
        if (set.has(num - 1)) continue;

        let currNum = num;
        let currMax = 1;

        // Look numbers that make a consecutive sequence
        while (set.has(currNum + 1)) {
          currNum++;
          currMax++;
        }
        // Update max
        max = Math.max(max, currMax);
    }

    return max;
};
```
**Time:** O(n) 
**Space:** O(n)

Success:

Runtime: 89 ms, faster than 93.98% of JavaScript online submissions for Longest Consecutive Sequence.
Memory Usage: 50.4 MB, less than 67.47% of JavaScript online submissions for Longest Consecutive Sequence.



