# min change Explanation

> Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.
>
>If it is not possible to create the amount, then return -1.

The `minChange` function you've shared is a classic example of dynamic programming used to solve the coin change problem. The goal is to find the minimum number of coins that add up to a given amount using coins of specified denominations. If it's not possible to make up the amount with the given coins, the function returns -1.

Let's break down how this function works:

1. **Initialization of the `dp` Array**:

   - `const dp = new Array(amount + 1).fill(amount + 1);`
   - A `dp` (dynamic programming) array is initialized with `amount + 1` elements, each set to `amount + 1`. This value acts like "Infinity", as it's impossible to reach an amount with more coins than the amount itself.
   - `dp[0] = 0;`
   - The base case: 0 coins are needed to make an amount of 0.

2. **Main Logic - Nested Loops**:

   - **Outer Loop** - Iterates through each amount from 1 to `amount`:
     - `for (let i = 1; i <= amount; i++) { ... }`
   - **Inner Loop** - Iterates through each coin:
     - `for (let coin of coins) { ... }`
     - The inner loop checks if the coin can contribute to the current amount (`i`). This is true if `coin <= i`.
     - If the coin can contribute, it calculates the minimum coins needed for the current amount `i` as the minimum of the current value in `dp[i]` and `1 + dp[i - coin]`.
     - `1 + dp[i - coin]` represents using one instance of the current coin (`coin`) and then seeing how many coins were needed to make up the remaining amount (`i - coin`).

3. **Return Statement**:
   - The function returns the value in `dp[amount]`.
   - If `dp[amount]` is still set to `amount + 1`, it means it was impossible to make up the amount with the given coins, so the function returns `-1`.
   - Otherwise, it returns the minimum number of coins needed.

Example Explanation:

- `minChange(8, [1, 5, 4, 12])`: The function calculates the fewest coins needed to make up each amount from 1 to 8. It finds that 2 coins (4 + 4) are the minimum needed for 8.
- `minChange(13, [1, 9, 5, 14, 30])`: Here, 5 coins are the minimum required to make 13.
- `minChange(23, [2, 5, 7])`: To make 23, the minimum coins required are 4.
- `minChange(0, [4, 2, 10])` and `minChange(0, [])`: No coins are needed to make 0.
- `minChange(2017, [4, 2, 10])` and `minChange(271, [10, 8, 265, 24])`: These amounts cannot be made with the given coins, so `-1` is returned.

This algorithm effectively builds up a solution by solving smaller subproblems (minimum coins for smaller amounts) and using these solutions to solve larger problems (minimum coins for the target amount).

Sure, let's go through the `minChange` function step by step with a specific example. We'll use `minChange(8, [1, 5, 4, 12])` to illustrate the process. The aim is to find the minimum number of coins needed to sum up to 8 using the coins `[1, 5, 4, 12]`.

1. **Initialization**:

   - `dp = [0, 9, 9, 9, 9, 9, 9, 9, 9]`
   - (indices: 0 to 8, initialized to 9 as a representation of Infinity).

2. **Processing Each Coin**:

   - We will process each coin one by one and update the `dp` array accordingly.

3. **First Coin: 1**:

   - Process amounts from 1 to 8 for the coin 1.
   - For each amount `i`, `dp[i] = min(dp[i], dp[i - 1] + 1)`.
   - After processing coin 1, `dp` looks like: `[0, 1, 2, 3, 4, 5, 6, 7, 8]`.

4. **Second Coin: 5**:

   - Process amounts from 5 to 8.
   - For amount 5: `dp[5] = min(dp[5], dp[5 - 5] + 1) = min(5, 1) = 1`.
   - For amount 6: `dp[6] = min(dp[6], dp[6 - 5] + 1) = min(6, 2) = 2`.
   - For amount 7: `dp[7] = min(dp[7], dp[7 - 5] + 1) = min(7, 3) = 3`.
   - For amount 8: `dp[8] = min(dp[8], dp[8 - 5] + 1) = min(8, 4) = 4`.
   - `dp` after processing 5: `[0, 1, 2, 3, 4, 1, 2, 3, 4]`.

5. **Third Coin: 4**:

   - Process amounts from 4 to 8.
   - For amount 4: `dp[4] = min(dp[4], dp[4 - 4] + 1) = min(4, 1) = 1`.
   - For amount 5: `dp[5] = min(dp[5], dp[5 - 4] + 1) = min(1, 2) = 1`.
   - For amount 6: `dp[6] = min(dp[6], dp[6 - 4] + 1) = min(2, 2) = 2`.
   - For amount 7: `dp[7] = min(dp[7], dp[7 - 4] + 1) = min(3, 2) = 2`.
   - For amount 8: `dp[8] = min(dp[8], dp[8 - 4] + 1) = min(4, 2) = 2`.
   - `dp` after processing 4: `[0, 1, 2, 3, 1, 1, 2, 2, 2]`.

6. **Fourth Coin: 12**:

   - This coin doesn't affect our `dp` array since all amounts we're considering are less than 12.

7. **Result**:
   - Finally, we look at `dp[8]`, which is now `2`.
   - This means the minimum number of coins required to make the amount 8 is 2.

The key takeaway from this step-by-step process is how the `dp` array is updated for each coin, progressively finding the minimum number of coins required for each amount up to the target amount. By the end, `dp[amount]` gives the minimum number of coins needed for the target amount.

The time complexity of the `minChange` function can be analyzed by looking at the nested loops in the code.

1. **Outer Loop**:

   - The outer loop runs from 1 to `amount` (inclusive), so it iterates `amount` times.

2. **Inner Loop**:
   - The inner loop iterates over each coin in the `coins` array. Let's say the length of the `coins` array is `n`.

Given these two loops, for each of the `amount` iterations of the outer loop, the inner loop runs `n` times. Therefore, the total number of iterations is a product of these two, leading to a time complexity of **O(amount \* n)**.

This complexity means that the time taken by the algorithm increases linearly with both the target amount and the number of different coins. It's important to note that this is a significant improvement over brute-force approaches, which might have exponential time complexity for the same problem.

However, the space complexity of the algorithm is also important to consider. The space complexity is determined by the size of the `dp` array, which is of size `amount + 1`. Hence, the space complexity is **O(amount)**. This space is used to store the minimum number of coins needed for each amount up to the target amount.
