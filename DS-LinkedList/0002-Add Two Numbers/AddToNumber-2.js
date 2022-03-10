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
  let head = new ListNode(0);
  let curList = head;
  let carry = 0;
  
  addTwoNumber(l1, l2, carry, curList);
  return head.next;
};

function addTwoNumber(List1, List2, carry, curList) {
  if(List1 === null && List2 === null && carry === 0) {
    return;
  }
  let val1, val2;
  if(List1 === null) {
    val1 = 0;
  } else {
    val1 = List1.val;
    List1 = List1.next;
  }
  if (List2 === null) {
    val2 = 0;
  } else {
    val2 = List2.val;
    List2 = List2.next;
  }
  let sum = val1+val2+carry;
  let rem = sum%10;
  carry = parseInt(sum/10);
  curList.next = new ListNode(rem);
  
  addTwoNumber(List1,List2,carry, curList.next);
}

