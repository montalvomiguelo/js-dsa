/** @enum {number} */
const Color = {
  WHITE: 0,
  GRAY: 1,
  BLACK: 2,
};

/**
 * @param {import('./graph').Graph} graph
 * @param {string | number} vertex
 * @description
 * O(v + e) time | O(v) space - where v is the number of vertices and e is the number of edges
 */
export default function bfs(graph, vertex) {
  const queue = [];
  queue.push(vertex);
  const vertices = graph.getVertices();
  /** @type {Object.<string|number, string>} */
  const colors = {};
  /** @type Object.<string, number> */
  const distances = {};
  /** @type Object.<string, string|number|null> */
  const predecessors = {};

  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    distances[vertex] = 0;
    predecessors[vertex] = null;
    colors[vertex] = Color.WHITE;
  }

  while (queue.length) {
    const vertex = queue.shift();
    if (vertex) {
      colors[vertex] = colors.GRAY;
      const adjVertices = graph.getAdjList().get(vertex);
      if (adjVertices) {
        for (let i = 0; i < adjVertices.length; i++) {
          const adjVertex = adjVertices[i];
          if (colors[adjVertex] === Color.WHITE) {
            colors[adjVertex] = Color.GRAY;
            distances[adjVertex] = distances[vertex] + 1;
            predecessors[adjVertex] = vertex;
            queue.push(adjVertex);
          }
        }
      }
      colors[vertex] = Color.BLACK;
    }
  }

  return {
    distances,
    predecessors,
  };
}
