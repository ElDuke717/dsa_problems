/*
Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12


// use depth-first search approach with a counter
// start with root in nodes array
// pop of each node
// if val equals target, increment the counter

const treeValueCount = (root, target) => {
  // edge case
  if (root === null) return 0;
  // nodes array holds nodes
  const nodes = [root];
  // counts holds counts of target
  let counts = 0;
  // use while loop to iterate through nodes
  while (nodes.length > 0) {
    const current = nodes.pop();
    if (current.val === target) {
        counts += 1;
    }
    if (current.right !== null) {
        nodes.push(current.right);
    }
    if (current.left !== null) {
        nodes.push(current.left);
    }
  }
  return counts
}

console.log(treeValueCount(a,  6)); // -> 3


// const treeValueCountR = (root, target, count = 0) => {
//     if (root === null) return 0;
//     if (root.value === target) { count += 1}
//     const leftValues = treeValueCountR(root.left, target);
//     const rightValues = treeValueCountR(root.right, target);
//     return count;
// }

// console.log(treeValueCountR(a, 6))
