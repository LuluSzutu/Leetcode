/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let tree = null;
  return recursionHelper(0, tree, preorder,inorder, 0, preorder.length);
};

function recursionHelper(pind, tree, preorder, inorder, start, end) {
  if (pind >= preorder.length || start > end) {
    return null;
  }
  let val = preorder[pind];
  let ind = inorder.indexOf(val);
  tree = new TreeNode;
  tree. val = val;
  if (ind > start) {
    tree.left = recursionHelper(pind+1,tree, preorder, inorder, start, ind-1);
  }
  console.log(pind,ind, start,end);
  if (ind < end) {
    tree.right = recursionHelper(pind+ind+1-start,tree, preorder,inorder,ind+1,end);
  }
  return tree;
}

