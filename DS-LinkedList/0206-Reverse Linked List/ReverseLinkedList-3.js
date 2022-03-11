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
  var reverse = null;
  var temp = new ListNode;
  
  return recursion(temp, head,reverse);
};

function recursion(temp, head, reverse) {
  if (head === null) {
    return reverse;
  }
  temp = head.next;
  head.next = reverse;
  reverse = head;
  head = temp;
  return recursion(temp, head,reverse);
}

