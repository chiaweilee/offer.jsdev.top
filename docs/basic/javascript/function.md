---
reference:
  - title: 「2021」高频前端面试题汇总之JavaScript篇（上）
    href: https://juejin.cn/post/6940945178899251230
    site: CUGGZ
---

# Function

## 构造函数的 return

默认情况下，没有 return 的函数默认返回值为 undefined。

构造函数比较特殊， new 一个没有 return 的构造函数，默认返回新创建的对象。
<br/>而有 return 时有两种情况：
* 返回值为基本数据类型，则返回新创建的对象，即 this。
* 返回值为引用数据类型，返回这个引用数据类型对象，丢失 this。

```js
function PlainObject(a) {
  this.b = 2;
  return {
    a,
  };
}

new PlainObject(1); // { a: 1 }
```

```js
function IntNumber(a) {
  this.b = 2;
  return a;
}

new IntNumber(1); // { b: 2 }
```

## new

new 执行过程：
1. 创建一个原型为构造函数的新对象
2. this 指向对象并执行构造函数
3. 返回值是基本数据类型，返回新创建的对象；是引用数据类型，返回这个引用数据类型对象。

<!--@include: ../../interview/questions/write-new.md-->
