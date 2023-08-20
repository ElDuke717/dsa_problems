/* Here's an implementation of a bubblesort algorithm with JavaScript
 */

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
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
*/
