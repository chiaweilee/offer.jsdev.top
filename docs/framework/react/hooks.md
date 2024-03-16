# React Hooks

## 生命周期

Hooks 组件**没有**常规的生命周期方法，如 componentDidMount、componentDidUpdate 等。但是，函数组件使用 useEffect 也能够完成替代生命周期的作用。

## useState

useState 是 React 中一个用于管理组件状态的 Hook，它可以让你在函数式组件中使用状态（state）。useState 的原理其实很简单：它是通过闭包和对象的引用来实现的。事实上，React 中的 useState Hook 只是 useReducer 的一个简化版本。

```ts
export function useState<S>(initialState: (() => S) | S): [S, Dispatch<SetStateAction<S>>] {
  return useReducer(
    basicStateReducer,
    // useReducer has a special case to support lazy useState initialization
    initialState as any as S,
    (initialState: any) => {
      return initialState;
    }
  );
}
```

组件渲染时，React 首先会创建对应的 FiberNode，并将其加入 Fiber 树中。接着，会在 FiberNode 中创建一个 HookNode，HookNode 中包含 Hook 对象在 Hook 链表中的索引位置和当前状态的值。React 在组件渲染时会扫描 FiberNode 上已经使用的 Hooks 链表，并根据每个 Hook 对象来获取和更新组件的状态。

React 通过调用 Hooks 根据索引获取当前组件的 Hooks 链表中的 Hook 对象，并将其保存在变量 currentState 中。

在组件渲染完成后，React 代码便可执行 Hook 中定义的函数或代码片段，以根据 Hook 返回的状态值动态更新视图。

## useEffect

useEffect 是 React 提供的一个 Hook，用于在函数组件中执行副作用操作（side effects），如访问 DOM、调用 API、设置定时器等。它可以看作是类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合体。

## useRef

useRef 返回一个可变的 ref 对象，其 current 属性被初始化为传入的参数。其返回的 ref 对象在组件的整个生命周期内保持不变。

## useMemo

useMemo 是 React 中的一个 Hook，用于在函数组件中进行性能优化。useMemo 可以指定依赖，并将计算结果缓存起来，让组件只在必要的情况下进行重新计算，从而提高应用的性能。

## useCallback

useCallback 的作用是缓存函数，避免重复地创建函数实例，减小子组件的没必要要重复渲染，从而提高组件的性能。

## useContext

useContext 可以让你方便地使用 React Context 来在组件之间共享数据。

## 自定义 Hook
