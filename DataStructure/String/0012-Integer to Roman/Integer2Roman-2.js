/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = '';
  let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV','I'];
  
  while (num != 0) {
    let i = 0;
    while (num - value[i] < 0) {
      i++;
    }
    num -= value[i];
    result += symbol[i];
  }
  
  return result;
};

