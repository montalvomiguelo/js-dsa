const INF = Number.MAX_SAFE_INTEGER

/**
 * @param {Array<Array<number>>} graph
 * @param {number} src
 * @description
 * O(v^2) time | O(v) space
 */
export default function dijkstra(graph, src) {
  /** @type {Array<number>} */
  const dist = []
  /** @type {Array<boolean>} */
  const visited = []

  for (let i = 0; i < graph.length; i++) {
    dist[i] = INF
    visited[i] = false
  }

  dist[src] = 0

  for (let i = 0; i < graph.length; i++) {
    const u = minDistance(dist, visited)
    visited[u] = true
    for (let v = 0; v < graph.length; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        dist[u] !== INF &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }

  return dist
}

/**
 * @param {Array<number>} dist
 * @param {Array<boolean>} visited
 */
function minDistance(dist, visited) {
  let min = INF
  let minIndex = -1

  for (let v = 0; v < dist.length; v++) {
    if (!visited[v] && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }
  return minIndex
}
