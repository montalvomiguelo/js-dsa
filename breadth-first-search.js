/**
 * @param {import('./graph').Graph} graph
 * @param {(v: (string | number)) => void} callback
 * @param {string|number} vertex
 * @description
 * O(v * e) time | O(v) space - where v is the number of vertices and e is the number of edges
 */
export default function breadthFirstSearch(graph, callback, vertex) {
  const queue = []
  const seen = new Set()
  queue.push(vertex)
  /** @type {Object.<string|number, number>} */
  const distances = {}
  /** @type {Object.<string|number, number>} */
  const predecessors = {}

  while (queue.length) {
    const vertex = /** @type {string|number} */ (queue.shift())
    if (!seen.size) {
      distances[vertex] = 0
      predecessors[vertex] = null
    }
    callback(vertex)
    const neighbors = /** @type {(string|number)[]} */ (
      graph.getAdjList().get(vertex)
    )
    for (let i = 0; i < neighbors.length; i++) {
      const adjVertex = neighbors[i]
      if (!seen.has(adjVertex)) {
        distances[adjVertex] = distances[vertex] + 1
        predecessors[adjVertex] = vertex
        queue.push(adjVertex)
        seen.add(adjVertex)
      }
    }
    seen.add(vertex)
  }

  return { distances, predecessors }
}
