/** 
  * Objective:
Create a JavaScript function named frequencyCounter that takes an array of integers as input and returns an object. The returned object should map each integer to the number of times it appears in the array.

Requirements:
Input: An array of integers (e.g., [1, 2, 4, 2, 4, 4, 5]).
Processing:
Count the frequency of each unique integer in the array.
Output: An object where each key is a unique integer from the array, and its value is the number of times that integer appears in the array (e.g., {1: 1, 2: 2, 4: 3, 5: 1}).
Example:
 */

// declare frequencyCounter, takes an array as an argument
// initiate a cache object
// iterate over the array, if integer is present, increment, if not, add to the object
// return the cache object

function frequencyCounter(array) {
  const cache = {};

  for (let i = 0; i < array.length; i++) {
    if (!cache[array[i]]) {
      cache[array[i]] = 1;
    } else {
      cache[array[i]] += 1;
    }
  }
  return cache;
}

console.log(frequencyCounter([1, 2, 4, 2, 4, 4, 5]));
// Should output: {1: 1, 2: 2, 4: 3, 5: 1}
