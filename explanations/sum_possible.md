# Sumpossible

>Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.To solve this problem, you can use a dynamic programming approach. This is often used for problems where you have to make a series of decisions that depend on each other, like whether to include a number in the sum. The approach for `sumPossible` is to create a table that keeps track of whether it's possible to get to a certain amount using any combination of the numbers you have.

Here's the idea:

- Initialize an array (let's call it `dp`) with a length of `amount + 1` and set all values to `false`. This array will keep track of whether it's possible to achieve a certain amount (index) with the given numbers.
- Set `dp[0]` to `true` because you can always make the sum `0` by choosing no numbers.
- Loop through each number in the given array, and for each number, update the `dp` array from `number` to `amount`. If `dp[i - number]` is `true`, then set `dp[i]` to `true`.

Here's what the code might look like:

```javascript
const sumPossible = (amount, numbers) => {
  // Initialize the dp array with false and set dp[0] to true
  const dp = Array(amount + 1).fill(false);
  dp[0] = true;

  // Go through each number
  for (let num of numbers) {
    // Update the dp table for each amount from num to amount
    for (let i = num; i <= amount; i++) {
      if (dp[i - num]) dp[i] = true;
    }
  }

  return dp[amount];
};

console.log(sumPossible(8, [5, 12, 4])); // -> true, because 4 + 4 = 8
console.log(sumPossible(15, [6, 2, 10, 19])); // -> false, no combination can add up to 15
console.log(sumPossible(0, [])); // -> true, you can make 0 by choosing no numbers
console.log(sumPossible(12, [12])); // -> true, 12 is directly in the array
console.log(sumPossible(13, [3, 5])); // -> true, because 3 + 5 + 5 = 13
```

This solution has a time complexity of O(n \* m), where n is the amount and m is the length of the numbers array, because it potentially iterates over the entire `dp` array for each number in the `numbers` array.

Here's a step by step explanation of the `sumPossible` function:

```javascript
const sumPossible = (amount, numbers) => {
```

This line declares a function `sumPossible` that takes in two parameters: `amount`, which is the target sum you want to achieve, and `numbers`, which is an array of numbers you can use to sum up to the `amount`.

```javascript
const dp = Array(amount + 1).fill(false);
```

Here, you're creating an array `dp` with a length of `amount + 1`. You're doing `amount + 1` because you want to include an entry for `0` all the way up to the `amount` itself. You fill this array with `false` initially because you haven't found a way to sum up to any of these amounts yet.

```javascript
dp[0] = true;
```

You set `dp[0]` to `true` because you can always reach a sum of `0` by selecting no numbers from the array (this is sometimes referred to as the base case in dynamic programming).

```javascript
  for (let num of numbers) {
```

This line starts a loop that goes through each `num` in your `numbers` array.

```javascript
    for (let i = num; i <= amount; i++) {
```

Within this loop, you start another loop that will go from the current number `num` to the `amount`. This is because you can only start considering sums that include `num` from `num` itself up to `amount`.

```javascript
if (dp[i - num]) dp[i] = true;
```

For each `i`, you check if `dp[i - num]` is `true`. If it is, it means you can reach the sum `i - num` by using the numbers you have. Since you are currently considering `num`, adding `num` to `i - num` gives you `i`. So, if you can reach `i - num`, you can definitely reach `i` by including `num`. Therefore, you set `dp[i]` to `true`.

For instance, if `num` is `4` and `i` is `8`, you're checking if you can make `4` (`8 - 4`), and if you can, then you can also make `8` by adding the `4`.

After the loops finish running, your `dp` array will have `true` at every index `i` that can be formed by summing the numbers in the `numbers` array.

```javascript
  return dp[amount];
};
```

At the end of the function, you return the value of `dp[amount]`. If it's `true`, then you can form the `amount` by summing the numbers. If it's `false`, then you cannot.

```javascript
console.log(sumPossible(8, [5, 12, 4])); // -> true, because 4 + 4 = 8
```

This calls the function with a target sum of `8` and an array of numbers `[5, 12, 4]`. The function will return `true` because you can sum `4` twice to get `8`.

```javascript
console.log(sumPossible(15, [6, 2, 10, 19])); // -> false, no combination can add up to 15
```

This tries to form `15` with `[6, 2, 10, 19]`, which is not possible, so it returns `false`.

The remaining `console.log` statements are further test cases for the `sumPossible` function.

Here's a pythonTutor visualization of the `sumPossible` function:

https://pythontutor.com/render.html#code=const%20sumPossible%20%3D%20%28amount,%20numbers%29%20%3D%3E%20%7B%0A%20%20%20%20//%20Initialize%20the%20dp%20array%20with%20false%20and%20set%20dp%5B0%5D%20to%20true%0A%20%20%20%20const%20dp%20%3D%20Array%28amount%20%2B%201%29.fill%28false%29%3B%0A%20%20%20%20dp%5B0%5D%20%3D%20true%3B%0A%20%20%0A%20%20%20%20//%20Go%20through%20each%20number%0A%20%20%20%20for%20%28let%20num%20of%20numbers%29%20%7B%0A%20%20%20%20%20%20//%20Update%20the%20dp%20table%20for%20each%20amount%20from%20num%20to%20amount%0A%20%20%20%20%20%20for%20%28let%20i%20%3D%20num%3B%20i%20%3C%3D%20amount%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28dp%5Bi%20-%20num%5D%29%20dp%5Bi%5D%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%0A%20%20%20%20return%20dp%5Bamount%5D%3B%0A%20%20%7D%3B%0A%20%20%0A%20%20sumPossible%288,%20%5B5,%2012,%204%5D%29&cumulative=false&curInstr=47&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

# More Explanation

The `sumPossible` algorithm is a dynamic programming approach to solve the subset sum problem, which determines if there's a subset of the given `numbers` that can sum up to `amount`. Here's the step-by-step explanation:

1. **Initialization**: Create a boolean array (`dp`) with `amount + 1` elements, all initialized to `false`, except for `dp[0]`, which is set to `true`. This indicates that it's possible to reach a sum of 0 (base case).

2. **Iterating Through Numbers**: Go through each number in the `numbers` array. Each `num` represents a potential value to be added to a subset to reach the desired `amount`.

3. **Dynamic Table Update**: For each `num`, iterate from `num` to `amount` and update the `dp` table. If `dp[i - num]` is `true`, it means that there's a subset that sums to `i - num`. Adding `num` to this subset would sum to `i`, so set `dp[i]` to `true`.

4. **Final Check**: After filling out the `dp` table, check the value of `dp[amount]`. If it's `true`, it means that it's possible to form the `amount` with a subset of the given numbers. Otherwise, it's not possible.

The function returns the boolean result for `dp[amount]`, indicating whether or not the `amount` can be formed from the `numbers`.

Let's visualize steps 2 and 3 of the algorithm with an example:

Assume `amount = 5` and `numbers = [1, 3]`.

1. Initialize `dp` array: `[true, false, false, false, false, false]` (indices 0 to 5).

2. First iteration with `num = 1`:

   - `i = 1`: `dp[1 - 1]` is `true`, so set `dp[1]` to `true`.
   - `i = 2`: `dp[2 - 1]` is `true`, so set `dp[2]` to `true`.
   - `i = 3`: `dp[3 - 1]` is `true`, so set `dp[3]` to `true`.
   - ...
   - `i = 5`: `dp[5 - 1]` is `true`, so set `dp[5]` to `true`.

   After first iteration: `[true, true, true, true, true, true]`

3. Second iteration with `num = 3`:

   - `i = 3`: `dp[3 - 3]` is `true`, so `dp[3]` remains `true`.
   - `i = 4`: `dp[4 - 3]` is `true`, so set `dp[4]` to `true`.
   - `i = 5`: `dp[5 - 3]` is `true`, so `dp[5]` remains `true`.

   After second iteration: `[true, true, true, true, true, true]`

At each iteration, we're checking if `dp[i - num]` is `true`. If it is, we can reach `i` by adding `num` to whatever combination got us to `i - num`. The `dp` array keeps track of which sums are possible with the numbers we've seen so far.

By the end, `dp[5]` is `true`, meaning we can sum to 5 with some combination of 1s and 3s. In this case, `[1, 1, 1, 1, 1]`, `[1, 1, 3]`, and `[3, 1, 1]` all work.


Certainly! This algorithm is an example of dynamic programming, specifically used to solve the subset sum problem. The idea is to determine whether it's possible to sum to a specific target amount (`amount`) using any combination of the numbers in the `numbers` array. Here's a breakdown of each part of the code:

1. **Initialization of `dp` Array**:
   - `const dp = Array(amount + 1).fill(false);`
   - This line creates an array `dp` of length `amount + 1` and initializes all elements to `false`. This array will keep track of which sums are possible up to the `amount`.
   - `dp[0] = true;`
   - Setting `dp[0]` to `true` represents that a sum of 0 is always possible (by selecting no numbers).

2. **Outer Loop - Iterating Over Numbers**:
   - `for (let num of numbers) { ... }`
   - This loop iterates through each number in the `numbers` array. Each number is considered one at a time to update the `dp` array.

3. **Inner Loop - Dynamic Programming Table Update**:
   - `for (let i = num; i <= amount; i++) { ... }`
   - For each number, this inner loop iterates from `num` to `amount`. The purpose is to update the `dp` array for each sum from `num` to `amount`.
   - `if (dp[i - num]) dp[i] = true;`
   - Here, the algorithm checks if the current number (`num`) can be added to any of the previously computed sums (`i - num`) to make a new sum (`i`). If `dp[i - num]` is `true`, it means there's a combination of numbers that adds up to `i - num`. Adding `num` to this would give us `i`, so `dp[i]` is set to `true`.

4. **Return Statement**:
   - `return dp[amount];`
   - Finally, the function returns the value of `dp[amount]`. If it's `true`, it means there's a combination of numbers in the array that adds up to the target `amount`.

Examples:
- `sumPossible(8, [5, 12, 4])`: The algorithm finds that 4 + 4 = 8, so it returns `true`.
- `sumPossible(15, [6, 2, 10, 19])`: No combination of these numbers adds up to 15, so it returns `false`.
- `sumPossible(0, [])`: Since you can make 0 by choosing no numbers, it returns `true`.
- `sumPossible(12, [12])`: 12 is directly in the array, so it returns `true`.
- `sumPossible(13, [3, 5])`: The combination 3 + 5 + 5 = 13 is possible, so it returns `true`.

The nested loop might seem complex at first, but it's essentially building up a table (`dp`) of which sums are possible with the given numbers, step by step.

Absolutely, visualizing the dynamic programming process can greatly aid in understanding. Let's illustrate this with an example, using the input `sumPossible(8, [5, 4])`.

1. **Initialization**: 
   - `dp = [true, false, false, false, false, false, false, false, false]` 
   - (indices: 0 to 8)

2. **First Number (5)**:
   - We start the inner loop with `num = 5`.
   - Iterate `i` from 5 to 8 (the target amount).
   - Update `dp[i]` if `dp[i - 5]` is `true`.

    Steps:
    - `i = 5`: `dp[5 - 5]` is `true` (since `dp[0]` is `true`), so set `dp[5]` to `true`.
    - `i = 6`: `dp[6 - 5]` is `false`, so `dp[6]` remains `false`.
    - `i = 7`: `dp[7 - 5]` is `false`, so `dp[7]` remains `false`.
    - `i = 8`: `dp[8 - 5]` is `false`, so `dp[8]` remains `false`.

    `dp` after first number: `[true, false, false, false, false, true, false, false, false]`

3. **Second Number (4)**:
   - Now with `num = 4`.
   - Iterate `i` from 4 to 8.
   - Update `dp[i]` if `dp[i - 4]` is `true`.

    Steps:
    - `i = 4`: `dp[4 - 4]` is `true`, so set `dp[4]` to `true`.
    - `i = 5`: `dp[5 - 4]` is `false`, so `dp[5]` remains `true`.
    - `i = 6`: `dp[6 - 4]` is `true`, so set `dp[6]` to `true`.
    - `i = 7`: `dp[7 - 4]` is `false`, so `dp[7]` remains `false`.
    - `i = 8`: `dp[8 - 4]` is `true`, so set `dp[8]` to `true`.

    `dp` after second number: `[true, false, false, false, true, true, true, false, true]`

4. **Result**:
   - The final `dp` array shows that sums of 0, 4, 5, 6, and 8 are possible with the numbers [5, 4].
   - Since `dp[8]` is `true`, the function returns `true`.

Here, the key to understanding is how each number in the array potentially changes the `dp` array, gradually building up to the target sum. The `dp` array tracks which sums are achievable with the numbers seen so far.