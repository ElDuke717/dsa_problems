// Sort an array in ascending order using the insertion sort algorithm

const insertionSort = (arr) => {
  // declare n, the length of the array
  let n = arr.length;

  // start a for loop to iterate over array, i starts at 1
  for (let i = 1; i < n; i++) {
    // current is array at current element, the second element in the array.
    let current = arr[i];
    // assign j index to i - 1, so it starts with the first element in the array
    let j = i - 1;
    // run a while loop that runs as long as j is zero or positive and the element at arr[j] is greater than current (starting with second element)
    while (j >= 0 && arr[j] > current) {
      // move the greater element to the right - note that the index j
      arr[j + 1] = arr[j];
      // decrement j to move it backwards
      j--;
    }
    // when the inner loop ends j + 1 is the correct index where current should be place
    arr[j + 1] = current;
  }
  return arr;
};

const array1 = [6, 4, 5, 3, 8, 6, 2, 1, 21];
console.log(insertionSort(array1));
