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
<br/>后续版本为 ECMAScript 2016、ECMAScript  2017 …… ECMAScript 2021。


## Object.assign 和扩展运算符

Object.assign 和扩展运算符（...）都是浅拷贝

## 模板语法

```js
const name = 'World';
const text = `Hello, ${name}!`;
```

* 在模板字符串中，空格、缩进、换行都会被保留
* 模板字符串完全支持“运算”式的表达式，可以在${}里完成一些计算

```js
const html = `
  <ul>
    <li>1</li>
    <li>${1 + 1}</li>
  </ul>
`;
```
