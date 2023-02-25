export function isArray(obj: unknown): boolean {
  if (typeof Array.isArray === 'function') return Array.isArray(obj);
  return Object.prototype.toString.call(obj).slice(8, -1) === 'Array';
}
