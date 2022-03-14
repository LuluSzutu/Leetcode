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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  let tree = null;
  return recursionHelper(preorder,0,preorder.length-1,postorder,0,postorder.length-1,tree);
};

function recursionHelper(preorder,preStart,preEnd,postorder,postStart,postEnd,tree) {
  if (preStart > preEnd) {
    return null;
  }
  tree = new TreeNode(preorder[preStart]);
  if (preStart === preEnd) {
    return tree;
  }
  
  let val = preorder[preStart+1];
  let index = postorder.indexOf(val);
  let leftLen = index - postStart + 1;
  
  tree.left = recursionHelper(preorder,preStart+1,preStart+leftLen,postorder,postStart,index,tree);
  tree.right = recursionHelper(preorder,preStart+leftLen+1,preEnd,postorder,index+1, postEnd-1,tree);
  
  return tree;
}


