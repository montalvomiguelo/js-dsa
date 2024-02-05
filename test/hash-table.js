import test from 'ava';
import HashTable from '../hash-table.js';

test('hashCode', (t) => {
  const hashTable = new HashTable();
  t.is(hashTable.hashCode('Wes'), 292);
});

test('put', (t) => {
  const hashTable = new HashTable();
  t.is(hashTable.put('Wes', 'Barrel'), true);
});

test('get', (t) => {
  const hashTable = new HashTable();
  hashTable.put('Wes', 'Barrel');
  t.like(hashTable.get('Wes'), {
    key: 'Wes',
    value: 'Barrel',
  });
  t.is(hashTable.get('LA'), undefined);
});

test('remove', (t) => {
  const hashTable = new HashTable();
  hashTable.put('Wes', 'Barrel');
  t.is(hashTable.remove('Wes'), true);
  t.is(hashTable.remove('LA'), false);
});

test('toString', (t) => {
  const hashTable = new HashTable();
  hashTable.put('Wes', 'Barrel');
  t.is(hashTable.toString(), `{292 => [Wes: Barrel]}`);
});
