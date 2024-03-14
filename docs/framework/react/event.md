---
reference:
  - title: 「2021」高频前端面试题汇总之React篇（上）
    href: https://juejin.cn/post/6941546135827775525
    site: CUGGZ
---

# React 事件机制

## 事件绑定

React 并不是将 click 事件绑定到真实 DOM 上，而是在 document 处监听了所有的事件。
当事件冒泡到 document 时，再将事件交由处理函数运行。

这样的好处：
- 减少了内存的消耗
- 可以在组件挂载、销毁时统一订阅和移除事件

## event.preventDefault()

冒泡到 document 上的事件不是浏览器原生事件，而是 React 自己实现的合成事件（SyntheticEvent）。
因此，阻止事件冒泡要用 `event.preventDefault()`，而不是 `event.stopPropagation()` 方法。

实现合成事件的目的：
- 抹平浏览器兼容问题
- 使用统一事件池进行管理，避免创建很多事件对象，减少内存的消耗
