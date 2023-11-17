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
    const vertex = queue.shift()
    if (vertex && !seen.has(vertex)) {
      callback(vertex)
      const neighbors = graph.getAdjList().get(vertex)
      seen.add(vertex)
      if (neighbors) {
        queue.push(...neighbors)
      }
    }
  }
}
