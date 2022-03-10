/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode;
 
  let preCarry = 0; 
  var thisResult = head;
  while (l1 != null || l2 != null || preCarry != 0) {
    let val1, val2;
    if (l1 === null) {
      val1 = 0;
    } else {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2 === null) {
      val2 = 0;
    } else {
      val2 = l2.val;
      l2 = l2.next;
    }

    let sum = val1 + val2 + preCarry;
    let rem = sum%10;
    let carry = parseInt(sum/10);
    preCarry = carry;
    thisResult.next = new ListNode(rem);
    thisResult = thisResult.next;
  }
  
  return head.next;
};

