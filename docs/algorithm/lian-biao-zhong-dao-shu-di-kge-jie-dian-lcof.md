---
reference:
  - title: LCR 140. 训练计划 II
    href: https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
    site: 力扣（LeetCode）
---

# LCR 140. 训练计划 II

给定一个头节点为`head`的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第`cnt`个训练项目编号。

```js
输入：head = [2,4,7,8], cnt = 1
输出：8
```

::: details 参考答案

```ts
function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  let fast = head;
  let slow = head;
  for (let i = 0; i < cnt; ++i) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
```

:::
