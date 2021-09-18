/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    
    // sort
    nums.sort((a,b) => {
        return a-b;
    })
    
    if (nums[len-1] < val) {
        return len;
    }
    
    if (nums[0] > val) {
        return len;
    }

    let end = len - 1;
    for (let i = 0; i < end; i++) {
        if (nums[i] === val) {
            let temp = nums[end];
            nums[end] = nums[i];
            nums[i] = temp;
            console.log(nums,end)
            end--;
        }            
    }
    
    return nums.indexOf(val);
};

