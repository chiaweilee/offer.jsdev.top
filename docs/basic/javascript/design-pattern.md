# 设计模式

## 工厂模式

用于批量生产同种类的对象，比如：厂里有很多人，他们都可以被抽象成“人”这个概念，只是姓名、年龄有所不同。于是，你就可以建一个“工厂”。之后，只需要把姓名、年龄丢进“工厂”里，就能造出一个人。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    return 'My name is ' + this.name + ', ' + this.age + ' years old.';
  };
}

const LiLei = new Person('Li Lei', 18);
const HanMeimei = new Person('Han Meimei', 17);
LiLei.introduce(); // 'My name is Li Lei, 18 years old.'
HanMeimei.introduce(); // 'My name is Han Meimei, 17 years old.'
```