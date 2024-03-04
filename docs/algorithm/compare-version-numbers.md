---
reference:
  - title: 165. 比较版本号
    href: https://leetcode.cn/problems/compare-version-numbers
    site: 力扣（LeetCode）
---

# 165. 比较版本号

给你两个版本号`version1`和`version2`，请你比较它们。

版本号由一个或多个修订号组成，各修订号由一个`'.'`连接。每个修订号由**多位数字**组成，可能包含**前导零**。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，`2.5.33`和`0.1`都是有效的版本号。

比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较**忽略任何前导零后的整数值**。也就是说，修订号`1`和修订号`001`相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为`0`。例如，版本`1.0`小于版本`1.1`，因为它们下标为`0`的修订号相同，而下标为`1`的修订号分别为`0`和`1`，`0 < 1`。

返回规则如下：

如果`version1 > version2`返回`1`，
如果`version1 < version2`返回`-1`，
除此之外返回`0`。

示例:

```js
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
```

::: info 解题思路
- 拆解字符串为数组
- 遍历比较数字
  - 缺位补 0
  - 有大小，返回结果；相等比较下一位
:::

::: details 参考答案
```ts
function compareVersion(version1: string, version2: string): number {
  const v1: string[] = version1.split('.');
  const v2: string[] = version2.split('.');
  let i = 0;
  while (i < v1.length || i < v2.length) {
    if (!v1[i]) v1[i] = '0'; // 补0
    if (!v2[i]) v2[i] = '0'; // 补0
    if (+v1[i] > +v2[i]) {
      return 1;
    } else if (+v2[i] > +v1[i]) {
      return -1;
    } else {
      i++;
    }
  }
  return 0;
}
```
:::
