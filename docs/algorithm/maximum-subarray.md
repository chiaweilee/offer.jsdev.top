---
reference:
  - title: 53. 最大子数组和
    href: https://leetcode.cn/problems/maximum-subarray
    site: 力扣（LeetCode）
---

# 53. 最大子数组和

给你一个整数数组`nums`，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例：

```js
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

::: info 解题思路
f(i) 表示以第 i 个数字结尾的连续子数组的最大和
- 如果 f(i - 1) ≤ 0，负增益，则 f(i) = nums[i]
- 如果 f(i - 1) > 0，正增益，则 f(i) = f(i - 1) + nums[i]
- 最后返回 f(i - 1)
:::

::: details 参考答案
```ts
function maxSubArray(nums: number[]): number {
  let pre = nums[0];
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = pre > 0 ? pre + nums[i] : nums[i];
    ans = Math.max(pre, ans);
  }
  return ans;
};
```
:::
