import { typeOf } from './typeOf';

test('typeOf', () => {
  expect(typeOf(2)).toBe('number');
  expect(typeOf(true)).toBe('boolean');
  expect(typeOf('str')).toBe('string');
  expect(typeOf(undefined)).toBe('undefined');
  expect(typeOf(Symbol())).toBe('symbol');
  expect(typeOf(BigInt(1))).toBe('bigint');
  expect(typeOf(function () {})).toBe('function');
  expect(typeOf([])).toBe('array');
  expect(typeOf({})).toBe('object');
  expect(typeOf(null)).toBe('null');
  expect(typeOf(/a/)).toBe('regexp');
});
