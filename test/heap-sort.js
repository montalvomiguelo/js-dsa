import test from 'ava';
import heapSort from '../heap-sort.js';

test('heap sort', (t) => {
  const array = [12, 11, 13, 5, 6, 7];
  heapSort(array);
  t.deepEqual(array, [5, 6, 7, 11, 12, 13]);
});
