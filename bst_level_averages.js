/*
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.
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


  
  const levelAverages = (root) => {
    // edge case
    if (root === null) return [];
      // declare levels - holds subarrays
    const levels = []; 
    // declare stack, holds nodes,
    const stack = [{node: root, levelNum:0}];
    //console.log(stack)
    // while loop to iterate through nodes
    while (stack.length > 0) {
      // use a stack approach - pop off each                                                   
      let {node, levelNum } = stack.pop();
            // if the levels array length is equal to levelNum, push the node value to the level array
      // this is where we should increment the numerator?
      if (levels.length === levelNum) {
          levels.push([ node.val ])
      } else {
        // else, push the node value to the subarray at index that corresponds to current level
          levels[levelNum].push(node.val);        
      }
      // add nodes in order depth first
      if (node.right != null) {
          stack.push({node: node.right, levelNum: levelNum + 1 });
      }
      if (node.left != null) {
          stack.push({node: node.left, levelNum: levelNum + 1 });
      }
    }
    // calculate the average of each level, mapping over each value and returning the 
    // resulting array
    return levels.map(x=> x.reduce((a,b)=> a + b)/x.length)
  }

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ] 

/*
The time complexity of the provided solution is O(n), where n is the number of nodes in the tree.

This is because the algorithm visits each node exactly once, irrespective of its level in the tree. The operations within the loop - pushing a node value to an array, and adding child nodes to the stack - are generally considered constant time operations.

The final step of the function, where it maps over the `levels` array to compute the average, would also be O(n), as each element in the `levels` array corresponds to a node in the tree, and it computes a simple average for each level.

Thus, the overall time complexity remains O(n), because the O(n) operations dominate any other smaller operations.

The space complexity is also O(n), because in the worst-case scenario, the stack and the levels array together could store all nodes of the tree at once (consider a skewed tree where every node only has one child). The stack would contain the path from root to a leaf, and the levels array would contain all the sibling nodes at each level, which together would add up to n nodes.
*/

const treeLevelsAverageRecursive = (root) => {
    const levels = [];
    fillLevels(root, levels, 0);
    return levels.map(x=> x.reduce((a,b)=> a + b)/x.length);
    
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

 console.log(treeLevelsAverageRecursive(a));
