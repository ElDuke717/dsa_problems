const insertionSort = (arr) => {
    // Length of the array
    let n = arr.length;
  
    // Outer loop: Iterate through each element in the array, starting from the second element (index 1)
    for (let i = 1; i < n; i++) {
      // `current` will hold the value of the element at the `i`th index, this is the element we're looking to place correctly
      let current = arr[i];
  
      // `j` is a counter that starts at `i-1` and goes backwards to 0, used to compare `current` with previous elements
      let j = i - 1;
  
      // Inner loop: Iterate backwards from `i-1` to 0 to find the correct position for `current`
      // Move elements to the right if they're greater than `current` to make space for it
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; // Move the greater element to the right
        j--; // Move `j` counter backwards
      }
  
      // When the inner loop ends, `j+1` is the correct index where `current` should be placed
      arr[j + 1] = current;
    }
  
    return arr;
  };
  
  const unsortedArray = [12, 11, 13, 5, 6];
  console.log(insertionSort(unsortedArray)); // Output should be [5, 6, 11, 12, 13]
  /* Explanation
Explanation:

    Initialization: A single-element array is always sorted. Therefore, start from the second element (index i = 1).
    Outer Loop: Traverse the array from index 1 to n-1, inclusively. The element at index i is denoted by current.
    Inner Loop: In each iteration, compare current to elements that come before it (arr[0], arr[1], ..., arr[i-1]).
        If current is less than the element at index j, move that element one position to the right (arr[j+1] = arr[j]).
        Continue this process until you reach an element smaller than current or j becomes -1.
    Insert current: Once the inner loop ends, place current at its correct position, which is j + 1.

And there you have it! This is a pretty standard implementation of insertion sort. Hope this helps you understand it better!

  https://tinyurl.com/nhinsertsort

The time complexity of the insertion sort algorithm depends on the input data. Here's the breakdown:

- **Best-case**: \(O(n)\) — This happens when the array is already sorted. In this case, the inner loop never gets executed, making it linear time complexity.
  
- **Average-case**: \(O(n^2)\) — In an average scenario, you would roughly have to go halfway through the inner loop for each element, making it quadratic time complexity.

- **Worst-case**: \(O(n^2)\) — This occurs when the array is sorted in reverse order, requiring the maximum number of comparisons and swaps for each element in the array.

So, the time complexity varies from linear (\(O(n)\)) to quadratic (\(O(n^2)\)) depending on the data. However, for most practical purposes and random datasets, it's often considered to be \(O(n^2)\).

Insertion sort is generally more efficient on smaller datasets or nearly sorted arrays but is less suitable for larger, unsorted datasets where algorithms like quicksort or mergesort would be more appropriate due to their \(O(n \log n)\) time complexity.

  */