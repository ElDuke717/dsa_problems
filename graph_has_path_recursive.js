const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

// Test the function
console.log(hasPath(graph, 'f', 'k')); // Should return true
console.log(hasPath(graph, 'f', 'j')); // Should return false


/* Explanation
Sure, Nick! This is a simple but elegant recursive solution to check if there's a path from `src` to `dst` in a given directed graph. Let's break it down step by step.

1. **Base Case**: 
   - The function first checks if the source (`src`) is the same as the destination (`dst`). If they are the same, it means we've found a path and returns `true`.
   ```javascript
   if (src === dst) return true;
   ```

2. **Recursive Case**:
   - Then it goes through each neighboring node of the source node (`src`).
   ```javascript
   for (let neighbor of graph[src]) {
   ```
     - It calls itself (`hasPath`) recursively with the neighboring node (`neighbor`) as the new source and the original destination (`dst`).
     ```javascript
     if (hasPath(graph, neighbor, dst) === true) {
       return true;
     }
     ```
     - If any of the recursive calls return `true`, the function returns `true` immediately, indicating that a path exists.

3. **Fallback Return**:
   - If the function loops through all the neighboring nodes and doesn't find a path to the destination, it returns `false`.
   ```javascript
   return false;
   ```

### Execution Flow
Let's say you call `hasPath(graph, 'f', 'k')`. 

- It will first check all neighbors of `'f'` (which are `'g'` and `'i'`).
- Then it will recursively check for a path from `'g'` to `'k'`, and from `'i'` to `'k'`.
- For `'g'`, it only has one neighbor `'h'`, which has no neighbors, so it'll return `false`.
- For `'i'`, it will recursively check `'g'` and `'k'`. Here it finds `'k'` and returns `true`.

So, the function explores each possible path, stopping as soon as it finds a valid one, thanks to the recursive nature of the solution.
*/