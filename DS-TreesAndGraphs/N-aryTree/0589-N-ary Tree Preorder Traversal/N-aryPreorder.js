/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  return recursionHelper(root,[]);
};

function recursionHelper(root, number) {
  if (!root) {
    return number;
  }
  
  let val = root.val;
  number.push(val);
  if (root.children) {
    for (let i = 0; i < root.children.length; i++) {
      recursionHelper(root.children[i],number);
    }
  }
  return number;
}

