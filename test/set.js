import test from 'ava'
import Set from '../set.js'

test('verifies whether the element already exists in the array', (t) => {
  const set = new Set()

  set.add(1)
  set.add(2)

  t.is(set.has(1), true)
  t.is(set.has(3), false)
})

test('adds elements to the set', (t) => {
  const set = new Set()

  t.is(set.add(1), true)
  t.is(set.add(1), false)
})

test('deletes elements from the set', (t) => {
  const set = new Set()

  set.add(1)

  t.is(set.delete(1), true)
  t.is(set.delete(2), false)
})

test('removes all elements from the set', (t) => {
  const set = new Set()

  set.add(1)
  set.add(2)

  set.clear()

  t.is(set.size(), 0)
})

test('returns the number of keys in the set', (t) => {
  const set = new Set()

  set.add(1)
  set.add(2)

  t.is(set.size(), 2)
})

test('returns the values in the set', (t) => {
  const set = new Set()

  set.add(1)
  set.add(10)

  t.like(set.values(), [1, 10])
})
