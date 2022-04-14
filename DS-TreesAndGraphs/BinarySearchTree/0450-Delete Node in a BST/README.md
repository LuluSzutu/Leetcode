# 450 Delete Node in a BST

## Problem
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.

Example 1:
```dash
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
```

## Solution
1. Recursion 
Success:
Runtime: 141 ms, faster than 52.25% of JavaScript online submissions for Delete Node in a BST.
Memory Usage: 51 MB, less than 36.19% of JavaScript online submissions for Delete Node in a BST.

2. While-loop

