# 数据类型

## 一、八种数据类型

即 `Undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`、`BigInt`。

**原始数据类型**
（Undefined、Null、Boolean、Number、String、Symbol、BigInt），存储在栈（stack）的简单数据段，占用空间小、大小固定。

**引用数据类型**
（Function，Object，包括对象、数组、正则表达式）存储在堆（heap），占用空间大、大小不固定。引用数据类型在栈中存储了指针，指针指向堆中实体的起始位置。

::: details 练一练：指针
输出结果是什么？为什么？
```js{4}
const a = { c: 1 };
const b = a;
a.c = 2;
console.log(b.c); // ?
```
:::



## 二、数据类型检测

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

::: code-group
<<< @/../packages/sth/src/dataTypes/instanceOf.ts [源代码：手写 instanceof]
```js [代码应用效果]
import { instanceOf } from 'sth';

instanceOf([], Array); // true
instanceOf({}, Object); // true

// 正确判断原始数据类型
2 instanceof Number; // false
instanceOf(2, Number); // true
```
:::

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
Foo.prototype = new String(); // 改变原型

const foo = new Foo();
 
console.log(foo.constructor === Foo); // false
console.log(foo.constructor === String); // true
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

::: code-group
<<< @/../packages/sth/src/dataTypes/typeOf.ts [源代码：手写 typeof]
```js [代码应用效果]
import { typeOf } from 'sth';

typeOf(2); // number
typeOf(true); // boolean

// 正确判断引用数据类型
typeOf([]); // array
typeOf({}); // object
typeOf(null); // null
typeOf(/a/); // regexp
```
:::