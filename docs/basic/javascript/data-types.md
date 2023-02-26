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
Object.prototype.toString.call(function(){}); // [object Function]
Object.prototype.toString.call({}); // [object Object]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
```

注意：Array、 function 等类型作为 Object 的实例，都重写了 toString 方法。

```js
({}).toString(); // [object Object]
Object.prototype.toString.call({}); // [object Object]

([1]).toString(); // 1 // [!code warning]
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
Object.prototype.toString.call(obj).slice(8,-1) === 'Object';
```

::: info 小提示
可以用前面手写的 typeof
```js
import { typeOf } from 'sth';
typeOf(obj) === 'object';
```
:::

## undefined 和 null

### undefined

undefined 代表未定义。

### null

null 代表空对象，可以作为初始化赋值变量。

undefined 不是保留字，可以作为变量名。但这样做很危险，会影响对 undefimed 值的判断。

### void 0

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

> 思考：是否可以用 !isNaN() 检查一个变量是否为数字

## 类型转换
### 转数值

为了将值转换为相应的基本类型值，抽象操作 ToPrimitive 会首先（通过内部操作 DefaultValue）检查该值是否有valueOf()方法。如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。

如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。

* Undefined 类型的值转换为 NaN。

```js
Number(undefined); // NaN
isNaN(undefined); // true
```

* Null 类型的值转换为 0。

```js
Number(null); // 0
isNaN(null); // false
```

* Boolean 类型的值，true 转换为 1，false 转换为 0。

```js
Number(true); // 1
Number(false); // 0
```

* String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。

```js
Number(''); // 0
Number('1'); // 1
Number('a'); // NaN
```

* 对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。

```js
Number([]); // 0
Number({}); // NaN

Number([1]); // 1
Number([1, 2]); // NaN
Number([true]); // NaN
```

### 转字符串

* null 转换为 'null'，undefined 转换为 'undefined'。

```js
String(null); // 'null'
String(undefined); // 'undefined'
```

* Boolean 类型，true 转换为 "true"，false 转换为 "false"。

```js
String(true); // 'true'
String(false); // 'false'
```

* Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。

```js
String(1); // 1
String(Number.MAX_VALUE); // '1.7976931348623157e+308'
String(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

* 对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）来返回内部属性 [[Class]] 的值，如"[object Object]"。如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值。

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

```js
const a = {};
a > 2; // false

a.valueOf() ;// 先valueOf，得到 {}
a.toString(); // 再 toString，得到 [object Object]
Number(a.toString()); // NaN，根据 < 和 > 操作符的规则，要转换成数字
NaN > 2; // false
```

```js
const a = {};
const b = {};
a + b; // [object Object][object Object]

// 逻辑
a.valueOf(); // 先 valueOf，得到 {}
a.toString(); // 再 toString，得到 [object Object]
b.valueOf(); // 同理，{}
b.toString(); // 同理，[object Object]
a + b; // [object Object][object Object]
```