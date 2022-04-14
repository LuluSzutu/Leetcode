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
var isValidBST = function(root) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  return  isValidNode(root, min, max);
};

function isValidNode(root,min,max) {
  if (!root) {
    return true;
  }
  let thisVal = root.val;
  if (thisVal >= min) {
    return false;
  }
  if (thisVal <= max) {
    return false;
  }
   
  return isValidNode(root.left, thisVal, max) && isValidNode(root.right, min, thisVal);
}


