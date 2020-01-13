---
id: objects
title: Objects
sidebar_label: Objects
---

**How can you create objects?**

- with _object literal_: `let obj = {}`
- `Object.create(prototype)`

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
