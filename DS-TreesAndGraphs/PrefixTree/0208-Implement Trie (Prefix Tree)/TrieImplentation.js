function TrieNode(val) {
  this.children = {};
  this.end = false;
}

var Trie = function() {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  var current = this.root;
  for (let i = 0; i < word.length; i++) {
    var element = word[i];
    var currentNode = current.children[element];
    if (!currentNode) {
      // insert
      currentNode = new TrieNode();
      current.children[element] = currentNode;
    }
    current = currentNode;    
  }
  current.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  var current = this.root;
  for (let i = 0; i < word.length; i++) {
    var element = word[i];
    var currentNode = current.children[element];
    if (!currentNode) {
      return false;
    }
    current = currentNode;
  };

  if (current.end) {
    return true; 
  }
  return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  var current = this.root;
  for (let i = 0; i < prefix.length; i++) {
    var element = prefix[i];
    var currentNode = current.children[element];
    if (!currentNode) {
      return false;
    }
    current = currentNode;
  };
    
  return true;    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


