/*
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf stack in left-to-right order.
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

// iterate through the stack
// if a node has current.left and current.right as null, then push it to and array
// return the array

const leafList = (root) => {
    // edge case
    if (root === null) return 0;
    // stack array holds stack
    const stack = [root];

    const leaves = [];

    // use while loop to iterate through stack
    while (stack.length > 0) {
      const current = stack.pop();
      
      if (current.right === null && current.left === null) {
             leaves.push(current.val);
      }

      if (current.right !== null) {
          stack.push(current.right);
      }
      if (current.left !== null) {
          stack.push(current.left);
      }
    }
    return leaves
  }



console.log(leafList(a)); // -> [ 'd', 'e', 'f' ] 