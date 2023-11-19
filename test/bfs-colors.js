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

test('shortest path', (t) => {
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

  const shortestPathA = bfs(graph, vertices[0])

  let actual = []
  const fromVertex = vertices[0]

  for (let i = 1; i < vertices.length; i++) {
    /** @type {string|number|null} */
    let toVertex = vertices[i]
    const stack = []
    do {
      stack.push(toVertex)
      if (toVertex) toVertex = shortestPathA.predecessors[toVertex]
    } while (toVertex !== fromVertex)
    stack.push(fromVertex)
    let result = [stack.pop()]
    while (stack.length) {
      result.push(stack.pop())
    }
    actual.push(result.join(' - '))
  }

  t.deepEqual(actual, [
    'A - B',
    'A - C',
    'A - D',
    'A - B - E',
    'A - B - F',
    'A - C - G',
    'A - D - H',
    'A - B - E - I',
  ])
})
