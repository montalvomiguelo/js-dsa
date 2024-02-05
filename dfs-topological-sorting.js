/**  @typedef {import('./dictionary').default<string|number, (string|number)[]>} Dictionary */

/**
 * @param {import('./graph').Graph} graph
 * @param {(v: string | number) => void} [callback]
 */
export default function dfs(graph, callback) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const seen = new Set();
  const time = { count: 0 };
  /** @type {Object.<string, string>} */
  const predecessors = {};
  /** @type {Object.<string|number, number|string>} */
  const finishTime = {};
  /** @type {Object.<string|number, number|string>} */
  const discoveryTime = {};
  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    if (seen.has(vertex)) continue;
    helper(vertex, adjList, seen, predecessors, finishTime, discoveryTime, time, callback);
  }
  return { predecessors, finishTime, discoveryTime };
}

/**
 * @param {number | string} vertex
 * @param {Dictionary} adjList
 * @param {Set<string|number>} seen
 * @param {Object.<string|number, string|number>} predecessors
 * @param {Object.<string|number, number|string>} finishTime
 * @param {Object.<string, number>} discoveryTime
 * @param {{count: number}} time
 * @param {(v: string | number) => void} [callback]
 * @description
 * O(v + e) time | O(v) space
 */
function helper(vertex, adjList, seen, predecessors, finishTime, discoveryTime, time, callback) {
  if (callback) callback(vertex);
  seen.add(vertex);
  discoveryTime[vertex] = ++time.count;
  const adjVertices = /** @type {(string|number)[]} */ (adjList.get(vertex));
  for (let i = 0; i < adjVertices.length; i++) {
    const adjVertex = adjVertices[i];
    if (seen.has(adjVertex)) continue;
    predecessors[adjVertex] = vertex;
    helper(adjVertex, adjList, seen, predecessors, finishTime, discoveryTime, time, callback);
  }
  finishTime[vertex] = ++time.count;
}
