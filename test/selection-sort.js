import test from 'ava'
import selectionSort from '../selection-sort.js'

test('selectionSort', (t) => {
  const input = [8, 5, 2, 9, 5, 6, 3]
  const expected = [2, 3, 5, 5, 6, 8, 9]
  const actual = selectionSort(input)
  t.deepEqual(actual, expected)
})
