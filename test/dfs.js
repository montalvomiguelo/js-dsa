import test from 'ava';
import { Graph } from '../graph.js';
import dfs from '../dfs.js';

test('traverses the graph', (t) => {
  const graph = new Graph();
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  /** @type {(number | string)[]} */
  const result = [];

  for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
  }

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'G');
  graph.addEdge('D', 'H');
  graph.addEdge('B', 'E');
  graph.addEdge('B', 'F');
  graph.addEdge('E', 'I');

  dfs(graph, (v) => result.push(v));

  t.deepEqual(result, ['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H']);
});
