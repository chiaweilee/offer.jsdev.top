---
reference:
  - title: 21. 合并两个有序链表
    href: https://leetcode.cn/problems/merge-two-sorted-lists
    site: 力扣（LeetCode）
---

# 21. 合并两个有序链表

将两个升序链表合并为一个新的**升序**链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

```js
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

::: details 参考答案
```ts
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
```
:::
