---
reference:
  - title: 「2021」高频前端面试题汇总之JavaScript篇（上）
    href: https://juejin.cn/post/6940945178899251230
    site: CUGGZ
---

# ES6

## ES5 、ES6、ES2015

ECMAScript 是 JavaScript 的标准规范。

ECMAScript 5 也被称为 ES5 和 ECMAScript 2009。
<br/>ECMAScript 6，简称 ES6，正式名 ECMAScript 2015（ES2015）。
<br/>后续版本为 ECMAScript 2016、ECMAScript 2017 …… ECMAScript 2021。

## Object.assign 和扩展运算符

Object.assign 和扩展运算符（...）都是浅拷贝

## 模板语法

```js
const name = 'World';
const text = `Hello, ${name}!`;
```

- 在模板字符串中，空格、缩进、换行都会被保留
- 模板字符串完全支持“运算”式的表达式，可以在${}里完成一些计算

```js
const html = `
  <ul>
    <li>1</li>
    <li>${1 + 1}</li>
  </ul>
`;
```

## 解构

### 使用数组解构进行交换

交换变量

::: code-group

```js [ES6]
let a = 1;
let b = 2;
[a, b] = [b, a];
```

```js [编译为 ES5 后]
var a = 1;
var b = 2;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];
```

:::

交换数组元素

::: code-group

```js [ES6]
const a = [1, 2, 3, 4];
[a[1], a[2]] = [a[2], a[1]];
```

```js [编译为 ES5 后]
var a = [1, 2, 3, 4];
var _ref = [a[2], a[1]];
a[1] = _ref[0];
a[2] = _ref[1];
```

:::
