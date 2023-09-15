// Function to "heapify" a subtree rooted at node i
// n is the total size of the array
const heapify = (arr, n, i) => {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // Check if left child exists and is greater than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Check if right child exists and is greater than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest is not root
  if (largest !== i) {
    // Swap
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the subtree rooted at the new largest
    heapify(arr, n, largest);
  }
};

const heapSort = (arr) => {
  const n = arr.length;

  // Build the heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i >= 0; i--) {
    // Move current root (largest element) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }
};

// Test the function
const testArr = [12, 11, 13, 5, 6, 7];
console.log('Unsorted array:', testArr);

heapSort(testArr);
console.log('Sorted array:', testArr);

/*  Explanation
Here's a quick breakdown:

    heapify: This function takes an array and two indices, n and i, and turns the subtree rooted at index i into a heap. If the subtree is already a heap but the element at i is smaller than its children, the function swaps arr[i] with its largest child and recurses down the tree.

    heapSort: This function sorts the array in place.
        First, it turns the whole array into a max heap.
        Then it swaps the largest element (the root of the heap) with the last element, effectively placing the largest element in its final sorted position.
        Finally, it "heapifies" the remaining n-1 elements and repeats the process.
*/
