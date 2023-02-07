/**
 * 设置对象白名单属性并返回
 * @example
 * only(obj, ('name age'))
 * only(obj, ['name', 'age'])
 * @param { Object } target - 要设置的对象
 * @param { Array<string> | string } keys - 白名单属性 例如: 'name age' 或 ['name', 'age']
 * @param { Object } options - 选型
 * @param { boolean } options.returnNullValue - 是否要把value为null的key添加进去
 */
function only(target, keys, options = { returnNullValue: false }) {
  target = target || {};
  options = options || {};
  if (typeof keys === 'string') keys = keys.split(' ');
  return keys.reduce(function (ret, key) {
    if (target[key] === null && !options.returnNullValue) return ret; // 是否要把value为null的key添加进去
    ret[key] = target[key];
    return ret;
  }, {});
}

module.exports = only;
