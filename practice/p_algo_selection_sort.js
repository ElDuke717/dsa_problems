// Use the selection sort algorithm to sort the array below.

const selectionSort = (arr) => {
  // outer for loop to iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // assume that the smallest element index is i
    let minIndex = i;
    // nest another for loop to iterate over the rest of the elements
    for (let j = i + 1; j < arr.length; j++) {
      // if the element at arr[j] is less than arr[i], set the minIndex to arr[j]
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //check to make sure that minIndex is not equal to i, then swap elements if they are not equal. Note the shorthand with arrays for swapping elements.
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const array1 = [5, 3, 4, 1, 2];
console.log(selectionSort(array1));
