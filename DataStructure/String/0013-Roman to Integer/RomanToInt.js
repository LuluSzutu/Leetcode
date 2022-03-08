/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let intArr = [];
  let rMap = new Map();
  rMap.set('I',1);
  rMap.set('V',5);
  rMap.set('X',10);
  rMap.set('L',50);
  rMap.set('C',100);
  rMap.set('D',500);
  rMap.set('M',1000);
  rMap.set('IV', 4);
  rMap.set('IX', 9);
  rMap.set('XL', 40);
  rMap.set('XC', 90);
  rMap.set('CD', 400);
  rMap.set('CM', 900);
  
  for (let i = 0; i < s.length; i++) {
    let subStr = s[i] + s[i+1];
    if(rMap.get(subStr) != undefined) {
      intArr.push(rMap.get(subStr));
      i++;
    } else {
      intArr.push(rMap.get(s[i]));
    }      
  }
  
  let result = 0;
  for (let j = 0; j < intArr.length; j++) {
    let digit = intArr[j];
    result += digit;
  }
  
  return result;
};

