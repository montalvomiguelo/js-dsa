import Dictionary from './dictionary.js';

export class Graph {
  /** @private */
  isDirected;
  /**
   * @private
   * @type {Array<string | number>}
   */
  vertices;
  /**
   * @private
   * @type {Dictionary<string | number, (string | number)[]>}
   */
  adjList;

  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  /**
   * @param {string | number} v
   */
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  /**
   * @param {string | number} v
   * @param {string | number} w
   */
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v)?.push(w);
    if (!this.isDirected) {
      this.adjList.get(w)?.push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      const vertex = this.vertices[i];
      const neighbors = this.adjList.get(vertex);
      s += `${vertex} ->`;
      if (!neighbors) continue;
      for (let j = 0; j < neighbors.length; j++) {
        const neighbor = neighbors[j];
        s += ` ${neighbor}`;
      }
      s += '\n';
    }
    return s;
  }
}
