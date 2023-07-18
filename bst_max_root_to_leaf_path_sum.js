class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// take a depth first approach - add up the result of each node
// push the sum of each node to an array
// return the max of the array


// Here's one potential solution
// const maxPathSum = (root) => {
//   // Base case, if the root doesn't exist or is falsy, return zero
//   if (!root) return 0;

//   // calculate max sum for left and right subtrees
//   // uses recursion to work down the tree
//   const leftMax = Math.max(0, maxPathSum(root.left));
//   const rightMax = Math.max(0, maxPathSum(root.right));

//   // return maximum path sum
//   return root.val + Math.max(leftMax, rightMax);
// };

// PythonTutor solution https://pythontutor.com/render.html#code=class%20Node%20%7B%0A%20%20constructor%28val%29%20%7B%0A%20%20%20%20this.val%20%3D%20val%3B%0A%20%20%20%20this.left%20%3D%20null%3B%0A%20%20%20%20this.right%20%3D%20null%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20a%20%3D%20new%20Node%283%29%3B%0Aconst%20b%20%3D%20new%20Node%2811%29%3B%0Aconst%20c%20%3D%20new%20Node%284%29%3B%0Aconst%20d%20%3D%20new%20Node%284%29%3B%0Aconst%20e%20%3D%20new%20Node%28-2%29%3B%0Aconst%20f%20%3D%20new%20Node%281%29%3B%0A%0Aa.left%20%3D%20b%3B%0Aa.right%20%3D%20c%3B%0Ab.left%20%3D%20d%3B%0Ab.right%20%3D%20e%3B%0Ac.right%20%3D%20f%3B%0A%0A//%20%20%20%20%20%20%203%0A//%20%20%20%20/%20%20%20%20%5C%0A//%20%20%2011%20%20%20%20%204%0A//%20%20/%20%5C%20%20%20%20%20%20%5C%0A//%204%20%20%20-2%20%20%20%20%201%0A%0A//%20take%20a%20depth%20first%20approach%20-%20add%20up%20the%20result%20of%20each%20node%0A//%20push%20the%20sum%20of%20each%20node%20to%20an%20array%0A//%20return%20the%20max%20of%20the%20array%0A%0Aconst%20maxPathSum%20%3D%20%28root%29%20%3D%3E%20%7B%0A%20%20//%20Base%20case,%20if%20the%20root%20doesn't%20exist%20or%20is%20falsy,%20return%20zero%0A%20%20if%20%28!root%29%20return%200%3B%0A%0A%20%20//%20calculate%20max%20sum%20for%20left%20and%20right%20subtrees%0A%20%20//%20uses%20recursion%20to%20work%20down%20the%20tree%0A%20%20const%20leftMax%20%3D%20Math.max%280,%20maxPathSum%28root.left%29%29%3B%0A%20%20const%20rightMax%20%3D%20Math.max%280,%20maxPathSum%28root.right%29%29%3B%0A%0A%20%20//%20return%20maximum%20path%20sum%0A%20%20return%20root.val%20%2B%20Math.max%28leftMax,%20rightMax%29%3B%0A%7D%3B%0A%0Aconsole.log%28maxPathSum%28a%29%29%3B%20//%20-%3E%2018&cumulative=false&curInstr=92&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// Structy solution
const maxPathSum = (root) => {
  // if the root is null, return the smallest possible value
  if (root === null) return -Infinity;
  // if both left and right are null, then it's leaf node, return it's value
  if (root.left === null && root.right === null) return root.val;
  // maxChild is assigned the max value of the path each time it passes
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  
  return root.val + maxChild;
};

console.log(maxPathSum(a)); // -> 18

/**   EXPLANATION OF SOLUTION
Let's break down the code:

```javascript
const maxPathSum = (root) => {
```
We are declaring a function called `maxPathSum` that takes a root node of a binary tree as an argument.

```javascript
  if (root === null) return -Infinity;
```
If the passed node is `null`, meaning we've traversed to an end without a child node in the tree, we return `-Infinity`. This is used as a base case for our recursion and also to ensure we don't try to access properties of `null`.

```javascript
  if (root.left === null && root.right === null) return root.val;
```
If the current node has no child nodes (both `root.left` and `root.right` are `null`), it means we've reached a leaf node. For a leaf node, the maximum path sum is the value of the node itself. Hence, we return `root.val`.

```javascript
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
```
This line of code is where the recursion occurs. We make recursive calls to `maxPathSum()` for both the left and right child of the current node. This allows us to explore all paths in the tree from the current node. We use `Math.max()` to select the larger of the two sums. This effectively means we're selecting the path (either left or right) that yields the maximum sum.

```javascript
  return root.val + maxChild; 
};
```
Finally, we return the sum of the current node value (`root.val`) and the maximum sum obtained from either of its subtrees (`maxChild`). This represents the maximum path sum from the current node downwards.

This function will return the maximum path sum in the binary tree starting from the root node down to a leaf. It's worth noting that the function assumes all node values are non-negative, as it returns `-Infinity` when `root` is `null`. If negative values can be present in the tree, adjustments would need to be made to this code.

The solution's time complexity is O(n)
*/