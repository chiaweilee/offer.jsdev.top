import { instanceOf } from './instanceOf';

test('instanceOf', () => {
  expect(instanceOf(2, Number)).toBe(true);
  expect(instanceOf(true, Boolean)).toBe(true);
  expect(instanceOf('str', String)).toBe(true);
  expect(instanceOf(BigInt(1), BigInt)).toBe(true);
  expect(instanceOf(Symbol('a'), Symbol)).toBe(true);
  expect(instanceOf([], Array)).toBe(true);
  expect(instanceOf(function () {}, Function)).toBe(true);
  expect(instanceOf({}, Object)).toBe(true);
  expect(instanceOf(/a/, RegExp)).toBe(true);

  expect(instanceOf([], Object)).toBe(true);
  expect(instanceOf(function () {}, Object)).toBe(true);
  expect(instanceOf({}, Object)).toBe(true);
  expect(instanceOf(/a/, Object)).toBe(true);

  expect(instanceOf(2, Boolean)).toBe(false);
  expect(instanceOf(true, Number)).toBe(false);
  expect(instanceOf('str', BigInt)).toBe(false);
  expect(instanceOf(BigInt(1), Symbol)).toBe(false);
  expect(instanceOf(Symbol('a'), String)).toBe(false);
  expect(instanceOf([], Function)).toBe(false);
  expect(instanceOf(function () {}, Array)).toBe(false);
  expect(instanceOf({}, RegExp)).toBe(false);
  expect(instanceOf(/a/, Array)).toBe(false);
});
