# 27.Remove Element

## Problem
val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## Solution

### Method1
Sort array, and then Swap the duplicated val to the end of array, then end--. 

Runtime: 84 ms, faster than 28.60% of JavaScript online submissions for Remove Element.
Memory Usage: 41.3 MB, less than 5.02% of JavaScript online submissions for Remove Element.


### Method2
Use filter

Runtime: 88 ms, faster than 26.21% of JavaScript online submissions for Remove Element.
Memory Usage: 41.1 MB, less than 5.02% of JavaScript online submissions for Remove Element.




