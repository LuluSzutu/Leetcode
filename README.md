# <center>Leetcode Handbook in Javascript</center>
###  A preparation guide for non-CS major student
###   LuLuSzutu
## <center>Volume I Data Structures</center>

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

| No.    | Title   | Discuss | Solution | Leedcode Link |
|--------|:--------|:--------|:-------|:-------|
|  0706  | Design HashSet |          | |
|  0705  | Design HashMap |          | |
|  0001  | Two Sum |   hash table + (two pointer) | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0001-Two-Sum.md) | [Leetcode 1](https://leetcode.com/problems/two-sum/)
|  0012  | Integer to Roman |  greedy / hashtable | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0012-Integer-to-Roman.md)| [Leetcode 12](https://leetcode.com/problems/integer-to-roman/)
|  0013  | Roman to Integer |  hashtable      | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0013-Roman-to-Integer.md)| [Leetcode 13](https://leetcode.com/problems/roman-to-integer/) |
|  0030  | Substring with Concatenation of All Words |  use hashtable to record each word and the times it appear + sliding window     | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0030-Substring-with-Concatenation-of-All-Words.md)| [Leetcode 30](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) |
|  0049  | Group Anagrams |  use hashtable to store "sorted" string in order to check anagram | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0049-Group-Anagrams.md)| [Leetcode 49](https://leetcode.com/problems/group-anagrams/) |
|  0128  | Longest Consecutive Sequence | use hashtable as a dictionary / also can use Set    | [JS solution](https://github.com/LuluSzutu/Leetcode/blob/main/Chapter1--HashTable/0128-Longest-Consecutive-Sequence.md)| [Leetcode 128](https://leetcode.com/problems/longest-consecutive-sequence/) |






