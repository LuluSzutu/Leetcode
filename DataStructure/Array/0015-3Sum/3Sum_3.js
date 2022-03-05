/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var ans = [];
    
    let len = nums.length;
    
    if (len <= 2) {
        return ans;
    }
    
    if (len === 3) {
        if (nums[0]+nums[1]+nums[2] === 0) {
            return [nums];
        } else {
            return ans;
        }
    }
    // sort 
    nums.sort((a,b) => {
        return a-b;
    })

    // use Two Pointers
    for (let index = 0; index < len-2; index++) {
        var start = index+1;
        var end = len-1;

        while(start < end) {
            var addNum = nums[start] + nums[index] + nums[end];
            if (addNum > 0) {
                end--;
            } else if (addNum < 0) {
                start++;
            } else { // addNum === 0
                ans.push([nums[index], nums[start], nums[end]]);

                while (start < len - 1 && nums[start] === nums[start+1]) {
                  start++;
                }
                while (nums[end] === nums[end-1]) {
                  end--;
                }
                start++;
                end--;
            }
        }
        while (nums[index] === nums[index+1]) {
            index++;
        }
    }
    
    return ans;    
};
