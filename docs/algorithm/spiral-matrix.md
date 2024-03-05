---
reference:
  - title: 54. 螺旋矩阵
    href: https://leetcode.cn/problems/spiral-matrix
    site: 力扣（LeetCode）
---

# 54. 螺旋矩阵

给你一个`m`行`n`列的矩阵`matrix`，请按照`顺时针螺旋顺序`，返回矩阵中的所有元素。

示例：

```js
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

::: info 解题思路
顺时针遍历（查到边界换方向，顺序：右、下、左、上），沉没遍历过的点。
:::

::: details 参考答案
```ts
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const total = m * n;
  const ans = [];

  let i = 0;
  let j = 0;

  while (ans.length < total) {
    // 向右
    while (j < n && matrix[i][j] !== null) {
      ans.push(matrix[i][j]);
      matrix[i][j] = null;
      j++;
    }
    j--;

    // 向下
    i++;
    while (i < m && matrix[i][j] !== null) {
      ans.push(matrix[i][j]);
      matrix[i][j] = null;
      i++;
    }
    i--;

    // 向左
    j--;
    while (j >= 0 && matrix[i][j] !== null) {
      ans.push(matrix[i][j]);
      matrix[i][j] = null;
      j--;
    }
    j++;

    // 向上
    i--;
    while (i >= 0 && matrix[i][j] !== null) {
      ans.push(matrix[i][j]);
      matrix[i][j] = null;
      i--;
    }
    i++;

    // 下一轮向右准备
    j++;
  }

  return ans;
}
```
:::
