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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  return recursionHelper(root,null);
};

function recursionHelper(root1,root2) {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    root2 = new TreeNode;
  }
  root2.val = root1.val;
  if (root1.right) {
    root2.left = new TreeNode;
    recursionHelper(root1.right,root2.left);
  }
  if (root1.left) {
    root2.right = new TreeNode;
    recursionHelper(root1.left,root2.right);
  }
  return root2;
}

