/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let length1 = nums1.length;
    let length2 = nums2.length;
    
    if (length1 > length2) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    if (length1 === 0) {
        return medianOfArray(nums2);
    }
    
    let start = 0;
    let end = length1;
    let full_length = length1 + length2
    
    while(start < end) {
        // i+j = (length1 + length2 + 1 )/2
        let mid1 = Math.floor((start + end)/2);
        let mid2 = Math.floor((full_length + 1)/2) - mid1;
        console.log(mid1, mid2);
        console.log(nums1[mid1-1], nums1[mid1], nums2[mid2-1], nums2[mid2]);
        if ( (mid1 === 0 || mid2 === length2 || nums1[mid1-1] <= nums2[mid2]) && 
             (nums1[mid1] >= nums2[mid2-1] || mid1 === length1 || mid2 === 0) ) {
          console.log('here')
          // find i & j
          let left_max, right_min;
          if (mid1 === 0) {
              left_max = nums2[mid2-1];
          } else if (mid2 === 0) {
              left_max = nums1[mid1-1];
          } else {
              left_max = Math.max(nums1[mid1-1],nums2[mid2-1]);
          }
          if (mid1 === length1) {
              right_min = nums2[mid2];
          } else if (mid2 === length2) {
              right_min = nums1[mid1];
          } else {
              right_min = Math.min(nums1[mid1],nums2[mid2]);  
          }
          console.log(left_max,right_min);
          if (full_length%2 === 0) {
              // full length is even number
              return (left_max+right_min)/2;
          } else {
              // full length is odd number
              return left_max;
          }
        }
        else if (mid1 > 0 && mid2 < length2 && nums1[mid1-1] > nums2[mid2]) {
            // mid1 is too big, need to move left
            end = mid1 - 1;
        }
        else if (mid2 > 0 && mid1 < length1 && nums1[mid1] < nums2[mid2-1]) {
            // mid1 is too small, need to move right
            start = mid1 + 1;
        }
    }   
};

function medianOfArray(arr) {
    let len = arr.length;
    if (len%2 > 0) {
        // odd length
        let mid = Math.floor(len/2);
        return arr[mid];
    } else {
        // even length
        let mid = Math.floor(len/2);
        return (arr[mid] + arr[mid-1])/2
    }
}
