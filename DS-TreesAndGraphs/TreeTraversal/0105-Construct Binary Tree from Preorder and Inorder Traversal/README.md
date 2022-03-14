# 105 Construct Binary Tree from Preorder and Inorder Traversal

## Problem
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
```dash
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

## Solution
1. left preIndex+1
   leftLen inIndex - start
   right preIndex+leftLen+1 

Success:
Runtime: 88 ms, faster than 89.78% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
Memory Usage: 45.1 MB, less than 65.60% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.

2. use Slice



