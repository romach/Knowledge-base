---
id: overview
title: JavaScript Overview
sidebar_label: Overview
---

**How to delete property from object?**

Use [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator: `delete obj.prop;`

**How to check that object has property?**

Use `in` operator: `'prop' in obj`

**How to check if object has not inherited property?**

Use [`hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) method: `obj.hasOwnProperty('prop')`

**How to convert object to JSON?**

Use [`JSON.strignify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method: `JSON.stringify({ x: 5, y: 6 })`

**How to override `JSON.strignify()` behavior?**

- use `replacer` callback as second argument:

  ```javascript
  JSON.stringify(obj, (key, value) => {...})
  ```

  If you return `undefined`, property will not be added to result string.

- use `replacer` array:

  ```javascript
  JSON.stringify(obj, ["one", "two"]);
  ```

  If object has property from array, this property will be added to result string.

- use `toJSON()` object's method

**How to parse object from string?**

Use [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method: `JSON.parse('{"key":value}')`

**What is hoisting?**

This is process of putting variable and function declaration to the mamory during the compile phase.

**What is the hoisting order?**

1. `var`, `let`, `const`. Only `var` is initialized by `undefined` during hoisting. `let` initialized by `undefined` after declaration;
2. function parameters;
3. function declarations. Will conflict with variable declarations with the same name;

**What iteration types are in JavaScript?**

- [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/while)
- [`do-while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/do...while)
- [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) - use for iteration over iterable objects
- [`for...in` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) - iterates over all enumerable properties, **not recommended**
- [`Array.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - iterate over arrays

**How to merge two arrays?**

```javascript
Array.prototype.push.apply(array1, array2);
```

**How to shuffle array?**

We can combine `Math.random()` with `Array.prototype.sort()`

```javascript
[1, 2, 3].sort((first, second) => Math.random() - 0.5);
```

**How can you declare functions?**

You can use:

- function declaration: `function f1(){}`
- function expression: `let f2 = function(){}`
- arrow function expression: `let f3 = () => {}`

**How can you create objects?**

You can use _object literal_: `let obj = {}`

**How can you create array?**

You can use _array literal_: `let arr = [1, 2]`

**How can you use CommonJS modules?**

Export:

```javascript
function f() {
  console.log("Hello");
}
module.exports = f;
```

Import:

```javascript
const f = require("./f.js");
```

**How can you use EcmaScript modules?**

Export:

```javascript
function f(){ console.log('Hello') }
export default f; // default export
// or
export f;
```

Import:

```javascript
import f from "./f.mjs"; // import default function
import * as f from "./f.mjs"; // import whole module as namespace object
import { f } from "./f.mjs"; // import a single export
```

**How to check that expression throws exception?**

```javascript
assert.throws(() => {
  null.prop;
});
```

```javascript
assert.throws(() => {
  null.prop;
}, TypeError);
```

```javascript
assert.throws(() => {
  null.prop;
}, /^TypeError: Cannot read property 'prop' of null$/);
```

```javascript
assert.throws(
  () => {
    null.prop;
  },
  {
    name: "TypeError",
    message: `Cannot read property 'prop' of null`
  }
);
```

**Which variable scopes do you know?**

- _direct_ - scope where variable was declared;
- _inner_ - scope that is nested to the direct scope;
- _outer_ - parent scope for _direct_;

**What kinds of global variables do you know?**

- _global declarative variables_ - is created with `let` and `const` in global scope;
- _global object variables_ - is created with `var` and function declarations in global scope. Create properties of global object;

**How to access the global object?**

- use `globalThis` - **universal mathod**
- use `this` in top-level scope
- use `global` in NodeJS
- use `window` in browsers
- use `self` in browsers and Web Workers

**What is Temporal Dead Zone?**

- it is time between entering the scope of a variable and executing its declaration;
- is applicable for `let`, `const` and `class`

**What is early activation?**

- it is ability of variables (`var`) and functions to be accessed before declaration;
- `var`-s have partial early activation. They are `undefined` before activation;

**What is shadowed variable?**

- this is variable in nested block with same name as in outer block;

  ```javascript
  let a = 1;
  {
    let a = 2;
  }
  ```

**What is different between primitive variables and objects?**

|           | Primitive | Object  |
| --------- | --------- | ------- |
| Immutable | Yes       | No      |
| Passed    | By value  | By link |
| Compared  | By value  | By link |

**How many type JavaScript has got?**

- JavaScript has 7 types: 6 primitive and `object`

**Why `typeof null` is `"object"`?**

- it is a bug;
- `null` is represented as NULL pointer (so it is an object link), but implementation of `typeof` doesn't have check for null pointer, only for object; [details](https://2ality.com/2013/10/typeof-null.html)

**Why `typeof NaN` is `"number"`?**

- because `NaN` is a numeric data type whose value cannot be represented using actual numbers;

**Why `typeof function` is `"function"`?**

- despite the fact that `function` has `"object"` type, `typeof` returns `"function"` . This is logic of `typeof` operator

**How should I use `instanceof` operator?**

- it is used with objects;

- it returns `true`, if variable was created with specified class (inheritance rules work too)

  ```javascript
  [] instanceof Array === true;
  [] instanceof Object === true;
  ```

**Why do we need wrapper classes?**

- to convert variables to specific primitive type with constructor function;
- wrapper classes provide properties for primitive types;
- wrapper classes are namespaces for utility functions;
- to create objects from primitive values;

**How to check numeric input?**

- `if (Number(x) === 1){}`

**How to test for null or undefined?**

- `if (!x){}` - be aware of pitfall because of falsy values;
- `if (x === undefined)`

**How can you compare variables?**

- use lose equality operator: `==`;
- use strict equality operator: `===`;
- use `Object.is(arg,arg)`

**How to check, if a function exists?**

```javascript
if (typeof func === "function") {
  func();
}
```

**How to check an error type?**

```javascript
e.constructor === SyntaxError;
e.constructor.name === "name";
```

**Where can you meet `undefined` in JavaScript?**

- value of not initialized variable;
- value of not passed function's parameter;
- missing object property;
- result of the function without `return` statement;

**What falsy values do you know?**

- `null`, `undefined`
- `0`, `NaN`
- `false`
- `''`

**How can you find `NaN` in array?**

```javascript
[NaN].includes(NaN);
[NaN].findIndex(x => Number.isNaN(x));
[NaN].find(x => Number.isNaN(x));
```

**How to check that value is integer?**

Use `Number.isInteger(num: number): boolean`

**How to parse float?**

- `Number.parseFloat(str: string): number` - **bad** - ignores leading whitespace and illegal trailing characters and can hide problems;
- `Number()` - **good** - ignores leading and trailing whitespace

**How to parse integer?**

- `Number.parseInt(str: string, radix=10): number` - **bad**
  - coercing to string is inefficient
  - stopping before the first non-digit
- `Math.trunc(num: number): number` - **good**
