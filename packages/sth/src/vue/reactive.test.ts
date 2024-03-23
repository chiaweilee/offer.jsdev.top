import { reactive } from './reactive';

test('reactive', () => {
  const state = reactive({ string: 'hello', number: 1, object: { a: 1 }, array: [1] })
  expect(state.string).toBe('hello');
  expect(state.number).toBe(1);
  expect(state.object).toEqual({ a: 1 });
  expect(state.array).toEqual([1]);

  state.string = 'world';
  state.number = 2;
  state.object.a = 2;
  state.object.b = 3;
  state.array.push(2);

  expect(state.string).toBe('world');
  expect(state.number).toBe(2);
  expect(state.object).toEqual({ a: 2, b: 3 });
  expect(state.array).toEqual([1, 2]);
});
