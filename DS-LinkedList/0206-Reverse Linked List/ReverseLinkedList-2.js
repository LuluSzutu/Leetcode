/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let resultPrev= null;
  let headNext = new ListNode;
  
  if (head === null) {
    return head;
  }

  while(head != null) {
    headNext = head.next; //remaining head tail
    head.next = resultPrev; //change the tail to existing prev, leave the first one.
    resultPrev = head; // re-refesh the prev
    head = headNext; // reset the head by removing the first node.    
  }
    
  return resultPrev;
};

