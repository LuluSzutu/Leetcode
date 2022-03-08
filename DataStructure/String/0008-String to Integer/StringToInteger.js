/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {  
  let intArr = "";
  
  // step 1: remove leading whitespace.
  while (s[0] === " " && s.length > 0) {
    s = s.slice(1);
  }
  
  // step 2: check '-' or '+'
  if (s != undefined) {
    if (s[0] === '-' || s[0] === '+') {
      intArr = intArr + s[0];
      s = s.slice(1);
    }
    
    //step 3: read until next non-digit
    if (s != undefined) {
      while((!isNaN(parseInt(s[0])) && s.length > 0)) {
        intArr = intArr + s[0];
        s = s.slice(1);
      }     
    }
  }
  
  // step 4: convert to integer
  if (intArr === "" || intArr === '-' || intArr === '+') {
    return 0;
  }
  let ansInt = parseInt(intArr);
  
  // step 5: check range
  let maxUp = Math.pow(2,31) -1;
  let maxDown = Math.pow(-2,31);
  if (ansInt > maxUp) {
    return maxUp;
  }
  if (ansInt < maxDown) {
    return maxDown;
  }
  return ansInt;    
};


