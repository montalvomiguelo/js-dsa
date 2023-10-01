import test from 'ava'
import { iterative, recursive } from '../factorial.js'

test('iterative', (t) => {
  t.is(iterative(-1), undefined)
  t.is(iterative(0), 1)
  t.is(iterative(1), 1)
  t.is(iterative(2), 2)
  t.is(iterative(3), 6)
  t.is(iterative(4), 24)
  t.is(iterative(5), 120)
})

test('recursive', (t) => {
  t.is(recursive(-1), undefined)
  t.is(recursive(0), 1)
  t.is(recursive(1), 1)
  t.is(recursive(2), 2)
  t.is(recursive(3), 6)
  t.is(recursive(4), 24)
  t.is(recursive(5), 120)
})
