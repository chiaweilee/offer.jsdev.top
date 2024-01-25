---
reference:
  - title: 102. 二叉树的层序遍历
    href: https://leetcode.cn/problems/binary-tree-level-order-traversal
    site: 力扣（LeetCode）
---

# 102. 二叉树的层序遍历

给你二叉树的根节点`root`，返回其节点值的**层序遍历**。（即逐层地，从左到右访问所有节点）。

示例：

```js
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

::: info 解题思路
广度优先
:::

::: details 参考答案
```ts
function levelOrder(root: TreeNode | null): number[][] {
  const res = [];
  if (root ===null) return res;
  const queue = [root];
  while (queue.length > 0) {
    let i = queue.length;
    res.push([]);
    while (i > 0) {
      const node = queue.shift();
      res[res.length - 1].push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      i--;
    }
  }
  return res;
};
```
:::
