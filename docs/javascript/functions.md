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

|                   | Real function | Method | Constructor |
| ----------------- | ------------- | ------ | ----------- |
| Ordinary function | +             | +      | +           |
| Arrow function    | +             |        |             |
| Method            |               | +      |             |
| Class             |               |        | +           |

**How can you declare *ordinary* functions?**

Ordinary function:

- function declaration: `function f1(){}`
- anonymous function expression: `let f2 = function(){}`
- named function expression: `let f3 = function name(){}` - `name` is only accessible inside function
- arrow function expression: `let f3 = () => {}`

**What is context?**

- object what is binded to `this` in function invocation;

**How to invoke function with specific context?**

- `func.call(obj, arg1, arg2)`
- `func.apply(obj, [arg1, arg2])`
- `func.call(obj, ...[arg1, arg2])`
- `const bound = func.bind(obj, arg1, arg2)`

**How does contest work in arrow function?**

- arrow functions get context from closure