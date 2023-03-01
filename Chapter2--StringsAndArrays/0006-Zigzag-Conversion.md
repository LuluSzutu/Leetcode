# 6. Zigzag Conversion

## Problem
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```dash
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

```dash
string convert(string s, int numRows);
```

Example 1:
```dash
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

## Solution
zig column (1 -- numRows), zag columns (numRow - 2), then repeat this process. So we just need to:
1. substring numRows + numRows - 2;
2. calculate row_index for each input index. 

```dash
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    row_read = "";
    if (numRows == 2) {
        for (let i = 0; i < s.length; i = i+2) {
            row_read += s[i];
        }
        for (let j = 1; j < s.length; j = j+2) {
            row_read += s[j];
        }
        return row_read;
    } else {
        // array for zigzag shape, initialize with "".  
        zigzag = new Array();
        for (let j = 0; j < numRows; j++) {
            zigzag[j] = "";
        }

        // repeat after numRows in one column and numRows-2 single/column. 
        let rep_num = numRows + numRows - 2; 
        for (let i = 0; i < s.length; i++) {
            let rem = i % rep_num;
            if (rem < numRows) {
                zigzag[i % rep_num] = zigzag[i % rep_num] + s[i];
            } else {
                zigzag[2*numRows-rem-2] = zigzag[2*numRows-rem-2] + s[i];
            }
        }

        for (let j = 0; j < numRows; j++) {
            row_read = row_read + zigzag[j];
        }
        return row_read;
    }
};
```
**Time:** O(n)
**Space:** O(n)

Success:
Runtime: 96ms
Memory: 47.8 MB

