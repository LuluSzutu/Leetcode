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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  return recursionDelete(root,key); 
};

function recursionDelete(root,key) {
  if (!root) {
    return root;
  }

  if (root.val < key && root.right) { // find in right
    root.right = recursionDelete (root.right,key);
  } else if (root.val < key && !root.right) { // cannot find it
    return root;
  } else if (root.val > key && root.left) { // find in left
    root.left = recursionDelete(root.left,key);
  } else if (root.val > key && !root.left) { // cannot find it
    return root;
  } else if (root.val === key && root.left && root.right) { // find it, both has children
    //rotat left
    let temp = findMin(root.right);
    root.val = temp.val;
    root.right = recursionDelete(root.right, temp.val);
    return root;
  } else if (root.val === key && root.left) {
    root = root.left;
    return root;
    
  } else if (root.val === key && root.right) {
    root = root.right;
    return root;    
  } else { // leaf node
    return null;
  }
  
  return root;
}

function findMin(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}

