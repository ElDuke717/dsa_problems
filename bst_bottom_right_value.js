/*
Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

// use breadth first traversal - queue
// get each layer of the tree
// we want to remove the left first, then the right
// when the queue is on the last element, return the value of that node

const bottomRightValue = (root) => {
   // base case - if root.right is null, return value
   if (root === null) return []
   // traverse down the branch
   const queue = [root]
   // declare right, value to hold right most
   let right = root.right;
   // loop over nodes and build queue and read current
   while (queue.length > 0) {
    // current is element shifted off
    const current = queue.shift()
    // add nodes to the tree
      if (current.left) {
        queue.push(current.left);
      }
      // add right nodes second to make sure they are last to remove
      if (current.right) {
        queue.push(current.right);
      }
      // reassign the value or right
    right = current.val
   }
   return right
}




console.log(bottomRightValue(a)); // -> 1

const i = new Node(1);
const j = new Node(6);
const k = new Node(5);
const l = new Node(3);
const m = new Node(4);
const n = new Node(13);
const o = new Node(2);
const p = new Node(-6);

i.left = j;
i.right = k;
j.left = l;
j.right = m;
k.right = n;
m.left = o;
m.right = p;

//       i(1)
//      /   \
//    j(6)   k(5)
//    /   \     \
//  l(3)  m(4)   n(13)
//    /   \
// o(2)   p(-6)


console.log(bottomRightValue(i))