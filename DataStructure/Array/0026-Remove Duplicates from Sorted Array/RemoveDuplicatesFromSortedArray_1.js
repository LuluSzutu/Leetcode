/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) { 
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    

    for (let i = 0; i <= len-1; i++) {
        let j = i+1;
        while (j <= len -1) {
            if (nums[j] > nums[i]) {
              let temp = nums[i+1];
              nums[i+1] = nums[j];
              nums[j] = temp;
              break;
            }
            j++;
        }
    }
    
    let start = 1;
    while (nums[start] > nums[start-1]) {
        start++;
    }
    
    return start;  
};

