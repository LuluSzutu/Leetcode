# 187. Repeated DNA Sequences

## Problem
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Example 1:
```dash
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
```

## Solution
1. Sliding Window + HashTable

```dash
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (s.length <= 10) {
    return [];
  }

  let seqMap = {};
  let seqLen = 10;
  
  for (let i = 0; i <= s.length - seqLen; i++) {
    let subStr = s.substring(i,i+seqLen);
    if (seqMap[subStr] >= 0) {
      seqMap[subStr]++;
    } else {
      seqMap[subStr] = 0;
    }   
  }
  
  let ans = [];
  for (const [key, value] of Object.entries(seqMap)) {
    if (value > 0) {
      ans.push(key);
    }
  }
  
  return ans;    
};
```

**Time:** O(n) // O(n-10)
**Space:** O(n) 

Success:

Runtime: 229 ms, faster than 12.80% of JavaScript online submissions for Repeated DNA Sequences.
Memory Usage: 82.6 MB, less than 5.21% of JavaScript online submissions for Repeated DNA Sequences.

2. Improvement of solution 1, use only 1 for loop, directly get answer. 

```dash
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (s.length <= 10) {
    return [];
  }

  let seqMap = {};
  let seqLen = 10;
  let ans = [];
  
  for (let i = 0; i <= s.length - seqLen; i++) {
    let subStr = s.substring(i,i+seqLen);
    if (seqMap[subStr] === 0) {
      seqMap[subStr]++;
      ans.push(subStr);
    } 
    if (seqMap[subStr] === undefined) {
      seqMap[subStr] = 0;
    }   
  }
  
  return ans;    
};
```

Success:

Runtime: 120 ms, faster than 65.73% of JavaScript online submissions for Repeated DNA Sequences.
Memory Usage: 61.3 MB, less than 41.87% of JavaScript online submissions for Repeated DNA Sequences.

3. Using two Sets. The best solution so far. 

```dash
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let store = new Set(),
    result = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    const str = s.substring(i, i + 10);
    if (store.has(str)) {
      result.add(str);
    } else {
      store.add(str);
    }
  }
  return Array.from(result);  
};```

Success:

Runtime: 78 ms, faster than 97.18% of JavaScript online submissions for Repeated DNA Sequences.
Memory Usage: 52.7 MB, less than 87.42% of JavaScript online submissions for Repeated DNA Sequences.

