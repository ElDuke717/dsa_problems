// Note that there is an implicit base case.

const depthFirstPrint = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrint(graph, neighbor);
    }
};

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