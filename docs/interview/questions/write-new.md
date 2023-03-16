::: code-group
<<< @/../packages/sth/src/dataTypes/new.ts [源代码：手写 new]
```js [代码效果]
import { New } from 'sth';

function Person(name: string, age: number) {
  this.name = name;
  this.age = age;
  this.introduce = function (): string {
    return 'My name is ' + this.name + ', ' + this.age + ' years old.';
  };
}

const person: any = New(Person, ['Li Lei', 18]);
person.name ; // 'Li Lei'
person.age; //18
person.introduce(); // 'My name is Li Lei, 18 years old.'

function PlainObject(a: any) {
  this.b = 2;
  return {
    a,
  };
}

const object: any = New(PlainObject, [1]);
object.a; // 1

function IntNumber(a: number) {
  this.b = 2;
  return a;
}

const number = new IntNumber(1);
number; // { b: 2 }
```
:::
