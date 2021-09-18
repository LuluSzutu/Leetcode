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
                var arr = [nums[start], nums[index], nums[end]];
                // check duplicate triplets
                ans.forEach((item) => {
                  if (arrayIdentical(item,arr)) {
                    arr = [];
                  }      
                });
                if (arr.length > 0) {
                    ans.push(arr);
                }
                start++;
                end--;
            }
        }
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

