/*
Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

You may assume that the input tree is non-empty.
*/

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

// take a recursive, dfs approach to solving the problem
// array paths holds paths
// add helper function dfs 


const allTreePaths = (root, path) => {
  let paths = [];
    const depthFirstValues = (node, path) => {
        // Append the current node's value to the path.
        path.push(node.val);
        // if node.left is null and node.right is null (a leaf node), push path to paths and return
        if (node.left === null && node.right === null) {
            paths.push(path);
            return;
        }
        // If the node has a left child, call dfs with the left child and a copy of the current path.
    if (node.left !== null) {
        depthFirstValues(node.left, path.slice());
      }
      
      // If the node has a right child, call dfs with the right child and a copy of the current path.
      if (node.right !== null) {
        depthFirstValues(node.right, path.slice());
      }
    }
    // call depthFirstValues with the root and empty array passed as arguments
    depthFirstValues(root, [])
    return paths;
}



console.log(allTreePaths(a)); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 

// pythonTutor explanation https://tinyurl.com/yunnpj2b

/*
The function `allTreePaths` uses Depth-First Search (DFS) to find all root-to-leaf paths in a binary tree.

1. It begins by initializing an empty array `paths` which will hold all the paths from root to leaf in the binary tree.

2. The helper function `depthFirstValues` is then defined within `allTreePaths`. It takes a node of the tree and a `path` array as arguments. The `path` array represents the path from the root to the current node.

3. In each call to `depthFirstValues`, it adds the current node's value (`node.val`) to the `path` array.

4. Then it checks if the current node is a leaf node. A node is a leaf node if both its left and right children are null. If the current node is a leaf node, it adds the `path` to the `paths` array and returns, since there are no more nodes to visit on this path.

5. If the current node is not a leaf node, it makes recursive calls to `depthFirstValues` for the left and right children of the current node if they exist. Note that it passes a copy of the `path` array to these recursive calls using `path.slice()`. This is to ensure that the `path` array for one branch of the tree does not affect the `path` array for another branch.

6. Finally, the `allTreePaths` function calls `depthFirstValues` with the root of the tree and an empty array to start the DFS traversal.

7. After the DFS traversal is complete, `allTreePaths` returns the `paths` array, which contains all root-to-leaf paths in the tree.

The time complexity of this function is O(N), where N is the number of nodes in the tree. This is because it visits every node in the tree exactly once.

The space complexity of this function is O(N) in the worst case. This can happen in situations where the tree is a skewed binary tree (each node only has one child) and hence the maximum height of the tree (which is the maximum depth of the recursive call stack) can be N. Also, in the worst-case scenario, if all nodes are leaf nodes, we end up creating N copies of the path. In an average case scenario, the space complexity would be proportional to the height of the tree.

Here is the expected output for your tree:

```javascript
console.log(allTreePaths(a)); // -> [ [ 'a', 'b', 'd' ], [ 'a', 'b', 'e' ], [ 'a', 'c', 'f' ] ]
```

Each subarray represents a unique path from the root to a leaf in the binary tree.
*/