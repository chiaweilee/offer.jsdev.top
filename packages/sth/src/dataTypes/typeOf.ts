export type DataType = 'number' | 'boolean' | 'string' | 'function' | 'undefined' | 'null' | 'object' | 'array' | 'bigint' | 'symbol' | 'regexp';

function typeOf(obj: unknown): DataType {
  if (obj === null) return 'null';
  if (typeof obj === 'object') {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  } else {
    return typeof obj;
  }
}

export default typeOf;
