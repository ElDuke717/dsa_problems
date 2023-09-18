// Sort an unsorted array of numbers using the bubble sort algorithm

function bubbleSort(arr) {
  // assign a value to the array length
  const length = arr.length;
  // iterate over each element in the array
  for (let outer = 0; outer < length - 1; outer++) {
    // iterate over the each element of the rest of the array
    for (let inner = 0; inner < length - 1 - outer; inner++) {
      // compare the values of each pair.
      const currentElement = arr[inner];
      const nextElement = arr[inner + 1];
      // if the first value is larger than the second, swap them
      if (currentElement > nextElement) {
        arr[inner] = nextElement;
        arr[inner + 1] = currentElement;
      }
    }
  }
  return arr;
}

const array1 = [1, 3, 9, 5, 1, 2];

console.log(bubbleSort(array1));
