/* Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.
*/

const minChange = (amount, coins) => {
  // Initialize the dp array with false and set dp[0] to true
  // dp is an array the length of 1 + amount, with the first element true and all false initially.
  const dp = Array(amount + 1).fill(false);
  dp[0] = true;

  // Iterate through all the coins - run loop for each coin in the array
  for (let coin of coins) {
    // Update the dp table for each amount from num to amount
    // loop through the rest of the array, i is assigned the value of the coin
    // start at the value of coin, then increment 
    for (let i = coin; i <= amount; i++) {
      if (dp[i - coin]) dp[i] = true;
    }
  }
  return dp[amount];
};

console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible
console.log(minChange(13, [1, 9, 5, 14, 30])); // -> 5
console.log(minChange(23, [2, 5, 7])); // -> 4
console.log(minChange(102, [1, 5, 10, 25])); // -> 6
console.log(minChange(200, [1, 5, 10, 25])); // -> 8
console.log(minChange(2017, [4, 2, 10])); // -> -1
console.log(minChange(271, [10, 8, 265, 24])); // -> -1
console.log(minChange(0, [4, 2, 10])); // -> 0
console.log(minChange(0, [])); // -> 0
