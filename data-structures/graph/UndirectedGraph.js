// Undirected Unweighted Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // @desc:     Add a vertex to the graph
  // @params:   Vertex to be added
  // @cmplx:    O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  // @desc:     Add a edge between two vertices
  // @params:   Vertices to add edge between
  // @cmplx:    O(1)
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this;
  }

  // @desc:     Remove the edge between two vertices
  // @params:   Vertices to remove edge between
  // @cmplx:    O(|E|)
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    return this;
  }

  // @desc:     Remove a vertex from the graph
  // @params:   Vertex to be removed
  // @cmplx:    O(|V| + |E|)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}
