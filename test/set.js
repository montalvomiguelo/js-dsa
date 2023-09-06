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

test('unions two sets', (t) => {
  const setA = new Set()
  const setB = new Set()

  setA.add(1)
  setA.add(2)

  setB.add(2)
  setB.add(3)

  t.like(setA.union(setB).values(), [1, 2, 3])
})

test('intersects two sets', (t) => {
  const setA = new Set()
  const setB = new Set()

  setA.add(1)
  setA.add(2)
  setA.add(3)

  setB.add(2)
  setB.add(3)
  setB.add(4)

  t.like(setA.intersection(setB).values(), [2, 3])
})
