import test from 'ava'
import { Graph } from '../graph.js'
import breadthFirstSearch from '../breadth-first-search.js'

test('works as expected', (t) => {
  const graph = new Graph()
  /** @type {(number | string)[]} */
  const res = []

  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  vertices.forEach((v) => graph.addVertex(v))

  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('C', 'D')
  graph.addEdge('C', 'G')
  graph.addEdge('D', 'G')
  graph.addEdge('D', 'H')
  graph.addEdge('B', 'E')
  graph.addEdge('B', 'F')
  graph.addEdge('E', 'I')

  breadthFirstSearch(graph, (v) => res.push(v))

  t.deepEqual(res, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'])
})
