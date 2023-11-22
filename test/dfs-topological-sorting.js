import test from 'ava'
import { Graph } from '../graph.js'
import dfs from '../dfs-topological-sorting.js'

test('returns the expected results', (t) => {
  const graph = new Graph()
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  /** @type {(number | string)[]} */
  const list = []

  for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i])
  }

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

  const results = dfs(graph, (v) => list.push(v))

  t.deepEqual(list, ['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H'])

  t.deepEqual(results, {
    predecessors: {
      B: 'A',
      E: 'B',
      I: 'E',
      F: 'B',
      C: 'A',
      D: 'C',
      G: 'D',
      H: 'D',
    },
    finishTime: { I: 5, E: 6, F: 8, B: 9, G: 13, H: 15, D: 16, C: 17, A: 18 },
    discoveryTime: { A: 1, B: 2, E: 3, I: 4, F: 7, C: 10, D: 11, G: 12, H: 14 },
  })
})

test('decreasing order of finishing time', (t) => {
  const graph = new Graph(true)
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F']

  for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i])
  }

  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('B', 'D')
  graph.addEdge('B', 'E')
  graph.addEdge('C', 'F')
  graph.addEdge('F', 'E')

  const results = dfs(graph)

  t.deepEqual(results, {
    predecessors: {
      C: 'A',
      F: 'C',
      E: 'F',
      D: 'A',
    },
    finishTime: { A: 10, C: 7, F: 6, E: 5, D: 9, B: 12 },
    discoveryTime: { A: 1, C: 2, F: 3, E: 4, D: 8, B: 11 },
  })

  const list = []

  for (let i = 0; i < vertices.length; i++) {
    let max = 0
    let maxIdx = -1
    for (let j = 0; j < vertices.length; j++) {
      const time = results.finishTime[vertices[j]]
      if (!time) continue
      if (time > max) {
        max = time
        maxIdx = j
      }
    }
    list.push(vertices[maxIdx])
    delete results.finishTime[vertices[maxIdx]]
  }

  t.deepEqual(list, ['B', 'A', 'D', 'C', 'F', 'E'])
})
