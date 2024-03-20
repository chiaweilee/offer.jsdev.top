---
reference:
  - title: Vue3.0面试题汇总
    href: https://juejin.cn/post/7139921537896808479?searchId=20240320192827CDBEC46A2D74DE12F469
    site: 丝绒拿铁有点甜
---

# 数据响应

## Object.defineProperty

Vue 2 中采用 Object.defineProperty 来劫持整个对象，深度遍历所有属性，给每个属性添加 getter 和 setter ，实现响应式。
它有三个缺点：
- 深度响应问题：需要对每个属性进行遍历监听，深层监听造成性能问题
- 数组原生 API 方法无法监听到
- 检测不到对象属性的添加和删除

## Proxy

vue 3 响应式是使用 ES6 的 proxy 和 Reflect 相互配合实现数据响应式。
Proxy 针对一个对象进行监听，这个对象的所有操作都可以被劫持。

## ref 和 reactive

ref 与 reactive 是 Vue 3 新推出的主要 API 之一，它们主要用于响应式数据的创建。

ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 `.value` 的形式才能使用。
- ref 函数可以接收**原始数据类型**与**引用数据类型**
- reactive 函数只能接收**引用数据类型**
- ref 是在 reactive 上在进行了封装，使它支持了对原始数据类型的处理