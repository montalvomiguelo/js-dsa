import test from 'ava'
import HashTableSeparateChaining from '../hash-table-separate-chaining.js'

test('put', (t) => {
  const hashTable = new HashTableSeparateChaining()
  t.is(hashTable.put('Ygritte', 'ygritte@email.com'), true)
})

test('get', (t) => {
  const hashTable = new HashTableSeparateChaining()
  hashTable.put('Ygritte', 'ygritte@email.com')
  hashTable.put('Jonathan', 'jonathan@email.com')
  hashTable.put('Jamie', 'jamie@email.com')
  t.is(hashTable.get('Ygritte'), 'ygritte@email.com')
  t.is(hashTable.get('Jonathan'), 'jonathan@email.com')
  t.is(hashTable.get('Jamie'), 'jamie@email.com')
  t.is(hashTable.get('Miguel'), undefined)
})
