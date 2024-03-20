---
reference:
  - title: 912. 排序数组
    href: https://leetcode.cn/problems/sort-an-array
    site: 力扣（LeetCode）
---

# 912. 排序数组

给你一个整数数组`nums`，请你将该数组升序排列。

```js
输入：nums = [5,2,3,1]
输出：[1,2,3,5]
```

## 冒泡排序

::: details 参考答案
```ts
function sortArray(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
```
:::
