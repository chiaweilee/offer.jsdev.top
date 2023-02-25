export function instanceOf(obj: unknown, constructor: any): boolean {
  // 获取对象的 prototype 属性
  let proto = Object.getPrototypeOf(obj);
  // 获取构造函数的 prototype 属性
  const prototype = constructor.prototype;
  // 遍历对象的原型链
  while (true) {
    // 原型链遍历结束，未找到相同的 prototype 属性
    if (proto === null) return false;
    // 找到了相同的 prototype 属性
    if (proto === prototype) return true;
    // 未找到且未结束，继续遍历
    proto = Object.getPrototypeOf(proto);
  }
}
