```js
// 设置对象白名单属性并返回
const only = require('@zjtakato/only');
const obj = { a: 'a', b: 'b', c: null, d: 'd' };
const x = only(obj, 'a b c');
console.log(xx); // { a: 'a', b: 'b'}
const xx = only(obj, 'a b c', { returnNullValue: true });
console.log(xx); // { a: 'a', b:'b', c: null}
```
