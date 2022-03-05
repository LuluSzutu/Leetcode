var spiralOrder = function(matrix) {
    let ans = [];
    
    let top_row = 0;
    let right_column = matrix[0].length - 1;
    let bottom_row = matrix.length - 1;
    let left_column = 0;

    while (bottom_row >= top_row && right_column >= left_column) {
        OuterSpiral(ans, matrix, top_row, right_column, bottom_row, left_column);
        top_row++;
        bottom_row--;
        left_column++;
        right_column--;
    }
    
    return ans;    
};

function OuterSpiral(answer, matrix, top, right, bottom, left) {
    for (let i = left; i <= right; i++) {
        answer.push(matrix[top][i]);
    }
    for (let j = top+1; j <= bottom-1; j++) {
        answer.push(matrix[j][right]);
    }
    if (bottom > top) {
      for (let k = right; k >= left; k--) {
        answer.push(matrix[bottom][k]);
      }
    }
    if (right > left) {
      for (let l = bottom-1; l >= top+1; l--) {
        answer.push(matrix[l][left]);
      } 
    }
}

