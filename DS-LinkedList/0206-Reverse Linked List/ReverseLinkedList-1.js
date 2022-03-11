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
  let reverseHead = new ListNode;
  let curList = reverseHead;
  
  if (head === null) {
    return head;
  }
  let arr = [];
  while(head != null) {
    arr.push(head.val);
    head = head.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    curList.next = new ListNode(arr[i]);
    curList = curList.next;
  }
    
  return reverseHead.next;
};

