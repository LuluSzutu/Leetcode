<div align="center">
# Leetcode Handbook in Javascript
</div>
###  <center>A preparation guide for non-CS major student</center>
###   <center>LuLuSzutu</center>

<div style="page-break-after: always;"></div>

# Table of Contents
[Volume I Data Structures](#id-volume1)<br/>

[Chapter 1 Hash Tables](#id-chapter1)<br/>
[Chapter 2 Strings and Arrays](#id-chapter2)<br/>
[Chapter 3 Sets](#id-chapter3)<br/>
[Chapter 4 Stack and Queues](#id-chapter4)<br/>
[Chapter 5 Linked List](#id-chapter5)<br/>
[Chapter 6 Caching](#id-chapter6)<br/>
[Chapter 7 Trees](#id-chapter7)<br/>
[Chapter 8 Heaps](#id-chapter8)<br/>
[Chapter 9 Graphs](#id-chapter9)<br/>

[Volume II Algorithms](#id-volume2)<br/>

[Chapter 1 Bit Manipulation](#id-chapter11)<br/>
[Chapter 2 Math](#id-chapter12)<br/>
[Chapter 3 Searching](#id-chapter13)<br/>
[Chapter 4 Sorting](#id-chapter14)<br/>
[Chapter 5 Two Pointers](#id-chapter15)<br/>
[Chapter 6 Greedy Algorithms](#id-chapter16)<br/>
[Chapter 7 Divide and Conquer](#id-chapter17)<br/>
[Chapter 8 Dynamic Programming](#id-chapter18)<br/>

<div style="page-break-after: always;"></div>

## <center>Volume I Data Structures</center>

<div style="page-break-after: always;"></div>

<div id='id-chapter1'/>

### <center>Chapter 1 Hash Tables</center>

A hash table (often called a hash map) is a data structure that maps keys to values. Hash tables combine search, insert, and delete operations in an efficient way. 

 HASH TABLE TIME/SPACE COMPLEXITY IN BIG O NOTATION

| Operate      | Average    | Worst Case |
|--------------|:-----------|:------------|
| Insert | O(1)      | O(n)     |
| Delete | O(1)      | O(n)     |
| Search | O(1)      | O(n)     |
| Space  | O(n)      | O(n)     |

	
In Javascript, both `Object` and `Map` classes are hash tables. The differences between `Object` and `Map` are:

* The key in `Object` can only be "number, string and symbols". 
* The size of the Hash Table in `Object` is not tracked. You need to manually count how many properites are defined by the programmer. But `Map` has a `size()` function. 

#### Hash Tables vs. Trees
Hashing and trees perform similar jobs, but various factors in your program determine when to use one over the other.

Trees are more useful when an application needs to order data in a specific sequence. Hash tables are the smarter choice for randomly sorted data due to its key-value pair organization.

Hash tables can perform in constant time, while trees usually work in O(log n)
O(logn)
. In the worst-case scenario, the performance of hash tables can be as low as O(n)
O(n)
. An AVL tree, however, would maintain O(log n)
O(logn)
 in the worst case.

An efficient hash table requires a hash function to distribute keys. A tree is simpler, since it accesses extra space only when needed and does not require a hash function.

#### How to Implement a Hash Table Data Structure

Although JavaScript already has two Hash Table implementations, writing your own Hash Table implementation is one of the most common JavaScript interview questions. The performance of a hash table depends on three fundamental factors: hash function, size of the hash table, and collision handling method.

A **hash function** is a method or function that takes an item’s key as an input, assigns a specific index to that key and returns the index whenever the key is looked up. This operation usually returns the same hash for a given key -- that's called a collision. A good hash function should be efficient to compute and uniformly distribute keys. At the same time, it’s very important to make sure that our hashing function doesn’t produce a lot of collisions. 

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|   | 34| 24|   |   |   |   | 7 | *18* （move to here）|  |  |
|   |   |   |   |   |   |   | *18* |  |  |  |

Hash Table after using linear probing, key 18 has a collision with key 7, so we use the next avaible key to store key 18. 

Hash collision resolution techniques:

**A. Separate Chaining:** The idea is to make each cell of hash table point to a linked list of records that have same hash function value (collision).

Data Structures For Storing Chains: 

Linked lists:

* Search: O(l) where l = length of linked list
* Delete: O(l)
* Insert: O(l)
* Not cache friendly

Dynamic Sized Arrays ( Vectors in C++, ArrayList in Java, list in Python)

* Search: O(l) where l = length of array
* Delete: O(l)
* Insert: O(l)
* Cache friendly

Self Balancing BST ( AVL Trees, Red Black Trees)

* Search: O(log(l))
* Delete: O(log(l))
* Insert: O(l)
* Not cache friendly

**B. Probing:** 

a) *Linear Probing*: The linear probing technique resolves conflicts by finding the next available index via incremental trials.

b) *Quadratic Probing*: The quadratic probing uses quadratic functions to generate incremental trials.

```dash
h + (1)^2, h + (2)^2, h + (3)^2, h + (4)^2
h + 1, h + 4, h + 9, h + 16
```

c) *Double-Hashing*: Another great way to uniformly distribute the keys is by having a second hashing function that hashes the result from the original.
A commonly used second hasing function is as follows:

```dash
hash2(x) = R − (x % R)
Here, x is the result from hashing the first time, and R is less than the size of the hash table.
```

Here's the complete `HashTable` class code in javascript by using different hashing methods. 

**Hash Table with Linear Probing**:

```dash
// Implenting a hashtable with linear probing
//

function hashFunction(key, bucketSize) {
  return key % bucketSize;
}

class HashTable {
  constructor() {
    this.bucketSize = 20;
    this.keys = new Array(this.bucketSize);
    this.values = new Array(this.bucketSize);
    this.size = 0;    
  }

  put(key,value) {
    if (value === undefined) {
      throw 'value cannot be undefined';
      return;
    }
    let hashedKey = hashFunction(key, this.bucketSize);
    while (this.values[hashedKey] !== undefined) {
      // been taken, move to next availalbe
      hashedKey++;
      hashedKey = hashedKey % this.bucketSize;
    }
    this.keys[hashedKey] = key;
    this.values[hashedKey] = value;
    this.size++;
  }

  remove(key) {
    let hashedKey = hashFunction(key, this.bucketSize);
    while (this.keys[hashedKey] !== key) {
      // been taken, move to next availalbe
      hashedKey++;
      hashedKey = hashedKey % this.bucketSize;
    }
    if (this.values[hashedKey] === undefined) {
      // cannot find this key, return.
      return;
    }
    this.keys[hashedKey] = undefined;
    this.values[hashedKey] = undefined;
    this.size--;
  }

  find(key) {
    let hashedKey = hashFunction(key, this.bucketSize);
    while (this.keys[hashedKey] !== key) {
      // been taken, move to next availalbe
      hashedKey++;
      hashedKey = hashedKey % this.bucketSize;
    }
    if (this.values[hashedKey] === undefined) {
      // cannot find this key, return.
      return undefined;
    }
    return this.values[hashedKey];
  } 
}
```

**Hash Table with Double Hasing**:

```dash
// Implenting a hashtable using double hashing
//

function secondHashFunction(hashedkey, bucketSize) {
  var R = bucketSize - 2;
  return R - hashedKey % R;
}

function hashFunction(key, bucketSize) {
  return secondHashFunction(key % bucketSize);
}

class HashTable {
  constructor() {
    this.bucketSize = 20;
    this.keys = new Array(this.bucketSize);
    this.values = new Array(this.bucketSize);
    this.size = 0;    
  }

  put(key,value) {
    if (value === undefined) {
      throw 'value cannot be undefined';
      return;
    }
    let hashedKey = hashFunction(key, this.bucketSize);
    while (this.values[hashedKey] !== undefined) {
      // been taken, move to next availalbe
      hashedKey++;
      hashedKey = hashedKey % this.bucketSize;
    }
    this.keys[hashedKey] = key;
    this.values[hashedKey] = value;
    this.size++;
  }

  remove(key) {
  }
	
  find(key) {
  }
}
```

**Hash Table with Chaining**:

```dash
// Implenting a hashtable with chaining

function hashFunction(key, bucketSize) {
  return key % bucketSize;
}

class Node(key, value, next) {
  this.key = key
  this.value = value;
  this.next = next === undefined ? null : next;
}

class HashTable {
  constructor() {
    this.bucketSize = 20;
    this.table = new Array(this.bucketSize);
    this.size = 0;
  }

  put(key,value) {
    let hashedKey = hashFunction(key, this.bucketSize);
    if (this.talbe[hashedKey] !== undefined) {
      // been taken, add a node to linked list.
      let headNode = this.talbe[hashedKey];
      while (headNode.next != null) {
	headNode.next = headNode.next.next;
      }
      let newNode = new Node(key,value);
      headNode.next = newNode;
    }
    let newNode = new Node(key,value);
    this.table[hashedKey] = newNode;
    this.size++;
  }

  remove(key) {
    let hashedKey = hashFunction(key, this.bucketSize);
    if (this.talbe[hashedKey] === undefined) {
      // cannot find this key, return;
      throw 'cannot find this key';
      return false;
    }
    let head = this.talbe[hashedKey];
    let prev = head;
    while (head !== null) {
      if (head.key === key) {
	prev.next = head.next;
	this.size--;
	return true;
      }
      prev = head;
      head = head.next;
    }
    return false;
  }

  remove(node) {
  }

  find(key) {
    let hashedKey = hashFunction(key, this.bucketSize);
    if (this.talbe[hashedKey] === undefined) {
      // cannot find this key, return;
      throw 'cannot find this key';
      return false;
    }
    let head = this.talbe[hashedKey];
    let prev = head;
    while (head !== null) {
      if (head.key === key) {
	return true;
      }
      prev = head;
      head = head.next;
    }
    return false;
  }
}
```

#### Leetcode Exercises

| No.    | Title                                     | Discuss                                                                    | Solution                                                                                                                             | Leedcode Link                                                                           |
|--------|:------------------------------------------|:---------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------|
|  0706  | Design HashSet                            |                                                                            |                                                                                                                                      |
|  0705  | Design HashMap                            |                                                                            |                                                                                                                                      |
|  0001  | Two Sum                                   | hash table + (two pointer)                                                 | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0001-Two-Sum.md)                                   | [Leetcode 1](https://leetcode.com/problems/two-sum/)                                    
|  0012  | Integer to Roman                          | greedy / hashtable                                                         | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0012-Integer-to-Roman.md)                          | [Leetcode 12](https://leetcode.com/problems/integer-to-roman/)                          
|  0013  | Roman to Integer                          | hashtable                                                                  | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0013-Roman-to-Integer.md)                          | [Leetcode 13](https://leetcode.com/problems/roman-to-integer/)                          |
|  0030  | Substring with Concatenation of All Words | use hashtable to record each word and the times it appear + sliding window | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0030-Substring-with-Concatenation-of-All-Words.md) | [Leetcode 30](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) |
|  0049  | Group Anagrams                            | use hashtable to store "sorted" string in order to check anagram           | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0049-Group-Anagrams.md)                            | [Leetcode 49](https://leetcode.com/problems/group-anagrams/)                            |
|  0128  | Longest Consecutive Sequence              | use hashtable as a dictionary / also can use Set                           | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0128-Longest-Consecutive-Sequence.md)              | [Leetcode 128](https://leetcode.com/problems/longest-consecutive-sequence/)             |
|  0149  | Longest Consecutive Sequence              | use hashtable as a dictionary / also can use Set                           | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/)                                                  | [Leetcode /)                                                                            |
|  0187  | Repeated DNA Sequences                    | hashtable + sliding window / two Sets is the fasted solution               | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0187-Repeated-DNA-Sequences.md)                    | [Leetcode 187](https://leetcode.com/problems/repeated-dna-sequences/)                   |
|  0202  | Happy Number                              | hashtable to check repeated sum                                            | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0202-Happy-Number.md)                              | [Leetcode 202](https://leetcode.com/problems/happy-number/)                             |
|  0205  | Isomorphic Strings                        | hashtable map s[i] to t[i]                                                 | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0205-Isomorphic-Strings.md)                        | [Leetcode 205](https://leetcode.com/problems/isomorphic-strings/)                       |
|  0217  | Contains Duplicate                        | hashtable                                                                  | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0217-Contains-Duplicate.md)                        | [Leetcode 217](https://leetcode.com/problems/contains-duplicate/)                       |
|  0219  | Contains Duplicate II                     | map key nums[i], value i                                                   | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0219-Contains-Duplicate-II.md)                     | [Leetcode 219](https://leetcode.com/problems/contains-duplicate-ii/)                    |
|  0242  | Valid Anagram                             | map key letter, value number_of_letter                                     | [JS solution](https://github.com/LuluSzutu/Leetcode/tree/main/Chapter1--HashTable/0242-Valid-Anagram.md)                             | [Leetcode 242](https://leetcode.com/problems/valid-anagram/)                            |
|  0290  |                                           |                                                                            |                                                                                                                                      |                                                                                         |
|  0299  |                                           |                                                                            |                                                                                                                                      |      
|  0020  |                                                                                   |

<div id='id-chapter2'/>

### <center>Chapter 2 Strings and Arrays </center>

#### 2.1 Strings

Basic Functions:

| Function   | Usage  | 
|--------|:--------|
|**charAt(index)** | A single character at index | 
|**substring(start,end)**|	Sub string from [start_index, ... end_index) | 
|**indexOf(str, start_index)** | Get index of the sub_string that start from the start_index  |
|**split(delimiter)**| Breaks a string into an array with specified delimiter |
|**replace(original, new)** | Replace original with new |

Common Interview Questions:


1. **Substring**
   Sliding window is the best algorithm can be used to solve substring problems. 
   
2. **Palindromic Substrings -- A string is palindromic if it reads the same forward and backward.**
   
   For palindromic substring questions, first we should think about using two-pointers, treat each character as the mid-character and check its both side neighbors to be identical. 

2. **String Permutation -- A permutation is a rearrangement of letters.**

    

3. **Anagram String -- An Anagram is a string formed by rearranging the letters.**

   For anagram string, 

3. 
4. **Isomorphic String -- **
5. 

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|0003| Longest Substring Without Repeating Characters | sliding window  |[JS solution](https://github.com/LuluSzutu/Leetcode/tree/main/Chapter2--StringsAndArrays/0003-Longest-Substring-Without-Repeating-Characters.md)| [Leetcode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
|0006| Zigzag Conversion | math |[JS solution](https://github.com/LuluSzutu/Leetcode/tree/main/Chapter2--StringsAndArrays/0006-Zigzag-Conversion.md) | [Leetcode 6](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
|0014| | | | |
|0017| | | | |
|0028|
||
|0005| Longest Palindromic Substring | two pointers |[JS solution](https://github.com/LuluSzutu/Leetcode/tree/main/Chapter2--StringsAndArrays/0005-Longest-Palindromic-Substring.md)  | [Leetcode 6](https://leetcode.com/problems/zigzag-conversion/) |
|0125| Valid Palindrome | two pointers |[JS solution](https://github.com/LuluSzutu/Leetcode/tree/main/Chapter2--StringsAndArrays/0125-Valid-Palindrome.md) | [Leetcode 125](https://leetcode.com/problems/valid-palindrome/) |
|0409| Longest Palindromic Substring | HashTable + math |[JS solution](https://github.com/LuluSzutu/Leetcode/tree/main/Chapter2--StringsAndArrays/0409-Longest-Palindrome.md)| [Leetcode 409](https://leetcode.com/problems/longest-palindrome/) |
|0647| Palindromic Substrings | two pointers |[JS solution](https://github.com/LuluSzutu/Leetcode/tree/main/Chapter2--StringsAndArrays/0647-Palindromic-Substrings.md)| [Leetcode 647](https://leetcode.com/problems/palindromic-substrings/) |
||
|0022|
||
|0049|
|0242|
||
|0205|
|0008|  |  | | [Leetcode 8](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |


	

#### 2.2. Arrays

Different from HastTable, arrays are inherently ordered, start with index 0. In Java, C++, arrays are fixed length, you need to define the size before using it; but in Javascript, the array grow as you append items. And in Javascipt, you can assign to an index that is larger then the current array lenth, which will automatically expend the current array. In some other languages, there have both array and list, but in Javascript, array and list are combined. 

Basic Functions:

| Function   | Usage  | Result | 
|--------|:--------|:--------|
|**concat(a,b,c)** |Add elements to arrray | return [array, a,b,c] |
|**slice(start,end)**|	Subarray | return [start_index, .... end_index) |
|**splice(start, num_of_elems_to_remove, elems_to_add)** | Adding or Removing Elements at Any Position | |
|**fill("a")**| Filling an Array with a specific value | return ["a", "a",.."a"] |
|**sort()** | Sorting Array  | |
|**reverse()** | Reverse Array | |
|**map( x => x * 10)**  | Array Transformation | return [100x1, 100x2,...]  |
|**filter(x => x > 100)** | Array Filtering | return array value over 100  |
|**reduce((a,b) => a += b)** | Array Accumulator | return sum of the array  |

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|0002|	Add Two Numbers	

<div id='id-chapter3'/>

### <center>Chapter 3 Sets</center>
A set is a group of unordered unique (no duplicate) elements.

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|0002|	Add Two Numbers	

<div id='id-chapter4'/>

### <center>Chapter 4 Stack and Queues</center>

#### Stack: LIFO (last-in first-out)
Insert to stack:   ``` push() ```

Delete: ``` pop() ```

#### Queue: FIFO (first-in first-out)
Insert to Queue:  ``` push() ```

Delete: ``` shift() ``` # Remove the element at zero indexes. 

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|0002|	Add Two Numbers	

<div id='id-chapter5'/>

### <center>Chapter 5 Linked List</center>
A linked list is a data structure in which each node points to another node. Each node include one data value, and  a prev and/or next pointer that point to another node. There are two types of linked lists -- singly linked list and doubly linked list. 
For all linked list questions, remember to check the null pointer and update the head and tail pointer if necessary. Using while-loop or recursion method to go through the linked list. 

#### 1. Singly linked list

```dash
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}
```

```dash
while(currentList.next) {

...
currentList = currentList.next;

# for deletion
currentList = currentList.next.next;
...

}
```

####2. Doubly linked list

```dash
function ListNode(val,prev,next,child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
};
```

#### Leetcode Exercises

| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|0002|	Add Two Numbers	
|0019| Remove Nth Node From End of Lis	
|0021| Merge Two Sorted Lists	
|0023|	Merge k Sorted Lists	
|0024|	Swap Nodes in Pairs	
|0025|	Reverse Nodes in k-Group	
|0061|	Rotate List	
|0082|	Remove Duplicates from Sorted List II
|0083| Remove Duplicates from Sorted Li
|0086|	Partition List	
|0092|	Reverse Linked List II	
|0109|	Convert Sorted List to Binary Search Tree
|0114| Flatten Binary Tree to Linked List
|0116|	Populating Next Right Pointers in Each Node
|0138|	Copy List with Random Pointer	
|0141|	Linked List Cycle	
|0142|	Linked List Cycle II	
|0143|	Reorder List	
|0147|	Insertion Sort List	
|0148|	Sort List	
|0160|	Intersection of Two Linked Lists	
|0203|	Remove Linked List Elements	
|0206|	Reverse Linked List	
|0234|	Palindrome Linked List	
|0237|	Delete Node in a Linked List	
|0328|	Odd Even Linked List	
|0382|	Linked List Random Node	
|0445|	Add Two Numbers II	

<div id='id-chapter6'/>

### <center>Chapter 6 Caching</center>

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|

<div id='id-chapter7'/>

### <center>Chapter 7 Trees</center>
#### Tree
A tree is a data structure has one root node and multiple child nodes, each child node has multiple sub-child nodes, and so on. 

```dash
function TreeNode(value) { 
  this.value = value; 
  this.children = [];
}
```
#### Binary Trees
A binary tree is a type of tree that has only two children nodes: left and right.

```dash
function BinaryTreeNode(value) {
  this.value = value; 
  this.left = null; 
  this.right = null;
}
```
#### Binary Search Trees
A binary search tree is a :

1. binary tree
2. the left child is smaller than the parent, and the right child is bigger than the parent 
3. the value not the same

#### Complete Binary Trees
A complete binary tree is a binary tree that every level of the tree is fully filled, except for the leaves level. 

#### Full Binary trees
A full binary tree is a binary tree that each node has either 0 or 2 children. 

#### Tree Traversal
•	Pre-order traversal: root->left->right

•	Post-order traversal: left->right->root

•	In-order traversal: left->root->right

•	Level-order traversal: breath-first-search, using queue and recursion

#### AVL Trees
#### Red-black Trees
#### Tries (Prefix Trees)

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|94|
|144|
|145|
|105|
|106|
|889|
|102|
|103|
|107|
|100|
|101|
|226|

Binary Search Tree

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|98|
|99|
|173|
|669|
|701|
|450|
|700|

<div id='id-chapter8'/>

### <center>Chapter 8 Heaps</center>

#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|

<div id='id-chapter9'/>

### <center>Chapter 9 Graphs</center>

1.	Directed/UnDirected Graph
2.	Adjacent List / Adjacent Matrix
In an undirected graph, an adjacency matrix will be symmetric. In a directed graph, it will not. 
3.	Graph Traversal:  BFS, DFS
Breadth-first search and depth-first search tend to be used in different scenarios. DFS is often preferred if we want to visit every node in the graph. Both will work just fine, but depth-first search is a bit simpler.
However, if we want to find the shortest path (or just any path) between two nodes, BFS is generally better. Consider representing all the friendships in the entire world in a graph and trying to find a path of friend


#### Leetcode Exercises
| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|

<div id='id-volume2'/>

## <center>Volume II Algorithms</center>

<div id='id-chapter11'/>

### <center>Chapter 1 Bit Manipulation</center>

<div id='id-chapter12'/>

### <center>Chapter 2 Math</center>

<div id='id-chapter13'/>

### <center>Chapter 3 Searching</center>

<div id='id-chapter14'/>

### <center>Chapter 4 Sorting</center>

<div id='id-chapter15'/>

### <center>Chapter 5 Two Pointers </center>

<div id='id-chapter16'/>

### <center>Chapter 6 Greedy Algorithms </center>

<div id='id-chapter17'/>

### <center>Chapter 7 Divide and Conquer</center>

<div id='id-chapter18'/>

### <center>Chapter 8 Dynamic Programming</center>


## <center>Volume III Appendix</center>










