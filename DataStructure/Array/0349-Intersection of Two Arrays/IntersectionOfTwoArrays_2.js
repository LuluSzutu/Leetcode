var intersection = function(nums1, nums2) {    
    // sort nums1 & nums2
    nums1.sort((a,b) => {
        return a-b;
    });
    nums2.sort((a,b) => {
        return a-b;
    })
   
    // Use hash map
    let hashmap = {};
    
    for (let i = 0; i < nums1.length; i++) {
        if (i > 0 && nums1[i] === nums1[i-1] ) {
            continue;
        }
        let curElement = nums1[i];
        if (! hashmap[curElement]) {
            hashmap[curElement] = 1;
        } else {
            hashmap[curElement]++;
        }
    }
    
    for (let j = 0; j < nums2.length; j++) {
        if (j > 0 && nums2[j] === nums2[j-1] ) {
            continue;
        }
        let curElement = nums2[j];
        if (! hashmap[curElement]) {
            hashmap[curElement] = 1;
        } else {
            hashmap[curElement]++;
        }      
    }   
    
    // Iterate through hashmap
    let ans = [];
    for (var prop in hashmap) {
        if (hashmap[prop] == 2) {
            ans.push(prop);
        }
    }
    
    return ans;    
};

