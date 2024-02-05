import test from 'ava';
import dfs from '../dfs-adj-matrix.js';

test('visit all vertices', (t) => {
  const adjMatrix = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
  ];
  /** @type {number[]} */
  const vertices = [];
  dfs(adjMatrix, (v) => vertices.push(v));
  t.deepEqual(vertices, [0, 1, 2, 3]);
});
