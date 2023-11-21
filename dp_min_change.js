/*
min change

Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.

 */



const minChange = (amount, coins) => {
  // Initialize a dp array where we store the minimum coins needed for every amount up to the target
  // We start off with amount + 1 as the initial value since it's impossible to have that many coins (it's like Infinity)
  const dp = new Array(amount + 1).fill(amount + 1);
  
  // Base case: no coins are needed to make 0 amount
  dp[0] = 0;
  
  // Loop through all amounts from 1 to the target amount
  for (let i = 1; i <= amount; i++) {
    // Loop through each coin
    for (let coin of coins) {
      // If the coin is less than or equal to the current amount, it can contribute to the sum
      if (coin <= i) {
        // The formula: the minimum coins needed for amount `i` is either the current value stored at dp[i]
        // or 1 (the current coin) + dp[i - coin] whichever is smaller
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  // If dp[amount] has not been updated, it means it's not possible to make the amount with the given coins
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};


console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible
console.log(minChange(13, [1, 9, 5, 14, 30])); // -> 5


