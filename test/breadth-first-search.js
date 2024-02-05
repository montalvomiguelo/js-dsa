import test from 'ava';
import { Graph } from '../graph.js';
import breadthFirstSearch from '../breadth-first-search.js';

test('works as expected', (t) => {
  const graph = new Graph();
  /** @type {(number | string)[]} */
  const res = [];

  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  vertices.forEach((v) => graph.addVertex(v));

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

  const shortestPathA = breadthFirstSearch(graph, (v) => res.push(v), vertices[0]);

  t.deepEqual(res, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);

  t.deepEqual(shortestPathA, {
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
  });

  const paths = [];
  const vertexA = vertices[0];

  for (let i = 1; i < vertices.length; i++) {
    const vertex = vertices[i];
    let adjVertex = shortestPathA.predecessors[vertex];
    const stack = [vertex];
    const path = [];
    while (adjVertex !== vertexA) {
      stack.push(adjVertex);
      adjVertex = shortestPathA.predecessors[adjVertex];
    }
    stack.push(vertexA);
    while (stack.length) {
      path.push(stack.pop());
    }
    paths.push(path.join(' - '));
  }

  t.deepEqual(paths, [
    'A - B',
    'A - C',
    'A - D',
    'A - B - E',
    'A - B - F',
    'A - C - G',
    'A - D - H',
    'A - B - E - I',
  ]);
});
