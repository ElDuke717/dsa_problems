/*
five sort

Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
*/

const fiveSort = (nums) => {
    // iterate over the array
    for (let i = 0; i < nums.length; i++) {
    // if element is equal to five, 
      if (nums[i] === 5) {
    // splice it out
       let five = nums.splice(i, 1)
       console.log(nums)
       //console.log(five)
    // add 5 to the end
        nums.push(five[0]);
      }
    } 
    return nums;
  };

// console.log( fiveSort([12, 5, 1, 5, 12, 7]));
// // -> [12, 7, 1, 12, 5, 5] 


// console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]))
// -> [4, 1, 1, 1, 5, 5, 5] 

// console.log(fiveSort([5, 2, 5, 1, 1, 1, 4]))