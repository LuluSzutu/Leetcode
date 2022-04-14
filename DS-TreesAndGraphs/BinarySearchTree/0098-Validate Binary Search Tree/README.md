# 98 Validate Binary Search Tree

## Problem
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
```dash
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

## Solution
1. Recursion
Success:

Runtime: 133 ms, faster than 17.99% of JavaScript online submissions for Validate Binary Search Tree.
Memory Usage: 46.5 MB, less than 33.82% of JavaScript online submissions for Validate Binary Search Tree.


