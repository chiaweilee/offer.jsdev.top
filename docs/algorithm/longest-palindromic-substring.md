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

## 动态规划

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

## 中心扩展算法

::: info 解题思路
结合动态规划的思路，如果中心是回文串，往外扩展，如果左右相同，则扩展后的字串也是回文串。<br/>
如此重复，直到不满足条件，即得到最长回文串。

注意，回文串有两种情况：

- 长度为奇数，中心是一个字符串（例如，aba，中心是 b）
- 长度为偶数，中心是两个字符串（例如，abba，中心是 bb）
  :::

::: details 参考答案
```ts
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  let res = '';

  for (let i = 0; i < s.length; i++) {
    // 奇数情况
    expandPalindrome(i, i);
    // 偶数情况
    expandPalindrome(i, i + 1);
  }

  function expandPalindrome(m, n) {
    // 尝试扩展，直到不满足回文串
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }
    // 注意：此时已扩展到不满足回文条件，因此取值要
    if (n - m - 1 > res.length) {
      res = s.substring(m + 1, n);
    }
  }

  return res;
}
```
:::
