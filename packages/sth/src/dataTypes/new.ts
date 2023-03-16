export function New(constructor: unknown, argv: any): object {
  if (typeof constructor !== 'function') {
    throw new Error(`Uncaught TypeError: constructor should be a function`);
  }
  // 创建一个原型为构造函数的新对象
  const obj = Object.create(constructor.prototype);
  // 执行构造函数，并将 this 指向对象
  const res = constructor.apply(obj, argv);
  // 执行结果是引用类型，则返回执行结果；是值类型，则返回创建的对象
  if (res !== null && (typeof res === 'object' || typeof res === 'function')) {
    return res;
  } else {
    return obj;
  }
}
