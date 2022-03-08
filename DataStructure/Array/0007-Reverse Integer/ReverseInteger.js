/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let inXStr = '';
  let start = 0;
  let xStr = x.toString();
  let len = xStr.length;
  if (xStr[0] === '-') {
    inXStr = inXStr + '-';
    start = 1;   
  }
  for (let i = len-1; i >= start; i--) {
    inXStr = inXStr + xStr[i];
  }
  
  // check wether overflow of 32 bit
  let result = parseInt(inXStr);
  let maxUp = Math.pow(2,31) - 1;
  let maxDown = Math.pow(-2,31)
  if ((result < 0 && result < maxDown) || (result > 0 && result > maxUp)) {
    return 0;
  }
  return result;
};

