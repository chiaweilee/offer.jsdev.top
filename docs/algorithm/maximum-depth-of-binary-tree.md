---
reference:
  - title: 104. 二叉树的最大深度
    href: https://leetcode.cn/problems/maximum-depth-of-binary-tree
    site: 力扣（LeetCode）
---

# 104. 二叉树的最大深度

给定一个二叉树`root`，返回其最大深度。

二叉树的**最大深度**是指从根节点到最远叶子节点的最长路径上的节点数。

示例：

```js
输入：root = [3,9,20,null,null,15,7]
输出：3
```

::: info 解题思路
深度优先
:::

::: details 参考答案
```ts
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
```
:::
