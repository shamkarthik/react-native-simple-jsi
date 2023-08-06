const SimpleJsi = require('./NativeSimpleJsi').default;

export function multiply(a: number, b: number): number {
  return SimpleJsi.multiply(a, b);
}
