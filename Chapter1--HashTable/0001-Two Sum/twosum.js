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
