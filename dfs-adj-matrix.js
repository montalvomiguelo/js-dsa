/**
 * @param {number[][]} adjMatrix
 * @param {(v: number) => void} callback
 */
export default function dfs(adjMatrix, callback) {
  const seen = new Set();
  const vertex = 0;
  dfsVisit(vertex, callback, seen, adjMatrix);
}

/**
 * @param {number} vertex
 * @param {(v: number) => void} callback
 * @param {Set<number>} seen
 * @param {number[][]} adjMatrix
 */
function dfsVisit(vertex, callback, seen, adjMatrix) {
  seen.add(vertex);
  callback(vertex);
  const adjVertices = adjMatrix[vertex];
  for (let i = 0; i < adjVertices.length; i++) {
    const adjVertex = i;
    if (adjVertices[adjVertex] === 0) continue;
    if (seen.has(adjVertex)) continue;
    dfsVisit(adjVertex, callback, seen, adjMatrix);
  }
}
