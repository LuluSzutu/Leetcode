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
 * @return {number[]}
 */
var inorderTraversal = function(root) {    
   return recursionHelper(root,[]);
};

function recursionHelper(root,number) {
  if (root === null) {
    return number;
  }
 if (root.left) {
    recursionHelper(root.left, number);
  }
  number.push(root.val);
  if (root.right) {
    recursionHelper(root.right, number);
  }
  return number;
}

