import test from 'ava'
import HashTable from '../hash-table.js'

test('loseloseHashCode', (t) => {
  const hashTable = new HashTable()
  t.is(hashTable.loseloseHashCode('Wes'), 4)
})
