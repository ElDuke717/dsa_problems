// Note that depth first and breadth first are very similar to BSTs in that  breadth first uses a queue to keep track of the nodes visited  and shift to move through them, while depth first uses a stack 
// and the pop method to move through the nodes.


// Declare the function breadthFirstPrint that takes a graph and a source node as arguments
const breadthFirstPrint = (graph, source) =>  {

    // Initialize a queue with the source node
    const queue = [source];
    
    // Continue as long as there are nodes in the queue
    while (queue.length > 0) {

        // Shift a  a node from the queue and store it in 'current'
        const current = queue.shift();
        
        // Print the current node
        console.log(current);

        // Iterate over the neighbors of the current node
        for (let neighbor of graph[current]) {

            // Push each neighbor to the queue
            queue.push(neighbor);
        }
    }
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