import test from 'ava'
import HashTable from '../hash-table.js'

test('hashCode', (t) => {
  const hashTable = new HashTable()
  t.is(hashTable.hashCode('Wes'), 4)
})

test('put', (t) => {
  const hashTable = new HashTable()
  t.is(hashTable.put('Wes', 'Barrel'), true)
})
