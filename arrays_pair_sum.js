/*
pair sum

Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

const pairSum = (numbers, targetSum) => {
    // create a cache to store result of targetSum minus each element
    const cache = {};
    // declare indices, store indexes of indexes of pair
    const indices = [];
    // iterate through array, store targetSum minus element value
    for (let i = 0; i < numbers.length; i++) {
       // diff is the difference between targetSum and current number
       const diff = targetSum - numbers[i];
       // if the cache already has the diff as key, push the value and it's index
        if (cache.hasOwnProperty(diff)){
            indices.push(cache[diff], i);
        }
        // otherwise, add the number and it's index to cache
        cache[numbers[i]] = i;
    }
    
    return indices;
  };


console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2])
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([6, 4, 2, 8 ], 12)); // -> [1, 3]))