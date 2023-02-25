# 数据类型

## 八种数据类型

即 `Undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`、`BigInt`。

**原始数据类型**
（Undefined、Null、Boolean、Number、String、Symbol、BigInt），存储在栈（stack）的简单数据段，占用空间小、大小固定。

**引用数据类型**
（Function，Object，包括对象、数组、正则表达式）存储在堆（heap），占用空间大、大小不固定。引用数据类型在栈中存储了指针，指针指向堆中实体的起始位置。

##### 面试题：指针

```js
const a = { c: 1 };
const b = a;
a.c = 2;
console.log(b.c); // 👈 输出什么
```

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

> 思考：如何判断数组、对象、null 和正则表达式

### instanceof

```js
// instanceof 无法正确判断原始数据类型
2 instanceof Number; // false
true instanceof Boolean; // false
'str' instanceof String; // false

[] instanceof Array; // true
(function(){}) instanceof Function; // true
{} instanceof Object; // true
```

instanceof 只能正确判断引用类型数据，可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

##### 面试题：手写 instanceof

注意：原型链最终的指向是 Object 的 prototype, 即 null。

```js
// 手写 instanceof
function instanceOf(obj, constructor) {
  // 获取对象的 prototype 属性
  let proto = Object.getPrototypeOf(obj);
  // 获取构造函数的 prototype 属性
  const prototype = constructor.prototype;
  // 遍历对象的原型链
  while (true) {
    // 原型链遍历结束，未找到相同的 prototype 属性
    if (proto === null) return false;
    // 找到了相同的 prototype 属性
    if (proto === prototype) return true;
    // 未找到且未结束，继续遍历
    proto = Object.getPrototypeOf(proto);
  }
}

instanceOf([], Array); // true

2 instanceof Number; // false
instanceOf(2, Number); // true 👍
```
