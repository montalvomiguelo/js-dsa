/**
 * @param {number[][]} adjMatrix
 * @param {(v: number) => void} callback
 * @param {number} vertex
 */
export default function bfs(adjMatrix, callback, vertex) {
  const queue = [];
  /** @type {Set<number>} */
  const seen = new Set();
  queue.push(vertex);
  seen.add(vertex);
  while (queue.length) {
    const v = /** @type {number} */ (queue.shift());
    callback(v);
    const adjVertices = adjMatrix[v];
    for (let i = 0; i < adjVertices.length; i++) {
      const adjVertex = i;
      if (seen.has(adjVertex)) continue;
      if (adjVertices[adjVertex] === 0) continue;
      queue.push(adjVertex);
      seen.add(adjVertex);
    }
  }
}
