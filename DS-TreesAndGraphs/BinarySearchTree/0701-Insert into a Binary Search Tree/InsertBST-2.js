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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  let newNode = new TreeNode(val);
  if (!root) {
    return newNode;
  }
  
  // while loop
  var currentRoot = root;
  while (currentRoot !== null) {
    if (currentRoot.val < val) { // insert at right
      if (currentRoot.right) {
        currentRoot = currentRoot.right;
      } else {
        currentRoot.right = newNode;
        break;
      }
    }
    else if (currentRoot.val > val) { // insert left
      if (currentRoot.left) {
        currentRoot = currentRoot.left;
      } else {
        currentRoot.left = newNode;
        break;
      }
    }
  }

  return root;
};

