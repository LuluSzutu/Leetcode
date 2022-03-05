/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let len = nums.length;
    
    if (nums[0] >= target) {
        return 0;
    }
        
    for (let i = 1; i < len; i++) {
        if (nums[i] === target || (nums[i-1] < target && nums[i] > target)) {
            return i;
        }
    }
    
    return len;
};


