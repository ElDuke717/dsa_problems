/*  Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative. */

// const sumPossible = (amount, numbers) => {
//   // if the numbers array length is zero, return false
//   if (numbers.length === 0 && amount !== 0) return false;
//   // if the numbers array length is 1 and element zero is not equal to amount, return false, otherwise return true
//   if (
//     (numbers.length === 1 && numbers[0] === amount) ||
//     (numbers.length === 0 && amount === 0)
//   )
//     return true;
//   // iterate through the array
//   for (let i = 0; i < numbers.length; i++) {
//     // iterate through the array checking each other element plus the preceding element
//     if (numbers[i] * 2 === amount) return true;
//     for (let j = 1; j < numbers.length; j++) {
//       // if the current element *2 is equal to the amount, return true
//       if (numbers[i] + numbers[j] === amount) return true;
//     }
//   }

//   return false;
// };

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
  


