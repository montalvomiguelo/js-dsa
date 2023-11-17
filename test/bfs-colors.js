import test from 'ava'
import { Graph } from '../graph.js'
import bfs from '../bfs-colors.js'

test('computes distances and predecessors', (t) => {
  const graph = new Graph()

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

  t.deepEqual(bfs(graph, vertices[0]), {
    distances: {
      A: 0,
      B: 1,
      C: 1,
      D: 1,
      E: 2,
      F: 2,
      G: 2,
      H: 2,
      I: 3,
    },
    predecessors: {
      A: null,
      B: 'A',
      C: 'A',
      D: 'A',
      E: 'B',
      F: 'B',
      G: 'C',
      H: 'D',
      I: 'E',
    },
  })
})
