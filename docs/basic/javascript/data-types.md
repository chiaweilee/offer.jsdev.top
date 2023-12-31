---
reference:
  - title: 「2021」高频前端面试题汇总之JavaScript篇（上）
    href: https://juejin.cn/post/6940945178899251230
    site: CUGGZ
  - title: 一文读懂js中的隐式类型转换
    href: https://baijiahao.baidu.com/s?id=1686477604928355353&wfr=spider&for=pc
    site: 左道前端
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

## const

const 保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。

基本数据类型的值就保存在变量指向的那个内存地址，因此等同于常量，不能改动。

引用数据类型的变量只是一个指针，指向数据的内存地址，const 只能保证这个指针是固定不变。

```js
const a = {};
a.b = 1;
console.log(a); // {b: 1}
```

## 数据类型检测

### typeof

```js
typeof 2; // number
typeof true; // boolean
typeof 'str'; // string
typeof undefined; // undefined
typeof Symbol(); // symbol
typeof 1n; // bigint
typeof function () {}; // function

typeof []; // object
typeof {}; // object
typeof null; // object
typeof /a/; // object
```

数组、对象、null、正则表达式都会被判断为 object。

::: info 思考
如何正确判断数组、对象、null、正则表达式的类型？
:::

### instanceof

instanceof 可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
其内部运行机制是判断在其原型链中能否找到该类型的原型，所以**只能正确判断引用类型数据**。

```js
// instanceof 无法正确判断原始数据类型
2 instanceof Number; // false
true instanceof Boolean; // false
'str' instanceof String; // false
1n instanceof BigInt; // false
Symbol('a') instanceof Symbol; // false

[] instanceof Array; // true
(function(){}) instanceof Function; // true
{} instanceof Object; // true
/a/ instanceof RegExp; // true
```

注意：所有的对象最终都是由 Object 构造的

```js
[] instanceof Object; // true
({}) instanceof Object; // true
(function () {}) instanceof Object; // true
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
(function () {}).constructor === Function; // true
({}).constructor === Object; // true
/a/.constructor === RegExp; // true
```

注意：如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了。

```js{2}
function Foo(){};
Foo.prototype = new Array(); // 改变原型

const foo = new Foo();

foo.constructor === Foo; // false // [!code error]
foo.constructor === Array; // true // [!code error]
Array.prototype.isPrototypeOf(foo);; // true // [!code error]
```

### Object.prototype.toString.call()

```js
Object.prototype.toString.call(2); // [object Number]
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call('str'); // [object String]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(function () {}); // [object Function]
Object.prototype.toString.call({}); // [object Object]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
```

#### Object.prototype.toString() 和 Object.toString()

数据、函数等类型作为 Object 的实例，都重写了 Object.toString 方法。

```js
[1].toString(); // 1 // [!code warning]
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
Object.prototype.toString.call(obj).slice(8, -1) === 'Array';
```

::: info 小提示
可以用前面手写的 typeof

```js
import { typeOf } from 'sth';
typeOf(obj) === 'array';
```

:::

### 判断对象

```js
// 不可靠
obj instanceof Object;
// [] instanceof Object === true;
// (function(){}) instanceof Object === true;

// 不可靠，原型链有可能被改写过
obj.__proto__ === Object.prototype;

// 可靠
Object.prototype.toString.call(obj).slice(8, -1) === 'Object';
```

::: info 小提示
可以用前面手写的 typeof

```js
import { typeOf } from 'sth';
typeOf(obj) === 'object';
```

:::

## undefined 和 null

undefined 代表未定义。
null 代表空对象，可以作为初始化赋值变量。

undefined 不是保留字，可以作为变量名。但这样做很危险，会影响对 undefimed 值的判断。
可以用 void 0 判断 undefined。

```js
void 0 === undefined; // true
```

## NaN 和 isNaN

### NaN

NaN 是数字类型。

```js
typeof NaN; // number
```

NaN 是唯一一个**非自反**的值，即 `NaN === NaN` 不成立。

