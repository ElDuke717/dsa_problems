/* Here's an implementation of a bubblesort algorithm with JavaScript
 */

function bubbleSort(arr) {
  // Get the length of the array
  const arrayLength = arr.length;

  // Outer loop: go through each element of the array
  for (let outer = 0; outer < arrayLength - 1; outer++) {
    // Inner loop: go through the unsorted part of the array
    for (let inner = 0; inner < arrayLength - outer - 1; inner++) {
      // Get the elements we want to compare
      const currentElement = arr[inner];
      const nextElement = arr[inner + 1];

      // Check if they're in the wrong order
      if (currentElement > nextElement) {
        // Swap them
        arr[inner] = nextElement;
        arr[inner + 1] = currentElement;
      }
    }
  }
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Unsorted array:', unsortedArray);

bubbleSort(unsortedArray);

console.log('Sorted array:', unsortedArray);

/* Explanation
In this example, the bubbleSort function takes an array as an input and sorts it using the Bubble Sort algorithm. The algorithm works by repeatedly stepping through the list of elements to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. This process is repeated for each element until the entire array is sorted.

The unsortedArray contains the elements to be sorted. After applying the bubbleSort function, you'll see the sorted array in the console output.

This is algorithm is not efficient and has a worse case time complexity of O(n^2).

More efficient alternatives are Quick Sort, Merge Sort and Heap Sort

Here is a link to the python tutor visualization of the algorithm: https://tinyurl.com/nhbubsort
*/
