# React Diff

渲染真实 DOM 的开销很大，有时候我们修改了某个数据，直接渲染到真实 DOM 上会引起整个 DOM 树的重绘和重排。我们希望只更新我们修改的那一小块 DOM，而不是整个 DOM，Diff 算法就帮我们实现了这点。

Diff 算法的本质就是：找出两个对象之间的差异，目的是尽可能做到节点复用。

React 用三大策略将 O(n3) 复杂度转化为 O(n) 复杂度：
- Tree Diff
- Component Diff
- Element Diff

## Tree Diff

React通过 updateDepth 对 Virtual DOM 树进行层级控制。Tree Diff 对树的每一层进行遍历，如果某组件不存在了，则会直接销毁。因此，只需遍历一次，就能完成整棵 DOM 树的比较。

## Component Diff

React 对不同的组件间的比较，有三种策略：
- 同一类型的两个组件，按原策略（层级比较）继续比较 Virtual DOM 树即可
- 同一类型的两个组件，组件 A 变化为组件 B 时，可能 Virtual DOM 没有任何变化，如果知道这点（变换的过程中，Virtual DOM 没有改变），可节省大量计算时间，所以用户可以通过 shouldComponentUpdate 来判断是否需要判断计算
- 不同类型的组件，将将被改变的组件判断为 dirtyComponent（脏组件），从而替换整个组件的所有节点

## Element Diff

当节点处于同一层级时，Diff 提供三种节点操作：删除、插入、移动。