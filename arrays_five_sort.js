/*
five sort

Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
*/

const fiveSort = (nums) => {
    // count variable 
    let count = 0;
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
      // if element at index is not equal to 5
      if (nums[i] !== 5) {
        // assign nums at count to nums at the curren index
        nums[count] = nums[i]
        // increment count
        count += 1;
      }
    }
    // while loop is run to fill in rest of array with 5s
    while (count < nums.length) {
        nums[count] = 5;
        count += 1;
    }
    return nums;
  };
  

console.log( fiveSort([12, 5, 1, 5, 12, 7]));
// -> [12, 7, 1, 12, 5, 5] 

console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]))
// -> [4, 1, 1, 1, 5, 5, 5] 

console.log(fiveSort([5, 2, 5, 1, 1, 1, 4]))