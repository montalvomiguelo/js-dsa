import test from 'ava'
import hasSingleCycle from '../single-cycle-check.js'

test('returns a boolean representing whether the jumps in the array form a single cycle', (t) => {
  t.truthy(hasSingleCycle([2, 3, 1, -4, -4, 2]))
})
