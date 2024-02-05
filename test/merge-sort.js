import test from 'ava';
import mergeSort from '../merge-sort.js';

test('sorts the array', (t) => {
  const input = [8, 5, 2, 9, 5, 6, 3];
  const expected = [2, 3, 5, 5, 6, 8, 9];
  const actual = mergeSort(input);
  t.deepEqual(actual, expected);
});
