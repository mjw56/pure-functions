var expect = require('expect');

// no side-effects, pure function
function square(n) {
  return n * n;
}

console.log(
  expect(square(2)).toEqual(4)
);

// curry functions
function sum(x) {
  return function(y) {
    return x + y;
  };
}

var addTwenty = sum(20);

console.log(
  expect(addTwenty(10)).toEqual(30)
);

// cheat lexical scope
function multiplyCheat(a) {
  eval(a);
  return b * 2;
}

console.log(
  expect(multiplyCheat('var b = 2;')).toEqual(4)
);

// impure - bad
function modifyImpure(param) {
  var copy = param;
  copy.bar = 'baz';

  return copy;
}

// pure - good
function modifyPure(param) {
  return Object.assign({}, param, { bar: 'baz' });
}

console.log(
  expect(modifyPure({foo: 'bar'}))
  .toEqual({ foo: 'bar', bar: 'baz' })
);
