/*
has path

Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

const hasPath = (graph, src, dst) => {
  // Add a stack with the src node
  const stack = [src];

  // Create a set to keep track of visited nodes
  const visited = new Set();

  // Use a while loop to traverse the nodes
  while (stack.length > 0) {
    // Pop the top node from the stack
    const current = stack.pop();

    // Mark it as visited
    visited.add(current);

    // Check if we have reached the destination node
    if (current === dst) {
      return true;
    }

    // Loop over each neighbor of the current node
    for (let neighbor of graph[current]) {
      // Only add the node to the stack if it hasn't been visited yet
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
  // If we've exhausted all paths and haven't found the destination, return false
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
