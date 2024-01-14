---
reference:
  - title: 3. 无重复字符的最长子串
    href: https://leetcode.cn/problems/longest-substring-without-repeating-characters
    site: 力扣（LeetCode）
---

# 3. 无重复字符的最长子串

给定一个字符串`s`，请你找出其中不含有重复字符的**最长子串**的长度。

示例:

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

::: info 解题思路
使用滑动窗口，每次循环移动右指针，左指针只在窗口内出现重复字符时移动，并记下窗口长度。
- 定义一个**滑动窗口**，用两个指针表示窗口的左右边界，即左指针和右指针
- 每次循环开始时，检查**新字符**（即右指针所在位置字符）在窗口中**是否重复**
- 如重复，移动**左指针**到该字符**串重复位置的下一位**
- 然后，记录新字符**最后出现位置**
- 记录下窗口的最大长度
- 每次循环结束时，**向右移动右指针**
:::

<script setup>
import Demo from './demos/3.vue';
</script>

::: info 动画演示
<Demo />
:::

::: details 参考答案
```ts
function lengthOfLongestSubstring(s: string): number {
  // 无重复字符的最长子串长度
  let max = 0;
  // 定义双指针
  let left = 0;
  let right = 0;
  // 定义哈希表
  const hash = new Map();
  // 滑动窗口
  while (left < s.length && right < s.length) {
    if (left !== right && hash.has(s[right])) {
      // 重复字符，移动左指针到重复字符的下一个字符
      // 使用 Math.max 防止回退
      left = Math.max(left, hash.get(s[right]) + 1);
    }
    // 记录字符最后出现的位置
    hash.set(s[right], right);
    // 记录最大长度
    max = Math.max(max, right - left + 1);
    // 移动右指针
    right++;
  }
  // 返回结果
  return max;
};
```
:::
