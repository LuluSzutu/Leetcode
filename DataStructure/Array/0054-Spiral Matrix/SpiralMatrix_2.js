var spiralOrder = function(matrix) {
  return goAround(matrix,[]);
};

function goAround(mat,result) {
    if (mat.length === 0) {
        // remove all undefined in result
        result = result.filter(x => {
            return x !== undefined;
        })
        return result;
    }
    //go right (pop and shift could cause empty array [], and will generate undefined in result)
    result = result.concat(mat.shift());
    //go down
    for (let j = 0; j < mat.length-1; j++) {
        result.push(mat[j].pop());
    }
    //go left
    let temp = mat.pop();
    if (temp) {
      result = result.concat(temp.reverse());
    }
    //go up
    if (mat.length-1 > 0) {
      for (let k = mat.length-1; k > 0; k--) {
        result.push(mat[k].shift());
      }
    }
    return goAround(mat,result);
}



