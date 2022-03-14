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
var postorderTraversal = function(root) {
  return recursionHelper(root,[]);
};

function recursionHelper(root,number) {
  if (root === null) {
    return number;
  }
  let val = root.val;
  if (root.left) {
    recursionHelper(root.left,number);
  }
  if(root.right) {
    recursionHelper(root.right,number);
  }
  number.push(val);
  
  return number;
}

