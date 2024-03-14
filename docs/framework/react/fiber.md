# React Fiber

React 会递归比对 VirtualDOM 树，找出变动的节点并更新它们。这个过程，React 如果持续占用浏览器资源，会导致用户事件得到不响应，导致掉帧、卡顿。
所以 React 通过 Fiber 架构，让执行过程变成可被中断。可以“适时”地让出 CPU 资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。

Fiber 也称协程或者纤程，不同于线程，它没有并发能力，只是一种控制流程的让出机制。

React 16 最核心的三个功能是：
- Scheduler（调度器）：调度任务优先级，高优任务优先进入 Reconciler
- Reconciler（协调器）：负责找出变化的组件
- Renderer（渲染器）：负责将变化的组件渲染到页面上

## Scheduler

React 在 setState 后，会把本次更新注册到 Scheduler，再由 Scheduler 根据浏览器剩余空闲时间、优先级等因素派发给 Reconciler，并通过中断查询控制协调的中断重启。

### 浏览器空闲回调

由于 window.requestIdleCallback() 存在兼容性问题，React 使用了 MessageChannel。原理很简单。自己给自己发消息，相当于把球踢出去，等闲了再接回来。

## 双缓存树

在 React 中最多会同时存在两棵 Fiber 树，主要用来避免更新时的闪烁问题。屏幕上显示内容对应的树称为 current Fiber 树，正在内存中构建的树称为 workInProgress Fiber 树。它们的节点被称为current fiber 和 workInProgress fiber，通过 alternate 属性连接。

```js
currentFiber.alternate === workInProgressFiber;
workInProgressFiber.alternate === currentFiber;
```

React 应用的根节点通过使 current 指针在不同 Fiber 树的 rootFiber 间切换来完成 current Fiber 树指向的切换。

## Reconciler

当 Scheduler 将任务交给 Reconciler 后，Reconciler 会为变化的虚拟 DOM 打上代表增/删/更新的二进制标记。整个 Scheduler 与 Reconciler 的工作都在内存中进行。只有当所有组件都完成 Reconciler 的工作，才会统一交给 Renderer。

### performUnitOfWork

创建下一个 Fiber 节点并赋值给 workInProgress，并将 workInProgress 与已创建的 Fiber 节点连接起来构成 Fiber 树。

Fiber Reconciler 是从 Stack Reconciler 重构而来，通过遍历的方式实现可中断的递归。

## Renderer
