import test from 'ava'
import dijkstra from '../dijkstra.js'

test('shortest path', (t) => {
  const graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0],
  ]

  t.deepEqual(dijkstra(graph, 0), [0, 2, 4, 6, 4, 6])
})
