/**
 * @param {Array<Array<number>>} graph
 * @param {number} src
 * @description
 * O(v^2 + e) time | O(v) space
 */
export default function dijkstra(graph, src) {
  /** @type {Array<number>} */
  const distances = new Array(graph.length).fill(Infinity);
  /** @type {Set<number>} */
  const visited = new Set();

  distances[src] = 0;

  while (visited.size < graph.length) {
    const u = minDistance(distances, visited);
    visited.add(u);

    for (let v = 0; v < graph.length; v++) {
      if (visited.has(v)) continue;

      if (graph[u][v] !== 0 && distances[u] + graph[u][v] < distances[v]) {
        distances[v] = distances[u] + graph[u][v];
      }
    }
  }

  return distances;
}

/**
 * @param {Array<number>} distances
 * @param {Set<number>} visited
 */
function minDistance(distances, visited) {
  let min = Infinity;
  let minIdx = -1;

  for (let v = 0; v < distances.length; v++) {
    if (visited.has(v)) continue;

    if (distances[v] <= min) {
      min = distances[v];
      minIdx = v;
    }
  }

  return minIdx;
}
