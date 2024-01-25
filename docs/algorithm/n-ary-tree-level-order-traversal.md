---
reference:
  - title: 429. N 叉树的层序遍历
    href: https://leetcode.cn/problems/n-ary-tree-level-order-traversal
    site: 力扣（LeetCode）
---

# 429. N 叉树的层序遍历

给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

示例：

```js
输入：root = [1,null,3,2,4,null,5,6]
输出：[[1],[3,2,4],[5,6]]
```

::: details 参考答案
```ts
function levelOrder(root: Node | null): number[][] {
  if (root === null) return [];

  const ans = [];
  const queue = [root];
  while (queue.length > 0) {
    const levelLength = queue.length;
    const levelValues = [];
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      levelValues.push(node.val);
      for (const child of node.children) {
        queue.push(child);
      }
    }
    ans.push(levelValues);
  }

  return ans;
}
```
:::
