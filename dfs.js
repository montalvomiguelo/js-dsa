/**  @typedef {import('./dictionary').default<string|number, (string|number)[]>} Dictionary */

/**
 * @param {import('./graph').Graph} graph
 * @param {(v: string | number) => void} callback
 */
export default function dfs(graph, callback) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const seen = new Set();
  const vertex = vertices[0];
  helper(vertex, callback, adjList, seen);
}

/**
 * @param {number | string} vertex
 * @param {(v: string | number) => void} callback
 * @param {Dictionary} adjList
 * @param {Set<string|number>} seen
 */
function helper(vertex, callback, adjList, seen) {
  callback(vertex);
  seen.add(vertex);
  const adjVertices = adjList.get(vertex);
  if (!adjVertices) return;
  for (let i = 0; i < adjVertices.length; i++) {
    const adjVertex = adjVertices[i];
    if (seen.has(adjVertex)) continue;
    helper(adjVertex, callback, adjList, seen);
  }
}
