var intersection = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    if (len1 > len2) {
        return intersection(nums2,nums1);
    }
    
    // sort nums1 & nums2
    nums1.sort((a,b) => {
        return a-b;
    });
    nums2.sort((a,b) => {
        return a-b;
    })
    let numsT = [];
    for (let n = 0; n < len2; n++) {
        if (n > 0 && nums2[n] === nums2[n-1]) {
            continue;
        }
        numsT.push(nums2[n]);
    }
    
    // remove duplicate number
    console.log(nums1);
    console.log(numsT);
    
    let ans = [];
    for (let i = 0; i < len1; i++) {
        if (i > 0 && nums1[i] === nums1[i-1]) {
            continue;
        }
        let cn = nums1[i];
        let start = 0;
        let end = numsT.length-1;
        console.log(cn);
        while (start <= end) {
            let mid = Math.floor((start+end)/2);
            console.log(start,end, mid, numsT[mid]);
            if (cn > numsT[mid]) {
                start = mid+1;
            } else if(cn < numsT[mid]) {
                end = mid-1;
            } else {
                ans.push(cn);
                break;
            }
            console.log(start,end);
        }
    }
    
    return ans;
    
};

