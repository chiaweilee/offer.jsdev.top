---
reference:
  - title: 112. 路径总和
    href: https://leetcode.cn/problems/path-sum
    site: 力扣（LeetCode）
---

# 112. 路径总和

给你二叉树的根节点`root`和一个表示目标和的整数`targetSum` 。判断该树中是否存在**根节点到叶子节点**的路径，这条路径上所有节点值相加等于目标和`targetSum` 。如果存在，返回`true`；否则，返回`false`。

## 深度优先

::: info 解题思路
- 深度优先遍历一条路径上的节点，并计算路径节点之和
- 如果已经没有子节点，且路径节点之和刚好等于 targetSum，则返回 true
:::

::: details 参考答案
```ts
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function dfs(root: TreeNode | null, preSum: number) {
    if (root === null) return false;
    if (root.left === null && root.right === null && preSum + root.val === targetSum) {
      return true;
    } else {
      return dfs(root.left, preSum + root.val) || dfs(root.right, preSum + root.val);
    }
  }
  return dfs(root, targetSum);
};
```
:::

## 广度优先

::: info 解题思路
- 广度优先遍历节点，并计算路径节点之和
- 如果已经没有子节点，且路径节点之和刚好等于 targetSum，则返回 true
:::

::: details 参考答案
```ts
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  const stack: [TreeNode | null, number][] = [[root, root.val]];
  while (stack.length > 0) {
    const [node, sum] = stack.shift();
    if (node.left === null && node.right === null) {
      if (sum === targetSum) return true;
    } else {
      if (node.left !== null) stack.push([node.left, sum + node.left.val]);
      if (node.right !== null) stack.push([node.right, sum + node.right.val]);
    }
  }
  return false;
};
```
:::

## 递归

::: info 解题思路
如果 node1 + node2 + node3 = targetSum，那 targetSum - ( node1 + node2 ) = node3 也成立
- 递归所有节点，并记录下「还差多少等于 targetSum」
- 如果已经没有子节点，且节点值刚好等于「还差多少等于 targetSum」，则返回 true
:::

::: details 参考答案
```ts
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  if (targetSum == root.val && root.left === null && root.right === null) return true;
  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
}
```
:::