/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let obj = nums.filter((num) => num !== val);
    for (let i = 0; i < obj.length; i++) {
        nums[i] = obj[i]
    }
    console.log(nums, typeof(nums))
    return obj.length;
    
};

