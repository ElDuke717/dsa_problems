// This is not as straightforward as a recursive solution  for  depth-first, here's an implementation:

// Declare the function breadthFirstPrint that takes a graph, a source node, and a queue as arguments
const breadthFirstPrint = (graph, source, queue = [source]) =>  {

    // Base case: If the queue is empty, return
    if (queue.length === 0) {
        return;
    }

    // Shift a node from the queue and store it in 'current'
    const current = queue.shift();
    
    // Print the current node
    console.log(current);

    // Iterate over the neighbors of the current node
    for (let neighbor of graph[current]) {
        // Push each neighbor to the queue
        queue.push(neighbor);
    }
    
    // Recursive case: Call the function with the updated queue
    breadthFirstPrint(graph, null, queue);
};

// Define the graph as an adjacency list
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// Call the breadthFirstPrint function starting from node 'a'
breadthFirstPrint(graph, 'a'); // acbedf
