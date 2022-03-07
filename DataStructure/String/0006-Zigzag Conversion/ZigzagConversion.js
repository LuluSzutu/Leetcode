/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let ans = "";  
  
  let len = s.length;
  if (numRows >= len) {
    return s;
  }
  if (numRows == 1) {
    return s;    
  }
  
  let inter = numRows + numRows - 2;  
  let div = len/inter;
  let rem = len%numRows;
     
  let ansArr = new Map();
  for (let r = 0; r < numRows; r++) {
    ansArr.set(r,[]);
  }
  
  for (let i = 0; i < div; i++) {
    for (let r = 0; r < numRows; r++) {
      if (s[i*inter+r] != undefined) {
        ansArr.get(r).push(s[i*inter+r]); 
      }      
      if (r > 0 && r < numRows - 1) {
        let zigChar = s[i*inter+r+inter-2*r];
        if (zigChar != undefined) {
          ansArr.get(r).push(zigChar);
        }
      }
    }
  }
  
  for (let r = 0; r < numRows; r++) {
    ans = ans + ansArr.get(r).join('');
  }
  return ans;
};


