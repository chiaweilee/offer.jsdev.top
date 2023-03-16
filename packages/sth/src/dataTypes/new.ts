export function New(constructor: unknown, argv: any): object | void {
  if (typeof constructor !== 'function') {
    console.error('type error');
    return;
  }
  // 创建一个原型为构造函数的新对象
  const obj = Object.create(constructor.prototype);
  // this 指向对象并执行构造函数
  const res = constructor.apply(obj, argv);
  // 执行结果是引用类型，则返回执行结果；是值类型，则返回创建的对象
  if (res && (typeof res === 'object' || typeof res === 'function')) {
    return res;
  } else {
    return obj;
  }
}
