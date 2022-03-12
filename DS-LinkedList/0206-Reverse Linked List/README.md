# 206 Reverse Linked List

## Problem
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
```dash
  1->2->3->4->5

  5->4->3->2->1

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```
## Solution

1. Use an Array

Success:
Runtime: 100 ms, faster than 41.44% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 43.6 MB, less than 67.88% of JavaScript online submissions for Reverse Linked List.

2. Only while loop, modify input head to cut the tail, and put it back before go to next loop.

Success:
Runtime: 72 ms, faster than 83.68% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44.2 MB, less than 50.19% of JavaScript online submissions for Reverse Linked List.

3. Use recursion

Success:
Runtime: 117 ms, faster than 21.49% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44.5 MB, less than 24.61% of JavaScript online submissions for Reverse Linked List.




