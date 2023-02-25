---
reference:
  - title: 「2021」高频前端面试题汇总之JavaScript篇（上）
    href: https://juejin.cn/post/6940945178899251230
    site: CUGGZ - 稀土掘金
---

# 数据类型

## 八种数据类型

即 `Undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`、`BigInt`。

**原始数据类型**
（Undefined、Null、Boolean、Number、String、Symbol、BigInt），存储在栈（stack）的简单数据段，占用空间小、大小固定。

**引用数据类型**
（Function，Object，包括对象、数组、正则表达式）存储在堆（heap），占用空间大、大小不固定。引用数据类型在栈中存储了指针，指针指向堆中实体的起始位置。

::: info 练一练
输出结果是什么？为什么？
```js{4}
const a = { c: 1 };
const b = a;
a.c = 2;
console.log(b.c); // ?
```
:::



## 数据类型检测

### typeof

```js
typeof 2; // number
typeof true; // boolean
typeof 'str'; // string
typeof function(){}; // function
typeof undefined; // undefined
typeof Symbol(); // symbol
typeof BigInt(1); // bigint

typeof []; // object
typeof {}; // object
typeof null; // object
typeof /a/; // object
```

数组、对象、null 和正则表达式都会被判断为 object。

> 思考：如何判断数组、对象、null 和正则表达式？

### instanceof

instanceof 只能正确判断引用类型数据，可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
其内部运行机制是判断在其原型链中能否找到该类型的原型。

```js
// instanceof 无法正确判断原始数据类型
2 instanceof Number; // false
true instanceof Boolean; // false
'str' instanceof String; // false

[] instanceof Array; // true
(function(){}) instanceof Function; // true
{} instanceof Object; // true
/a/ instanceof RegExp; // true
```

注意：所有的对象最终都是由 Object 构造的

```js
[] instanceof Object; // true
({}) instanceof Object; // true
(function(){}) instanceof Object; // true
/a/ instanceof Object; // true
```

### 高频面试题：手写 instanceof

提示：原型链最终的指向是 Object 的 prototype, 即 null。

<!--@include: ../../interview/questions/write-instanceof.md-->

### constructor

```js
(2).constructor === Number; // true
true.constructor === Boolean; // true
`str`.constructor === String; // true
[].constructor === Array; // true
(function(){}).constructor === Function; // true
({}).constructor === Object; // true
/a/.constructor === RegExp; // true
```

注意：如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了。

```js{2}
function Foo(){};
Foo.prototype = new Array(); // 改变原型

const foo = new Foo();
 
foo.constructor === Foo; // false
foo.constructor === Array; // true
Array.prototype.isPrototypeOf(foo);; // true
```

### Object.prototype.toString.call()

```js
Object.prototype.toString.call(2); // [object Number]
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call('str'); // [object String]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(function(){}); // [object Function]
Object.prototype.toString.call({}); // [object Object]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
```

注意：Array、 function 等类型作为 Object 的实例，都重写了 toString 方法。

```js{4}
({}).toString(); // [object Object]
Object.prototype.toString.call({}); // [object Object]

([1]).toString(); // 1
Object.prototype.toString.call([1]); // [object Array]
```

### 高频面试题：手写 typeof

<!--@include: ../../interview/questions/write-typeof.md-->

### 判断数组

```js
// 不可靠，原型链有可能被改写过
obj instanceof Array;
Array.prototype.isPrototypeOf(obj);
obj.__proto__ === Array.prototype;

// 可靠，仅 ES5 下支持
Array.isArray(obj);

// 可靠
Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
```

还可以用前面手写的 typeof

```js
import { typeOf } from 'sth';
typeOf(obj) === 'array';
```

### 判断对象

```js
// 不可靠
obj instanceof Object;
// [] instanceof Object === true;
// (function(){}) instanceof Object === true;

// 不可靠，原型链有可能被改写过
obj.__proto__ === Object.prototype;

// 可靠
Object.prototype.toString.call(obj).slice(8,-1) === 'Object';
```

还可以用前面手写的 typeof

```js
import { typeOf } from 'sth';
typeOf(obj) === 'object';
```

## undefined 和 null

## NaN 和 isNaN