# 数组

## 数组的原生方法

* 数组和字符串的转换方法：toString() 、 toLocalString() 、 join() 。
* 数组尾部操作的方法 pop() 和 push() ， push 方法可以传入多个参数。
* 数组首部操作的方法 shift() 和 unshift() ，**影响原数组**。
* 重排序的方法 reverse() 和 sort() ，**影响原数组**。
* 数组插入方法 splice() ，**影响原数组**
* 数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。
* 数组截取办法 slice() ，用于截取数组中的一部分返回，不影响原数组。
* 查找特定项的索引的方法， indexOf() 和 lastIndexOf() 。
* 迭代方法 every()、some()、filter()、map() 和 forEach() 方法 。
* 数组归并方法 reduce() 和 reduceRight() 方法 。

## 类数组

类数组不能直接调用数组的方法，但是又和数组比较类似，拥有 length 属性。

常见的类数组有：
* arguments
* getElementsByTagName/ClassName/Name 返回的 HTMLCollection
* querySelector 返回的 NodeList

常见的类数组转换为数组的方法：
* `Array.prototype.slice.call(arrayLike);`
* `Array.prototype.splice.call(arrayLike, 0);`
* `Array.prototype.concat.apply([], arrayLike);`
* `Array.from(arrayLike);`

```js
(function () {
  return Array.prototype.slice.call(arguments);
})(1, 2); // [1, 2]
```
