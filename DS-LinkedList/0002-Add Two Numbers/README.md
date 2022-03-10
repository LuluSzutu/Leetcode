# 2 Add Two Numbers

## Problem
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example1:
```dash
  2->4->3
  5->6->4
Answer:
  7->0->8

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

## Solution
Linked List, but only use the ListNode, without the head.

```dash
class LinkedList {
  constructor (head = null) {
    this.head = head;
  }
}

class ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
```

1. Use While Loop

Success:
Runtime: 134 ms, faster than 69.64% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 47.7 MB, less than 22.51% of JavaScript online submissions for Add Two Numbers.

2. Use Recursion

Success:
Runtime: 120 ms, faster than 81.31% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 47.8 MB, less than 22.51% of JavaScript online submissions for Add Two Numbers.

The Runtime and Memory Usage are not too much better than the traditional while loop solution.

 
