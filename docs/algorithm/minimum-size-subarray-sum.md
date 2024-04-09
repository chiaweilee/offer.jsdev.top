---
reference:
  - title: 209. 长度最小的子数组
    href: https://leetcode.cn/problems/minimum-size-subarray-sum
    site: 力扣（LeetCode）
---

# 209. 长度最小的子数组

给定一个含有`n`个正整数的数组和一个正整数`target`。

找出该数组中满足其总和大于等于`target`的长度最小的`连续子数组`，并返回其长度。如果不存在符合条件的子数组，返回`0`。

示例：

```js
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

::: details 参考答案

```ts
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let ans = Infinity;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      ans = Math.min(ans, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return ans === Infinity ? 0 : ans;
}
```

:::
