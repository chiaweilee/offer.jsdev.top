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

## const

const 保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。

基本数据类型的值就保存在变量指向的那个内存地址，因此等同于常量，不能改动。

引用数据类型的变量只是一个指针，指向数据的内存地址，const 只能保证这个指针是固定不变。

```js
const a = {};
a.b = 1;
console.log(a); // {b: 1}
```
