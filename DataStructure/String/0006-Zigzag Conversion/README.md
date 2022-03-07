# 6. Zigzag Conversion

## Problem
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```bash
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"

Example 1:
```bash
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```
## Solution
```dash
0    6      12
1  5 7   11 13
2 4  8 10   14
3    9      15
```
inter = numR + (numR + 2)
r = 0...rowNumber

```dash
0                                             inter*1+r                                             inter*2+r  ....
1                       inter*0+r+inter-2*r   inter*1+r                       inter*1+r+inter-2*r   inter*2+r
2 inter*0+r+inter-2*r                         inter*1+r inter*1+r+inter-2*r                         inter*2+r
3                                             inter*1+r                                             inter*2+r
```

Runtime: 126 ms, faster than 60.72% of JavaScript online submissions for Zigzag Conversion.
Memory Usage: 49.7 MB, less than 19.74% of JavaScript online submissions for Zigzag Conversion.


