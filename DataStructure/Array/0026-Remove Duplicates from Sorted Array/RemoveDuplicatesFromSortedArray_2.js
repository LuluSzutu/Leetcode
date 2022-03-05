/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) { 
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    
    let i = 0;
    let last = 0;
    while (i < len) {
        let j = last+1;
        while (j <= len -1) {
            if (nums[j] > nums[i]) {
              nums[i+1] = nums[j];
              last = j;
              break;
            }
            j++;
        }
        i++;
    }
    
    let start = 1;
    while (nums[start] > nums[start-1]) {
        start++;
    }
    
    return start;  
};

