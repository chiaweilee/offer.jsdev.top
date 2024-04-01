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

::: info 解题思路
两两比较，把大的数放后面；一轮遍历下来，最大的数就在数组最后了。<br/>
重复遍历 0 ~ (n - i)，直到排序完成。<br/>
复杂度：O(n²)
:::

::: details 参考答案
```ts
function sortArray(nums: number[]): number[] {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length - 1 - i; ++j) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
```
:::

## 选择排序

::: info 解题思路
从 0 开始遍历，每次遍历找到当前数和剩余数字中最小的那个，交换位置。
:::

::: details 参考答案
```ts
function sortArray(nums: number[]): number[] {
  for (let i = 0; i < nums.length; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};
```
:::