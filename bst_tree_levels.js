/*
Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.
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

// array levels holds sub arrays
// use breadth first traversal to make an array of each level
// push each level subarray to the levels array
// return levels array

const treeLevelsStack = (root) => {
  // edge case
  if (root === null) return [];
    // declare levels - holds subarrays
  const levels = []; 
  // declare stack, holds nodes
  const stack = [{node: root, levelNum:0}];
  // while loop to iterate through nodes
  while (stack.length > 0) {
    // use a stack approach - pop off each                                                   
    let {node, levelNum } = stack.pop();
    if (levels.length === levelNum) {
        levels.push([ node.val ])
    } else {
        levels[levelNum].push(node.val)
    }
    // add nodes in order depth first
    if (node.right != null) {
        stack.push({node: node.right, levelNum: levelNum + 1 });
    }
    if (node.left != null) {
        stack.push({node: node.left, levelNum: levelNum + 1 });
    }
  }
  return levels
}

console.log(treeLevelsStack(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

const treeLevelsStackQueue = (root) => {
    // edge case
    if (root === null) return [];
      // declare levels - holds subarrays
    const levels = []; 
    // declare stack, holds nodes
    const stack = [{node: root, levelNum:0}];
    // while loop to iterate through nodes
    while (stack.length > 0) {
      // use a stack approach - pop off each                                                   
      let {node, levelNum } = stack.shift();
      if (levels.length === levelNum) {
          levels.push([ node.val ])
      } else {
          levels[levelNum].push(node.val)
      }
      // add nodes in order breadth first
      if (node.left != null) {
        stack.push({node: node.left, levelNum: levelNum + 1 });
    }
      if (node.right != null) {
          stack.push({node: node.right, levelNum: levelNum + 1 });
      }
      
    }
    return levels
  }
  
  console.log(treeLevelsStackQueue(a)); // ->

  
  const treeLevelsStackRecursive = (root) => {
     const levels = [];
     fillLevels(root, levels, 0);
     return levels;
     
  }

  const fillLevels = (root, levels, levelNum) =>  {
    if (root === null) return;

    if (levels.length === levelNum) {
        levels.push([ root.val ])
    } else {
        levels[levelNum].push(root.val);
    }

    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);

  }
  
  console.log(treeLevelsStackRecursive(a)); 

