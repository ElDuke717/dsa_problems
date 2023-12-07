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


Heap Sort is an efficient sorting algorithm that uses a binary heap data structure to manage information. The heap is a specialized tree-based data structure that satisfies the heap property. Heap Sort works well for data sets that may not fit entirely in memory, making it useful for large data sets.

Here's how Heap Sort generally works:
Step-by-Step Breakdown

    Building the Heap:
        First, we transform the array into a max-heap (a complete binary tree where each parent node has a value greater than or equal to its children).
        This is done using a process called "heapification."

    Heap Sort:
        After building the max heap, the largest element will be at the root.
        We swap it with the last element in the array (which is the last leaf in the heap tree structure).
        Then we exclude the last element (the largest element) from the heap and "heapify" the root again.
        We repeat this process, swapping the root with the last element, excluding it from the heap, and then "heapifying" the root until the heap size reduces to 1.

    Result:
        At this point, the array is sorted.

Detailed Steps

    Heapify: Given an array and an index i into the array, "heapify" ensures that the subtree rooted at i satisfies the heap property. If it doesn't, "heapify" swaps arr[i] with one of its children and recurses downwards until the property is restored.

    Building the Heap:
        Starting from the last non-leaf node (n/2 - 1) where n is the number of elements, we call "heapify" for each node going up to the root.
        This constructs a max-heap from an unsorted array in O(n) time.

    Heap Sort:
        Once the max heap is built, the largest element (the root) can be swapped with the last element of the array, effectively putting it in its correct position.
        After the swap, we "heapify" the root again and repeat the process, reducing the heap size each time by one.
        We repeat this until the heap size becomes 1.

The entire sorting operation is done in-place, requiring only a constant amount of extra memory. The time complexity of Heap Sort is O(n log n) for the worst, average, and best cases.


*/
