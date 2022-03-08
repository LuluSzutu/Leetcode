/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let intMap = new Map();
  intMap.set(1, 'I');
  intMap.set(4, 'IV');
  intMap.set(5,'V');
  intMap.set(9,'IX');
  intMap.set(10,'X');
  intMap.set(40,'XL');
  intMap.set(50,'L');
  intMap.set(90,'XC');
  intMap.set(100,'C');
  intMap.set(400,'CD');
  intMap.set(500,'D');
  intMap.set(900,'CM');
  intMap.set(1000,'M');
  
  let romanS = "";
  let intStr = num.toString();
  let intArr = [];
  let len = intStr.length;
  let d = len;
  for (let i = 0; i < len; i++) {
    let s = intStr[i];
    let si = parseInt(s);
    d--;
    if (d === 3) {
      for (let j = 0; j < si; j++) {
        romanS = romanS + 'M';
      }      
    } else if (d === 2) {
      if (si < 4) {
        for (let j = 0; j < si; j++) {
          romanS = romanS + 'C';
        }
      } else if (si === 4) {
        romanS = romanS + 'CD';
      } else if (si === 5) {
        romanS = romanS + 'D';
      } else if (si > 5 && si < 9) {
        romanS = romanS + 'D';
        for (let l = 0; l < si-5; l++) {
          romanS = romanS + 'C';
        }
      } else if (si === 9) {
        romanS = romanS + 'CM';
      }  
    } else if (d === 1) {
      if (si < 4) {
        for (let j = 0; j < si; j++) {
          romanS = romanS + 'X';
        }
      } else if (si === 4) {
        romanS = romanS + 'XL';
      } else if (si === 5) {
        romanS = romanS + 'L';
      } else if (si > 5 && si < 9) {
        romanS = romanS + 'L';
        for (let l = 0; l < si-5; l++) {
          romanS = romanS + 'X';
        }
      } else if (si === 9) {
        romanS = romanS + 'XC';
      }    
    } else if (d === 0) {
      if (si < 4) {
        for (let j = 0; j < si; j++) {
          romanS = romanS + 'I';
        }
      } else if (si === 4) {
        romanS = romanS + 'IV';
      } else if (si === 5) {
        romanS = romanS + 'V';
      } else if (si > 5 && si < 9) {
        romanS = romanS + 'V';
        for (let l = 0; l < si-5; l++) {
          romanS = romanS + 'I';
        }
      } else if (si === 9) {
        romanS = romanS + 'IX';
      }      
    }
  }
  
  return romanS;
};

