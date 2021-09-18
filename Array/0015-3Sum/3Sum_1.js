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
    
    // use map to store two sums 
    let twoSumMap = [];
    for (let i = 0; i < len-1; i++) {
        for (let j = i+1; j < len; j++) {
            twoSumMap.push([i,j,nums[i]+nums[j]]);
        }
    }
    
    // find three sum equal to 0
    for (let k = 0; k < len; k++) {
        var findValue = 0 - nums[k];
        twoSumMap.forEach((item) => {
            if (item[2] === findValue) {
                let indi = item[0];
                let indj = item[1];
                if (k != indi && k != indj) {
                  var arr = [nums[indi],nums[indj],nums[k]];
                  // remove duplicate triplets.
                  ans.forEach((item) => {
                    // compare value
                    if (arrayIdentical(item,arr)) {
                        arr = [];
                    }
                  })
                  if (arr.length > 0) {
                    ans.push(arr);
                  }
               }
            }
            
        });
    }
    
    return ans;    
};

function arrayIdentical(arr1,arr2) {
    var a = [...arr1];
    var b = [...arr2];
    
    a.sort();
    b.sort();
    for (let i = 0; i < arr1.length; i++) {
        if(a[i] != b[i]) {
            return false;
        }
    }
    return true;
}
