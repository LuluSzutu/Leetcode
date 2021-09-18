# 4. 3Sum

## Problem

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
```dash
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```
## Solution
### Method1
Firt, put two sum into a Map (but in Javascript the Map key cannot be duplicated, so here I just use a 2D array [i,j,nums[i]+nums[j]].
Then, find the third number queal to 0 - [inMapValue]; check the index is not exist in the two sum Map, and check the result array is not duplicate. 

But this one give me a 'Time Limit Exceeded'. Someone can help me fix the time limit issue. I will be appreciate. 
The code is in 3Sum_1.js

### Method2
Use sorting and then two-pointer technique
```bash
       index start               end                          
    ---  ---  --- --- --- --- --- ---
   |   |    |    |   |   |   |   |   |
    ---  ---  --- --- --- --- --- ---
``` 

But, still, this one give me a 'Time Limit Exceeded'. 
The code is in 3Sum_2.js

### Method3
Make some changes for Method 2, skip duplicated numbers inside the while loop to avoid duplicate triplets. This one finally worked.  


