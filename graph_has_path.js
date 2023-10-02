const hasPath = (graph, src, dst) => {
    // todo
  };
  

  const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  hasPath(graph, 'f', 'k'); // true

  const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  hasPath(graph1, 'f', 'j'); // false

  const graph2 = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],  
  };
  
  hasPath(graph2, 'v', 'w'); // true