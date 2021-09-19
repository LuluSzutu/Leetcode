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
    
    if (nums[len-1] < target) {
        return len;
    }
    
    let min = 0;
    let max = len-1;
        
    while (min < max) {
        console.log(min,max)
        mid = Math.floor((min+max)/2);
        console.log(mid)
        if (nums[mid] < target) {
            if (nums[mid+1] > target) {
                return mid+1;
            }
            min = mid +1;
        } else if (nums[mid] > target) {
            if (nums[mid-1] < target) {
                return mid;
            }
            max = mid - 1;
        } else {
            return mid;
        }
    } 
    
    return min;
};

