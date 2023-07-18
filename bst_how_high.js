/*
Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.

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


// Traverse the tree, breadth first
// if there is a node left node and a right node, increase the depth
// if there is only a left node or a right node, increase the depth
// return the depth

const howHighBreadthFirst = (node) => {
    if (node === null) return -1
   // depth keeps track of the height
   let depth = 0
   // declare queue to hold nodes, nodes are objects with depth property
   const queue = [{node: node, depth: 0}];
   // run a while loop to go through nodes and increment depth
   while (queue.length) {
    let current = queue.shift();
    depth = current.depth; 

    if (current.node.right) {
        queue.push({ node: current.node.right, depth: current.depth + 1})
    }
    if (current.node.left) {
        queue.push({ node: current.node.left, depth: current.depth + 1})
    }
   }
   return depth;

};


console.log(howHighBreadthFirst(a)); // -> 2
console.log(howHighBreadthFirst(null)) // -1 


const g = new Node('g');
const h = new Node('h');

g.right = h;

//      g
//       \
//        h

console.log(howHighBreadthFirst(g)); // -> 1


const howHighDepthFirst = (node) => {
    if (node === null) return -1

    let stack = [{node: node, depth: 0}];
    let maxDepth = 0;

    while (stack.length > 0) {
        let current = stack.pop();
        let currentNode = current.node;
        let depth = current.depth;

        maxDepth = Math.max(maxDepth, depth);

        if (currentNode.left) {
            stack.push({node: currentNode.left, depth: depth + 1});
        }
        if (currentNode.right) {
            stack.push({node: currentNode.right, depth: depth + 1});
        }
    }
    return maxDepth;
};

console.log(howHighDepthFirst(a)); // -> 2
console.log(howHighDepthFirst(null)) // -1 
console.log(howHighDepthFirst(g)); // -> 1

const howHighRecursiveDFS = (node) => {
    if (node === null) return -1;

    // compute the depth of each subtree
    let left = howHighRecursiveDFS(node.left);
    let right = howHighRecursiveDFS(node.right);

    // return the maximum of these plus one (for the current node)
    // 1 is added, so either cancels value to zero or is negative 1
    // since we're taking max, 1 will be passed on when -1 is cancelled out
    return Math.max(left, right) + 1;
};

console.log(howHighRecursiveDFS(a)); // -> 2
console.log(howHighRecursiveDFS(null)) // -1 
console.log(howHighRecursiveDFS(g)); // -> 1