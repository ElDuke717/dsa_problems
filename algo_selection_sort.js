const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Assume the smallest element is the first element in the unsorted portion
    let minIndex = i;

    // Search for a smaller element in the remaining unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If we found a smaller element, swap it with the first unsorted element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const unsortedArray = [4, 3, 5, 1];
console.log(selectionSort(unsortedArray)); // Output should be [1, 3, 4, 5]

/* Explanation
  Certainly, Nick! Understanding sorting algorithms like selection sort can be pretty crucial when you're diving deeper into computer science and programming.

Here's a breakdown of how the corrected `selectionSort` function works:

### The General Idea

1. Iterate through the array and select the smallest element.
2. Swap it with the first unsorted element.
3. Move the boundary of your sorted and unsorted sections one element to the right.

### Step-by-Step Explanation

1. **Initialization**: The function takes an array `arr` as an argument.

2. **Outer Loop**: This loop goes from `i = 0` to `arr.length - 1`. The element at index `i` is considered the first unsorted element in each iteration.

    ```javascript
    for (let i = 0; i < arr.length; i++) {
    ```

3. **Initialize `minIndex`**: For each iteration of the outer loop, `minIndex` is set to `i`. This assumes the smallest element is the first one in the unsorted section.

    ```javascript
    let minIndex = i;
    ```

4. **Inner Loop**: This loop goes from `j = i + 1` to `arr.length - 1`. The job of this loop is to find the index `minIndex` where the smallest unsorted element exists.

    ```javascript
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    ```

5. **Swap**: After the inner loop finds the smallest element in the unsorted section, we swap this element with the first unsorted element (which is at index `i`).

    ```javascript
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    ```

6. **Return Sorted Array**: Once the outer loop is done running, the array should be sorted. The function returns this sorted array.

    ```javascript
    return arr;
    ```

Absolutely, Nick, you could take that approach to sort the array. The method you're describing is a variant of the standard selection sort, where instead of swapping elements, you find the minimum element in the remaining unsorted section and move it to the beginning.

Here's how that would look in JavaScript:

```javascript
const selectionSortModified = (arr) => {
  let sortedArr = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = Math.min(...arr); // find the minimum element
    sortedArr.push(min); // add it to the sorted array
    arr.splice(arr.indexOf(min), 1); // remove the minimum element from original array
  }

  return sortedArr;
};

const unsortedArray = [4, 3, 5, 1];
console.log(selectionSortModified(unsortedArray)); // Output should be [1, 3, 4, 5]
```

### Points to Note:

1. `Math.min(...arr)` is used to find the minimum element in the array.
2. The `splice` method removes the element at the index where the minimum element is found (`arr.indexOf(min)`).
3. Each minimum element is `push`ed to `sortedArr`.

### Caveats:

1. This approach creates a new sorted array (`sortedArr`) instead of sorting the original array in place.
2. It's computationally more expensive because of the use of `Math.min(...arr)` and `splice` in each iteration.

So while this method would work, it might not be the most time-efficient or memory-efficient way to sort an array, especially for larger arrays. Still, it's a valid approach for certain scenarios.


*/
