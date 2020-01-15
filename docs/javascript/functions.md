---
id: functions
title: Functions
sidebar_label: Functions
---

**What types of functions do you know?**

- ordinary function;
- arrow function;
- method;
- class;

**What roles can functions have?**

|                   | Real function | Method                 | Constructor |
| ----------------- | ------------- | ---------------------- | ----------- |
| Ordinary function | +             | +                      | +           |
| Arrow function    | +             | without object context | TypeError   |
| Method            | +             | +                      | TypeError   |
| Class             | Type error    | Syntax error           | +           |

**How can you declare _ordinary_ functions?**

Ordinary function:

- function declaration: `function f1(){}`
- anonymous function expression: `let f2 = function(){}`
- named function expression: `let f3 = function name(){}` - `name` is only accessible inside function

**What are parts of function declaration?**

- head
  - name
  - parameters
- body - curly braces and all inside them

**How can you declare arrow function?**

```javascript
let arrow = () => {};
```

**How can you declare method?**

```javascript
{method(){}}
```

**How can you declare class?**

```javascript
class Class {}
```

**What is context?**

- it is the object what is bound to `this` variable inside function body;

**How to invoke function with specific context?**

- `func.call(obj, arg1, arg2)`
- `func.apply(obj, [arg1, arg2])`
- `func.call(obj, ...[arg1, arg2])`
- `const bound = func.bind(obj, arg1, arg2)`

**How does context work in different function types?**

|                                             | Real function                                                 | Method                   | Constructor    |
| ------------------------------------------- | ------------------------------------------------------------- | ------------------------ | -------------- |
| Ordinary function<br />**_dynamic `this`_** | `undefined` in `strict` mode<br />`global` in non-strict mode | object context           | object context |
| Arrow function<br />**_lexical `this`_**    | context from outer scope                                      | context from outer scope | -              |
| Method<br />**_dynamic `this`_**            | `undefined` in `strict` mode                                  | object context           | -              |
| Class                                       | -                                                             | -                        | object context |

**How does context work in arrow function?**

- arrow functions get context from outer scope with closure (the logic is the same as for variables)
