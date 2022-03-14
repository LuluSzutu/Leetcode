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
  return recursionHelper(root,[],0);
};

function recursionHelper(root,number,level) {
  if (root === null) {
    return number;
  }
  
  let val = root.val;
  if (number[level] === undefined) {
    number[level] = [];
  }
  number[level].push(val);
  
  if (root.left) {
    recursionHelper(root.left,number,level+1);
  }
  if (root.right) {
    recursionHelper(root.right,number,level+1);
  }
  
  return number;
}

