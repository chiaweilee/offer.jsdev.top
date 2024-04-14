---
reference:
  - title: 哈希表
    href: https://leetcode.cn/tag/hash-table/
    site: 力扣（LeetCode）
---

# 哈希表

一般来说，哈希表都是用来**快速判断一个元素是否出现集合里**。哈希法牺牲了**空间**换取了**时间**。

例如要查询一个元素是否在某个数组里。要枚举的话时间复杂度是**O(n)**，但如果使用哈希表的话，只需要**O(1)**就可以做到。

哈希法解决问题，可以选择两种数据结构：

- Set（集合）
- Map（映射）

## Set

Set 是 ES6 中新增的一种数据类型，用于存储一组**不重复**、**无序**的数据。

```js
const set = new Set();
```

```js
set.add(4);
set.delete(1);
set.has(1); // false
set.has(2); // true
set.keys(); // SetIterator {2, 3, 4}
set.values(); // Set(3) {2, 3, 4}
set.size;
set.clear();
```

### 遍历

#### for...of

```js
for (const item of set) {
  console.log(item);
}
```

#### forEach()

```js
set.forEach(function (item) {
  console.log(item);
});
```

### 不重复

```js
const set = new Set();
set.add(1);
set.add(1);
set.add('1');
set.values(); // SetIterator {1, '1'}
```

## Map

Map 是 ES6 中新增的一种数据类型，用于存储**键值对**。

```js
const map = new Map();
```

```js
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
```

```js
map.set('key3', 'value3');
map.delete('key1');
map.has('key1'); // false
map.has('key3'); // true
map.get('key3'); // 'value3'
map.keys(); // MapIterator {'key2', 'key3'}
map.values(); // MapIterator {'value2', 'value3'}
map.size;
map.clear();
```

### 遍历

#### for...of

```js
for (const [key, value] of map) {
  console.log(key, value);
}
```

#### forEach()

```js
map.forEach(function (value, key) {
  console.log(key, value);
});
```

### 有序

Map 中的键值是有序的，Map 会记住键的原始插入顺序。

```js
const map = new Map();
map.set(1, 1);
map.set(2, 2);
map.set(1, 1);

for (const [key, value] of map) {
  console.log(key, value);
}

// 1, 1
// 2, 2
```
