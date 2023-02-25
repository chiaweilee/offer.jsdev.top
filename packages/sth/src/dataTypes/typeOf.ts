import { DataType } from '../types';

export function typeOf(obj: unknown): DataType {
  // 判断 Null
  if (obj === null) return 'null';
  if (typeof obj === 'object') {
    // 引用数据类型，使用 Object.prototype.toString.call 判断
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  } else {
    // 原始数据类型，使用 typeof 判断
    return typeof obj;
  }
}
