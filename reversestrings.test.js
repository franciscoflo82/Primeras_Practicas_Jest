const reverseString = require('./reversestrings');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});

test('numbers reverses ', () => {
  expect(reverseString('PP-PP')).not.toEqual('olleh');
});

test('numbers reverses ', () => {
  expect(reverseString('423423')).not.toEqual('5323');
});
