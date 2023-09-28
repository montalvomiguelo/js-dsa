import test from 'ava'
import HashTableLinearProbing from '../hash-table-linear-probing.js'

test('put', (t) => {
  const hashTable = new HashTableLinearProbing()
  t.is(hashTable.put('Jonathan', 'jonathan@email.com'), true)
  t.is(hashTable.put('Jamie', 'jamie@email.com'), true)
})

test('get', (t) => {
  const hashTable = new HashTableLinearProbing()
  hashTable.put('Jonathan', 'jonathan@email.com')
  hashTable.put('Jamie', 'jamie@email.com')
  t.is(hashTable.get('Jonathan'), 'jonathan@email.com')
  t.is(hashTable.get('Jamie'), 'jamie@email.com')
})
