import test from 'ava';
import insertionSort from '../insertion-sort.js';

test('insertion sort', (t) => {
  const input = [8, 5, 2, 9, 5, 6, 3];
  const expected = [2, 3, 5, 5, 6, 8, 9];
  const actual = insertionSort(input);
  t.deepEqual(actual, expected);
});
