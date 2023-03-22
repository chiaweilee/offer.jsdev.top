import { New } from './new';

function Person(name: string, age: number) {
  this.name = name;
  this.age = age;
  this.introduce = function (): string {
    return 'My name is ' + this.name + ', ' + this.age + ' years old.';
  };
}

function PlainObject(a: any) {
  this.b = 2;
  return {
    a,
  };
}

function Return(a: number) {
  this.b = 2;
  return a;
}

test('new', () => {
  const person: any = New(Person, 'Li Lei', 18);
  expect(person.name).toBe('Li Lei');
  expect(person.age).toBe(18);
  expect(person.introduce()).toBe('My name is Li Lei, 18 years old.');

  const object: any = New(PlainObject, 0);
  expect(object.a).toBe(0);
  expect(object.b).toBe(undefined);

  expect(New(Return, 0)).toEqual({ b: 2 });
  expect(New(Return, null)).toEqual({ b: 2 });
  expect(New(Return, undefined)).toEqual({ b: 2 });
  expect(New(Return, /a/)).toEqual(/a/);
  expect(New(Return, [])).toEqual([]);
  expect(New(Return, PlainObject)).toBe(PlainObject);

  expect(() => {
    New(null, PlainObject)
  }).toThrow();
});
