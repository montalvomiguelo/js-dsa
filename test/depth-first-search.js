import test from 'ava'
import Node from '../depth-first-search.js'

test('traverses the graph using the depth-first search approach', (t) => {
  const graph = new Node('A')
  graph.addChild('B').addChild('C').addChild('D')
  graph.children[0].addChild('E').addChild('F')
  graph.children[2].addChild('G').addChild('H')
  graph.children[0].children[1].addChild('I').addChild('J')
  graph.children[2].children[0].addChild('K')

  t.like(graph.depthFirstSearch([]), [
    'A',
    'B',
    'E',
    'F',
    'I',
    'J',
    'C',
    'D',
    'G',
    'K',
    'H',
  ])
})