```js
NaN === NaN; // false
NaN !== NaN; // true
```

### isNaN

isNaN 判断**是否为 NaN**，它会尝试将值转**换为数值**再判断。

```js
isNaN(null); // false, null 可以转换为 0
isNaN(true); // false, true 可以转换为 1
isNaN(false); // false, false 可以转换为 0
isNaN([]); // false, [] 可以转换为 0
isNaN([1]); // false, [1] 可以转换为 1
isNaN([1, 2]); // true, 转换后为 NaN
isNaN({}); // true，转换后为 NaN
isNaN(undefined); // true
isNaN(NaN); // true
```

> 思考：为什么 isNaN(null) !== isNaN(undefined)

### Number.isNaN

Number.isNaN 和 isNaN 的区别：它直接判断是否为 NaN，不做转换。

```js
// 先转换，再判断
isNaN(undefined); // true
// 不转换，直接判断
Number.isNaN(undefined); // false
```

> 思考：是否可以用 !isNaN() 判断类型是否为数字

## 类型转换

当对象类型进行类型转换时，会调用 JavaScript 内部的 toPrimitive 方法。

- 当期望值为 number 时会调用 valueOf 方法。如果返回的值不是原始值，则继续调用 toString 方法。
- 当期望值为 string 时会调用 toString 方法。如果返回的值不是原始值，则继续调用 valueOf 方法。

### valueOf 方法

```js
[1].valueOf(); // [1]
true.valueOf(); // true
new Date().valueOf(); // 1677469267035
(function () {}).valueOf(); // f (){}
(2).valueOf(); // 2
({}).valueOf(); // {}
'2'.valueOf(); // '2'
/a/.valueOf(); // /a/
```

### toString 方法

```js
[1, 2].toString(); // 1,2
true.toString(); // 'true'
new Date().toString(); // Mon Feb 27 2023 11:42:26 GMT+0800 (China Standard Time)
(function () {}).toString(); // function(){}
(2).toString(); // '2'
({}).toString(); // '[object Object]'}
'2'.toString(); // '2'
/a/.toString(); // '/a/'
```

### 转数值

如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。

- Undefined 类型的值转换为 NaN。

```js
Number(undefined); // NaN
isNaN(undefined); // true
```

- Null 类型的值转换为 0。

```js
Number(null); // 0
isNaN(null); // false
```

- Boolean 类型的值，true 转换为 1，false 转换为 0。

```js
Number(true); // 1
Number(false); // 0
```

- String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。

```js
Number(''); // 0
Number('1'); // 1
Number('a'); // NaN
```

- 对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。

```js
Number([]); // 0
Number({}); // NaN

Number([1]); // 1
Number([1, 2]); // NaN
Number([true]); // NaN
```

### 转字符串

- null 转换为 'null'，undefined 转换为 'undefined'。

```js
String(null); // 'null'
String(undefined); // 'undefined'
```

- Boolean 类型，true 转换为 "true"，false 转换为 "false"。

```js
String(true); // 'true'
String(false); // 'false'
```

- Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。

```js
String(1); // 1
String(Number.MAX_VALUE); // '1.7976931348623157e+308'
String(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

- 对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）来返回内部属性 [[Class]] 的值，如"[object Object]"。如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值。

### 转布尔

假值（falsy）的布尔强制类型转换结果为 false，假值列表以外的都应该是真值。

```js
!!undefined; // false
!!null; // false
!!false; // false
!!+0; // false
!!-0; // false
!!NaN; // false
!!''; // false
```

### 隐式类型转换

#### 算数运算符 +

算数运算符 + 号比较特殊，既可以当做算数运算符做加法，又可以当做字符串连接符。

##### 除 String 外的原始数据类型，作算数运算符。

- 进行算术运算时，原始数据类型转为数字使用 Number() 方法

```js
1 + null; // 1
null + null; // 0
1 + undefined; // NaN
1 + true; // 2
```

##### String 类型及引用数据类型，作字符串链接符

- 非 string 类型会转为 string 类型

```js
[] + []; // ''
[1] + ['a']; // '1a'
[1] + {}; // '1[object Object]'
true + {}; // 'true[object Object]'
undefined + {}; // 'undefined[object Object]'
```

#### 算数运算符 - \* /

- 非数字类型会转为数字类型
- 如果是原始数据类型会调用 Number() 方法进行转换
- 如果是引用数据类型会转换为数值，如果转换后不是数字则会返回 NaN。

```js
2 - '1'; // 1
2 - true; // 1
2 - []; // 2
2 - null; // 2
2 - undefined; // NaN
2 - {}; // NaN

