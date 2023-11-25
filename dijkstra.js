/**
 * @param {Array<Array<number>>} graph
 * @param {number} src
 * @description
 * O(v^2) time | O(v) space
 */
export default function dijkstra(graph, src) {
  /** @type {Array<number>} */
  const distances = []
  /** @type {Array<boolean>} */
  const visited = []

  for (let i = 0; i < graph.length; i++) {
    distances[i] = Infinity
    visited[i] = false
  }

  distances[src] = 0

  for (let i = 0; i < graph.length; i++) {
    const u = minDistance(distances, visited)
    visited[u] = true
    for (let v = 0; v < graph.length; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        distances[u] !== Infinity &&
        distances[u] + graph[u][v] < distances[v]
      ) {
        distances[v] = distances[u] + graph[u][v]
      }
    }
  }

  return distances
}

/**
 * @param {Array<number>} distances
 * @param {Array<boolean>} visited
 */
function minDistance(distances, visited) {
  let min = Infinity
  let minIndex = -1

  for (let v = 0; v < distances.length; v++) {
    if (!visited[v] && distances[v] <= min) {
      min = distances[v]
      minIndex = v
    }
  }

  return minIndex
}
