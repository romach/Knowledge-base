---
id: basics
title: Basics
sidebar_label: Basics
---

**What iteration types are in JavaScript?**

- [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/while)
- [`do-while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/do...while)
- [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) - use for iteration over *iterable* objects
- [`for-await-of` statement](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of>)
- [`for...in` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) - iterates over all enumerable properties, **not recommended**
- [`Array.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - iterate over arrays

**What kinds of global variables do you know?**

- _global declarative variables_ - is created with `let` and `const` in global scope;
- _global object variables_ - is created with `var` and function declarations in global scope. Create properties of global object;

**How to access the global object?**

- use `globalThis` - **universal method**
- use `this` in top-level scope
- use `global` in NodeJS
- use `window` in browsers
- use `self` in browsers and Web Workers

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

**Where can you meet `undefined` in JavaScript?**

- value of not initialized variable;
- value of not passed function's parameter;
- missing object property;
- result of the function without `return` statement;

**How to create Symbol?**

```javascript
const symbol = Symbol('symbol');
```

**What are usecases for Symbols?**

- values for constants;
- unique property keys;

**What system symbols do you know?**

- `Symbol.iterator`: method key that returns iterator;
- `Symbol.hasInstance`: key for method that allows object to be used at the right-side of `instanceof`
- `Symbol.toStringTag`: key for method that ca be used instead of `toString()`
- `Symbol.toPrimitive(hint)`: to convert object to primitive value;