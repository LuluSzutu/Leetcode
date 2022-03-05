/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let len = nums.length;
    
    if (len === 3) {
        return nums[0]+nums[1]+nums[2];
    }
    
    nums.sort((a,b) => {
        return a-b;
    })
    
    let res = nums[0]+nums[1]+nums[2];
    let min = Math.abs(res-target);
    
    for (let ind = 0; ind < len-2; ind++) {
      let end = len-1;
      let start = ind+1;
      while (start < end) {
          let sum = nums[ind] + nums[start] + nums[end];
          if (sum > target) {
              end--;
          } 
          else if (sum < target) {
              start++;
          } 
          else // sum == target 
          {
              return sum;
          }
          let dif = Math.abs(sum - target);
          if (dif < min) {
              min = dif;
              res = sum;
          }        
      }        
    }
    return res;
};

