---
reference:
  - title: 102. 二叉树的层序遍历
    href: https://leetcode.cn/problems/binary-tree-level-order-traversal
    site: 力扣（LeetCode）
---

# 102. 二叉树的层序遍历

给你二叉树的根节点`root`，返回其节点值的**层序遍历**。（即逐层地，从左到右访问所有节点）。

示例：

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

::: details 参考答案
```ts
function levelOrder(root: TreeNode | null): number[][] {
  const res = [];
  if (root ===null) return res;
  const stack = [root];
  while (stack.length > 0) {
    let i = stack.length;
    res.push([]);
    while (i > 0) {
      const node = stack.shift();
      res[res.length - 1].push(node.val);
      if (node.left !== null) stack.push(node.left);
      if (node.right !== null) stack.push(node.right);
      i--;
    }
  }
  return res;
};
```
:::
