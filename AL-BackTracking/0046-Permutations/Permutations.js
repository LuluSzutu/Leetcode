/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // BackTracing
  let result = [];
  let temp = [];
  let used = new Array(nums.length).fill(false);
  
  function backTracing(nums,temp,used,result) {
    console.log(temp);
    if (temp.length === nums.length) {
      result.push([...temp]);
      console.log(result);
      temp = [];
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        temp.push(nums[i]);
        used[i] = true;
        backTracing(nums,temp,used,result);
        used[i] = false; // put the node back 
        temp.pop();
      }
    }         
  }
  
  backTracing(nums,temp,used, result);
  return result;
};


