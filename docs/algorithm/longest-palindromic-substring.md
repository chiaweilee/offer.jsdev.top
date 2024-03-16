---
reference:
  - title: 5. 最长回文子串
    href: https://leetcode.cn/problems/longest-palindromic-substring
    site: 力扣（LeetCode）
---

# 5. 最长回文子串

给你一个字符串`s`，找到`s`中最长的回文
子串
。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

示例：

```js
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

::: info 解题思路
dp[i,j] 表示从索引 i 到 j 的子串是否是回文串

dp[i,j] 是否是回文串，可以拆解成两个子问题
- s[i] == s[j]，子串两边相同
- 且中间部分，即 dp[i+1][j-1] 也是回文串

特殊情况：j - i < 2 时，即子串是一个长度为 0 或 1 的回文串

总结：dp[i][j] = s[i] == s[j] && ( dp[i+1][j-1] || j - i < 2)
:::

<script setup>
import Demo from './demos/5.vue';
</script>

::: info 动画演示
<Demo />
:::

::: details 参考答案
```ts
function longestPalindrome(s: string): string {
  const n = s.length;
  let res = '';
  // 创建一个矩阵，记录子问题答案
  const dp = Array.from(new Array(n), () => new Array(n).fill(0));
  // 从后往前，从短到长进行判断
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      // 两边相同，且中间也是回文串（复用前面的判断步骤得到的结果）
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp?.[i + 1]?.[j - 1] === true);
      // 如果是回文，且长度最长
      if (dp[i][j] === true && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
}
```
:::