2 * '1'; // 1
2 * {}; // NaN

2 / '1'; // 1
2 / {}; // NaN
```

#### 逻辑运算符 && || !

- 非布尔类型会转为布尔类型

```js
1 && 2; // 2
2 && {}; // {}

1 || 2; // 1
2 || {}; // 2

![]; // false
!NaN; // true
```

#### 比较运算符 == > <

- null == undefined 不会进行转换，总返回 true
- 引用数据类型，会先转换为 string（先调用 valueOf，后调用 toString），再转换为 number
- 如果 == 左右都是引用数据类型，会进行地址比较

```js
'1' == 1; // true
undefined == null; // true
0 == []; // true
[] == []; // false

'2' > 1; // true
undefined > null; // false
0 > []; // false
1 < []; // false
```

- === 不会进行类型转换，直接判断

```js
'1' == -1; // false
undefined === null; // false
0 === []; // false
[] === []; // false
```

## || 和 &&

|| 和 && 都只对第一个值进行条件判断，并根据判断结果返回其中一个值。

|| 对第一个值进行条件判断，如果判断结果为 true 就返回第一个值，为 false 就返回第二个值。

提示：条件判断时，如果不是布尔值就先强制转换为布尔类型，然后再进行条件判断。

```js
1 || 0; // 因为第一个值 1 判断为 true，所以返回第一个值 1
0 || 1; // 因为第一个值 0 判断为 false，所以返回第二个值 1

const a = () => {
  console.log('a');
  return 1;
};
const b = () => {
  console.log('b');
  return 0;
};

a() || b(); // 输出为 a，返回值为 1
b() || a(); // 输出为 b a，返回值为 1
```

&& 对第一个值进行判断，如果判断结果为 true 就返回第二个值，为 false 就返回第一个值。

```js
1 && 0; // 因为第一个值 1 判断为 true，所以返回第一个值 0
0 && 1; // 因为第一个值 0 判断为 false，所以返回第二个值 0

const a = () => {
  console.log('a');
  return 1;
};
const b = () => {
  console.log('b');
  return 0;
};

a() && b(); // 输出为 a b，返回值为 0
b() && a(); // 输出为 b，返回值为 0
```

## == 和 ===

- 双等号（==）进行判断时，如果两边类型不一致，会强制转换类型后再进行比较。
- 三等号（===）进行判断时，如果两边类型不一致，不强制转换类型，直接返回 false。

## Object.is()

Object.is() 一般情况和三等号（===）相同。

```js
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false

const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true
```

Object.is() 处理了一些特殊情况，比如：

```js
0 === -0; // true
+0 === -0; // true // [!code error]
-0 === -0; // true
Object.is(0, -0); // false
Object.is(+0, -0); // false // [!code error]
Object.is(-0, -0); // true
```

```js
NaN === NaN; // false // [!code error]
Object.is(NaN, NaN); // true // [!code error]
```

## BigInt

Number.MAX_SAFE_INTEGER 表示最⼤安全数字，计算结果是 9007199254740991 。超过这个数值范围就会有精度不准的情况，BigInt 就是为了解决此问题。

```js
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true // [!code error]
9007199254740991n + 1n === 9007199254740991n + 2n; // false
BigInt(9007199254740991); // 9007199254740991n
```
