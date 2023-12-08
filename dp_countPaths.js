/*
count paths

Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

*/

const countPaths = (grid, row = 0, col = 0, memo = {}) => {
    // Base case: if we're at the bottom-right corner
    if (row === grid.length - 1 && col === grid[0].length - 1) {
      return 1;
    }
  
    // Wall case: if we're on a 'X'
    if (grid[row][col] === 'X') {
      return 0;
    }
  
    // Check if we have already computed the number of paths from this cell
    const posKey = `${row},${col}`;
    if (memo[posKey]) {
      return memo[posKey];
    }
  
    let rightPaths = 0;
    let downPaths = 0;
  
    // Move right if possible
    if (col < grid[0].length - 1) {
      rightPaths = countPaths(grid, row, col + 1, memo);
    }
  
    // Move down if possible
    if (row < grid.length - 1) {
      downPaths = countPaths(grid, row + 1, col, memo);
    }
  
    // Store the result in our memo object
    memo[posKey] = rightPaths + downPaths;
  
    return rightPaths + downPaths;
  };

const grid0 = [
  ['O', 'O'],
  ['O', 'O'],
];

console.log(countPaths(grid0)); // -> 2

const grid1 = [
  ['O', 'O', 'X'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
];
console.log(countPaths(grid1)); // -> 5

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'X'],
  ['O', 'O', 'O'],
];
console.log(countPaths(grid2)); // -> 3

const grid3 = [
  ['O', 'O', 'X', 'O', 'O', 'O'],
  ['O', 'O', 'X', 'O', 'O', 'O'],
  ['X', 'O', 'X', 'O', 'O', 'O'],
  ['X', 'X', 'X', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O'],
];
console.log(countPaths(grid3)); // -> 0
