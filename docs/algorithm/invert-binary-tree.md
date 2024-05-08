---
reference:
  - title: 226. 翻转二叉树
    href: https://leetcode.cn/problems/invert-binary-tree
    site: 力扣（LeetCode）
---

# 226. 翻转二叉树

给你一棵二叉树的根节点`root`，翻转这棵二叉树，并返回其根节点。

示例：

```js
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

::: details 参考答案

```ts
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  const { left, right } = root;
  root.left = right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
```

:::
