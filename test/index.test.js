const only = require('..');

test('test only', () => {
  const obj = { a: 'a', b: 'b', c: null, d: 'd' };
  const x = only(obj, 'a b c');
  expect(x.a).toEqual('a');
  expect(x.b).toEqual('b');
  expect(x.c).toEqual(undefined);
  expect(x.d).toEqual(undefined);
});

test('test only option params', () => {
  const obj = { a: 'a', b: 'b', c: null, d: 'd' };
  const x = only(obj, 'a b c', { returnNullValue: true });
  expect(x.a).toEqual('a');
  expect(x.b).toEqual('b');
  expect(x.c).toEqual(null);
  expect(x.d).toEqual(undefined);
});
