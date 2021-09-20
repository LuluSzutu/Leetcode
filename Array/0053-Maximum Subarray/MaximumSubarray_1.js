/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
  if (nums.length < 1) return 0;

  let global_max = nums[0];
  let local_max = 0;

  for (let i = 0; i < nums.length; i++) {
    local_max = Math.max(local_max+nums[i], nums[i]);
    global_max = Math.max(global_max,local_max)
  }

  return global_max;
    
};
