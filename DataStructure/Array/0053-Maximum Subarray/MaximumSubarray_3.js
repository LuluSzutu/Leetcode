/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  let len = nums.length;
  if (len < 1) return 0;

  if(len == 1) return nums[0];
    
  return find_maximum_subarray(nums,0,len-1);    
};

function find_maximum_subarray(arr,low,high) {
    if (low === high) {
        return arr[low];
    } else {
      let mid = parseInt((low + high)/2);
      let max_left = find_maximum_subarray(arr,low,mid);
      let max_right = find_maximum_subarray(arr,mid+1,high);
      let max_cross = find_max_crossing_subarray(arr,low,mid,high);
      console.log(max_left,max_right,max_cross);
      return Math.max(max_left,max_right,max_cross);
    }
}

function find_max_crossing_subarray(arr,low,mid,high) {
    let left_max = Number.MIN_SAFE_INTEGER
    let right_max = Number.MIN_SAFE_INTEGER
    let suml = 0;
    for (let i = mid; i >= low; i--) {
        suml += arr[i];
        if (suml > left_max) {
            left_max = suml
        }
    }
    let sumr = 0;
    for (let i = mid+1; i <= high; i++) {
        sumr += arr[i];
        if (sumr > right_max) {
            right_max = sumr
        }
    }
    return Math.max(left_max,right_max,left_max+right_max)
}

