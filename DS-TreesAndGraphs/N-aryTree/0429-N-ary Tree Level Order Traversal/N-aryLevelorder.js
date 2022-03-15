/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let number = [];
  if (!root) {
    return number;
  }
  
  let queue = [];
  queue.push(root);
  
  while (queue.length > 0) {
    let inNumber = [];
    let len = queue.length;
    while (len > 0) {
      let temp = queue.shift();
      inNumber.push(temp.val);
      if (temp.children) {
        for (let i = 0; i < temp.children.length; i++) {
          queue.push(temp.children[i]);
        }
      }
      len--;
    }
    number.push(inNumber);    
  }
  
  return number;
};

