/*
tribonacci

Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

The 0-th and 1-st numbers of the sequence are both 0.

The 2-nd number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous three numbers.

Solve this recursively.

*/

const createTrib = () => {
  const memo = {};
  const trib = (n) => {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;
    if (memo[n]) return memo[n];
    let tribn = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo[n] = tribn;
    return tribn;
  };
  return trib;
};

const tribonacci = createTrib();

console.log(tribonacci(0))
console.log(tribonacci(5)); // 4
console.log(tribonacci(7)); // 13
console.log(tribonacci(14));
