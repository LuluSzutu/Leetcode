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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  
  return recursionSymmetric(root,root);  
};

function recursionSymmetric(root1,root2) {
  if (root1 === null && root2 === null) {
    return true;
  }
  
   if (root1 === null || root2 === null) {
    return false;
  }
  
  if (root1.val != root2.val) {
    return false;
  }
  
  return recursionSymmetric(root1.left,root2.right) && recursionSymmetric(root1.right,root2.left);
}

