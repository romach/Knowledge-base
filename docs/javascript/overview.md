---
id: overview
title: JavaScript Overview
sidebar_label: Overview
---

**How to delete property from object?**

Use [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator: `delete obj.prop;`

**How to check if object has not inherited property?**

Use [`hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) method: `obj.hasOwnProperty('prop')`

**How to convert object to JSON?**

Use [`JSON.strignify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method: `JSON.stringify({ x: 5, y: 6 })`

**How to override `JSON.strignify()` behavior?**

- use `replacer` callback as second argument:

  ```
  JSON.stringify(obj, (key, value) => {...})
  ```

  If you return `undefined`, property will not be added to result string.

- use `replacer` array:

  ```
  JSON.stringify(obj, ['one', 'two'])
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