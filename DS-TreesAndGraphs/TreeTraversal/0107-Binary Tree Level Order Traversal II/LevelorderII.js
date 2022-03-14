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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let tbNumber = [];
  let btNumber = [];
  
  if (!root) {
    return btNumber;
  }
  
  let queue = [];
  queue.push(root);
  
  while (queue.length) {
    let len = queue.length;
    let inNum = [];
    while (len > 0) {
      let temp = queue.shift();
      inNum.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
      len--;
    }
    tbNumber.push(inNum);
  }

  for (let i = tbNumber.length -1; i >= 0; i--) {
    btNumber.push(tbNumber[i]);
  }
  
  return btNumber;
};

