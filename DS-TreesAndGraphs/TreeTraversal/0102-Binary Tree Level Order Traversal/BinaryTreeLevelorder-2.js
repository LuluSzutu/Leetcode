/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let number = [];
  let queue = [];
  let level = 0;
  if (root === null) {
    return number;
  }
  queue.push(root);
  
  while (queue.length) {
    let level = [];
    let len = queue.length;
    while(len) {
      let temp = queue.shift();
      level.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
      len--;
    }
    
    number.push(level);
  }
  
  return number;
};

