/*
Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.
*/

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  // start at the root, push the value to the array
  // how do we work backwards up the tree? We can't so we'll have to branch out
  // This is like the tree includes problem
  
  // Recursive solution
//   const pathFinder = (root, target) => {
//     // first base case, if root === null, return null
//     if (root === null) return null;
//     // if at target, return root.val
//     if (root.val === target) return [root.val];
    
//     //
//     const leftPath = pathFinder(root.left, target);
//     if (leftPath !== null) {
//       return [root.val, ...leftPath]
//     }
    
//     const rightPath = pathFinder(root.right, target);
//       if (rightPath !== null)
//         return [root.val, ...rightPath]

//     return null;
//   };

  // Faster solution - uses a helper to reverse the array 

    const pathFinder = (root, target) => {
        const result = pathFinderHelper(root, target);
        if (result === null) return null;
        // return the result reversed, so it's in the correct order
        // this keeps it out of the recursive function
        return result.reverse();
    };
  
  const pathFinderHelper = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];
    
    const leftPath = pathFinderHelper(root.left, target);
    if (leftPath !== null) {
      leftPath.push(root.val);
        return leftPath;
    }
    
    const rightPath = pathFinderHelper(root.right, target);
      if (rightPath !== null) {
        rightPath.push(root.val);
        return rightPath;
      }
        

    return null;
  };


  console.log(pathFinder(a, 'e')); // -> [ 'a', 'b', 'e' ]

  /*
  In this code, recursion is used to traverse the binary tree, starting from the root and going down each left and right branch until the target is found or the branch ends.

The variable `leftPath` is a recursive call to `pathFinder` on the left child of the current node (`root.left`). This is where the depth-first search begins. It means the function is called again, but this time with the left child of the current node as the root. It will continue to traverse down the left side of the tree until it either finds the target or hits a leaf node (end of the branch). If it finds the target, it will return an array containing just the target's value. If it doesn't find the target, it will return `null`.

The line `if (leftPath !== null) { return [root.val, ...leftPath] }` is where the array is built up. If `leftPath` isn't `null`, it means the target was found somewhere down the left branch. In this case, it returns a new array with the current node's value (`root.val`) as the first item, and the remaining items being the path to the target found in the left branch (`...leftPath`). The `...` operator is used to spread the values of `leftPath` into the new array. This is essentially "unwrapping" the values from the `leftPath` array into the new array.

As the recursion unwinds (i.e., as each recursive call finishes and returns to the call before it), the `return [root.val, ...leftPath]` line builds up the final array that represents the path from the root to the target. Each recursive call contributes one element to the path array: the value of the node at which that call started.

A similar process happens with `rightPath` if the target isn't found in the left branch, but this time it starts from the right child of the current node.

If neither `leftPath` nor `rightPath` find the target, then `null` is returned, indicating that the target is not present in the tree rooted at the current node.

The `pathFinder` function builds the array using recursion and the array spread syntax (`...`). The process starts when we call `pathFinder` on the root node with a target value. The function then traverses the tree, looking for a node whose value is equal to the target. Once it finds it, it returns an array containing just that value. 

Let's say we're searching for the target value 4, and our binary tree is as follows:

```
    1
   / \
  2   3
 / \
4   5
```

We start at the root node (1), and first check the left child (2). We haven't found our target, so we check its left child (4). Now we've found our target, so the function call `pathFinder(root.left.left, 4)` returns the array `[4]`.

As the recursive call unwinds, the function call `pathFinder(root.left, 4)` receives this array `[4]` as `leftPath`. It then creates a new array, prepends its own node value to it (`2`), and returns `[2, 4]`.

This process continues up the tree. The function call `pathFinder(root, 4)` receives the array `[2, 4]` as `leftPath`, prepends its own node value to it (`1`), and returns `[1, 2, 4]`.

This is the final result. By recursively prepending each node's value as the function unwinds, `pathFinder` builds an array representing the path from the root to the target.

If the target isn't found in the left branch, the same process happens with the right branch. If the target isn't found in either branch, the function returns `null`.
  */
