/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  
  //DFS
  for (let g = 0; g < grid.length; g++) {
    for (let h = 0; h < grid[0].length; h++) {
      if (grid[g][h] === 1) {
        maxArea = Math.max(maxArea,connectedArea(g,h,grid));
      }
    }
  }
  return maxArea;
};

function connectedArea(a,b,grid) {
  if (a < 0 || a >= grid.length || b < 0 || b >= grid[0].length || grid[a][b] === 0) {
    return 0;
  }
  grid[a][b] = 0;
  return 1 + connectedArea(a-1,b,grid) + connectedArea(a+1,b,grid) + connectedArea(a,b-1,grid) + connectedArea(a,b+1,grid);
}

