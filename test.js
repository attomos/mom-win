import test from 'ava';
import getCombination from './src/get-combination';

test('combination 1234 with 1 element', (t) => {
  const str = '1234';
  const n = 1;
  const value = getCombination(str, n);
  t.deepEqual(value, ['1', '2', '3', '4']);
});

test('combination 1234 with 2 element', (t) => {
  const str = '1234';
  const n = 2;
  const value = getCombination(str, n);
  t.deepEqual(value, ['12', '13', '14', '23', '24', '34']);
});

test('combination 1234 with 3 element', (t) => {
  const str = '1234';
  const n = 3;
  const value = getCombination(str, n);
  t.deepEqual(value, ['123', '124', '134', '234']);
});

test('combination 1234 with 4 element', (t) => {
  const str = '1234';
  const n = 4;
  const value = getCombination(str, n);
  t.deepEqual(value, ['1234']);
});

test('combination 1234 with 5 element', (t) => {
  const str = '1234';
  const n = 5;
  const value = getCombination(str, n);
  t.deepEqual(value, []);
});

test('combination 1234 with 0 element', (t) => {
  const str = '1234';
  const n = 0;
  const value = getCombination(str, n);
  t.deepEqual(value, [[]]);
});
