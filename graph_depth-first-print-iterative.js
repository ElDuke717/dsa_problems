// Declare the function depthFirstPrint that takes a graph and a source node as arguments
const depthFirstPrint = (graph, source) =>  {

    // Initialize a stack with the source node
    const stack = [source];
    
    // Continue as long as there are nodes in the stack
    while (stack.length > 0) {

        // Pop a node from the stack and store it in 'current'
        const current = stack.pop();
        
        // Print the current node
        console.log(current);

        // Iterate over the neighbors of the current node
        for (let neighbor of graph[current]) {

            // Push each neighbor to the stack
            stack.push(neighbor);
        }
    }
};

// Define the graph as an adjacency list
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// Call the depthFirstPrint function starting from node 'a'
depthFirstPrint(graph, 'a');
