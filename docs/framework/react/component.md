---
reference:
  - title: 「2021」高频前端面试题汇总之React篇（上）
    href: https://juejin.cn/post/6941546135827775525
    site: CUGGZ
---

# React 组件

## React.Component 和 React.PureComponent

PureComponent 表示一个纯组件，可以减少 render 函数执行的次数，从而提高组件的性能。

在 React 中，当 prop 或 state 发生变化时，可以通过在 shouldComponentUpdate 中执行 return false 来阻止页面更新，从而减少不必要的 render 执行。
React.PureComponent 会自动执行 shouldComponentUpdate。

不过，pureComponent 中的 shouldComponentUpdate() 进行的是**浅比较**，即如果是引用数据类型的数据，只会比较内存地址是否相同，而不会比较这个地址里面的数据是否一致。

```js
class extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
}
```

## React 浅比较

一、调用 [Object.is()](/basic/javascript/data-types#object-is) 判断是否相等，相同则返回 true。

```js
if (Object.is(objA, objB)) {
  return true;
}
```

这样就完成了对**原始数据类型**和**内存地址相同**的**引用数据类型**的比较。\
这样就只剩一种情况需要比对了，那就是内存地址不相同的两个引用数据类型。

二、判断是否是对象，如果不是，直接返回 false 。

```js
if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
  return false;
}
```

三、比较对象中的 keys 长度，不等则返回 false 。

```js
const keysA = Object.keys(objA);
const keysB = Object.keys(objB);
if (keysA.length !== keysB.length) {
  return false;
}
```

四、比较对象中相同的 key 和 value 是否相等，不等则返回 false 。

```js
const hasOwnProperty = Object.prototype.hasOwnProperty;

// Test for A's keys different from B.
for (let i = 0; i < keysA.length; i++) {
  if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
    return false;
  }
}
```

五、通过了所有校验，返回 true 。

```js
return true;
```

## HOC

高阶组件是参数为组件，返回值为新组件的函数

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。
HOC 在 React 的第三方库中很常见，例如 Redux 的 connect。
- 优点：逻辑复用，不影响被包裹组件内部逻辑。
- 缺点：prop 重名会覆盖

## Render Props

Render Props 是一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

```jsx
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

- 优点：数据共享、代码复用，将子组件的 state 作为 props 传递给父组件，由父组件控制渲染逻辑
- 缺点：容易陷入嵌套地狱

*大多数场景下，Render Props 可以用自定义 Hooks 代替*

## Hooks

Hooks 可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
Hooks 解决了 HOC 的 prop 覆盖问题，同时也解决了 Render Props 的嵌套地狱问题。

但需要注意：Hooks 是根据调用顺序来确定下一次重新渲染时的.
所以，Hooks 只能在组件顶层使用，不能在分支语句中使用。