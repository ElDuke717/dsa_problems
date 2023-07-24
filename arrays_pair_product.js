/*
pair product

Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
*/


const pairProduct = (numbers, targetProduct) => {
    // create a cache to store result of targetProduct divided by each element
    const cache = {};
    // declare indices, store indexes 
    const indices = [];
    // iterate through array, store targetProduct divided by element value
    for (let i = 0; i < numbers.length; i++) {
       // div is the division between targetProduct and current number
       const div = targetProduct / numbers[i];
       // if the cache already has the div as key, push the value and it's index
        if (cache.hasOwnProperty(div)){
            indices.push(cache[div], i);
            break; // break after first pair is reached.
        }
        // otherwise, add the number and it's index to cache
        cache[numbers[i]] = i;
    }
    return indices;
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]