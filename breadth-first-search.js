/**
 * @param {import('./graph').Graph} graph
 * @param {(v: (string | number)) => void} callback
 * @description
 * O(v * e) time | O(v) space - where v is the number of vertices and e is the number of edges
 */
export default function breadthFirstSearch(graph, callback) {
  const vertices = graph.getVertices()
  const queue = []
  const seen = new Set()
  queue.push(vertices[0])

  while (queue.length) {
    const vertice = queue.shift()
    if (vertice && !seen.has(vertice)) {
      callback(vertice)
      const neighbors = graph.getAdjList().get(vertice)
      seen.add(vertice)
      if (neighbors) {
        queue.push(...neighbors)
      }
    }
  }
}
