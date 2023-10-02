/* 
sum possible

Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.
*/

const sumPossible = (amount, numbers) => {
  // todo
};

sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
sumPossible(15, [6, 2, 10, 19]); // -> false
sumPossible(13, [6, 2, 1]); // -> true

