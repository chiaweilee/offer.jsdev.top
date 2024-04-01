---
reference:
  - title: 42. 接雨水
    href: https://leetcode.cn/problems/trapping-rain-water
    site: 力扣（LeetCode）
---

# 42. 接雨水

给定`n`个非负整数表示每个宽度为`1`的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例：

```js
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
```

::: details 参考答案
```ts
function trap(height: number[]): number {
  // 向右取最大阴影面积
  const leftMax = [];
  leftMax[0] = height[0];
  for (let i = 1; i < height.length; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // 向左取最大阴影面积
  const rightMax = [height[0]];
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // 左右阴影面积相减，即结果
  let ans = 0;
  for (let i = 0; i < height.length; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i]; // 记得减去柱子本体
  }

  return ans;
}
```
:::
