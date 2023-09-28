import test from 'ava'
import HashTableLinearProbing from '../hash-table-linear-probing.js'

test('put', (t) => {
  const hashTable = new HashTableLinearProbing()
  t.is(hashTable.put('Jonathan', 'jonathan@email.com'), true)
  t.is(hashTable.put('Jamie', 'jamie@email.com'), true)
})
