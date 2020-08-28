// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

export function process() {
  return 'export default {};';
}
export function getCacheKey() {
  // The output is always the same.
  return 'cssTransform';
}
