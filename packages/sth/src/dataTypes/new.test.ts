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

function IntNumber(a: number) {
  this.b = 2;
  return a;
}

test('new', () => {
  const person: any = New(Person, ['Li Lei', 18]);
  expect(person.name).toBe('Li Lei');
  expect(person.age).toBe(18);
  expect(person.introduce()).toBe('My name is Li Lei, 18 years old.');

  const object: any = New(PlainObject, [1]);
  expect(object.a).toBe(1);
  expect(object.b).toBe(undefined);

  const number: any = New(IntNumber, [1]);
  expect(number).toEqual({ b: 2 });
});
