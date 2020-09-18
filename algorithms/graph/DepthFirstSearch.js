function depthFirstSearch(startVertex) {
  const result = [];
  const visited = {};
  const adjacencyList = this.adjacencyList;

  // Recursively visit all neighbour vertices
  function dfsRecursive(vertex) {
    // Base case
    if (!vertex) return null;

    // Vertex has been visited and added to result
    visited[vertex] = true;
    result.push(vertex);

    // For each neighbour of the vertex, perform DFS if not visited
    adjacencyList[vertex].forEach((neighbour) => {
      if (!visited[neighbour]) {
        return dfsRecursive(neighbour);
      }
    });
  }

  // Invoke the recursive function and return result
  dfsRecursive(startVertex);
  return result;
}
