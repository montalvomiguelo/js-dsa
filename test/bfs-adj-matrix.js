import test from 'ava'
import bfs from '../bfs-adj-matrix.js'

test('visit all vertices', (t) => {
  const adjMatrix = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
  ]
  /** @type {number[]} */
  const vertices = []
  bfs(adjMatrix, (v) => vertices.push(v), 0)
  t.deepEqual(vertices, [0, 1, 2, 3])
})
