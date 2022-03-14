/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let tree = null;
  return recursionHelper(postorder,0,postorder.length-1,inorder,0,inorder.length-1,tree);
};

function recursionHelper(postorder,pstart,pend,inorder,instart,inend,tree) {
  if (pstart > pend) {
    return null;
  }
  let val = postorder[pend];
  let index = inorder.indexOf(val);
  tree = new TreeNode;
  tree.val = val;
  let leftLen = index - instart; 
  if (index > instart) {
    tree.left = recursionHelper(postorder, pstart, pstart+leftLen-1,inorder, instart, index-1,tree);
  }
  if (index < inend) {
    tree.right = recursionHelper(postorder, pstart+leftLen, pend-1,inorder, index+1, inend, tree);
  }

  return tree;
}

