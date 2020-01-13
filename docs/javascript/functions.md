---
id: functions
title: Functions
sidebar_label: Functions
---

**How can you declare functions?**

You can use:

- function declaration: `function f1(){}`
- function expression: `let f2 = function(){}`
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