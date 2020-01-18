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

**What is _callback_?**

- function that is argument of a function or method call

**How to define parameter _default value_?**

```javascript
function f(a = 0) {}
```

**What is _rest parameter_?**

- parameter that collects multiple parameters into array

```javascript
function f(a, ...b) {}
```

**How can you simulate named parameters?**

We can pass object to method call and destructure it with default parameters

```javascript
func({a:1, b:2})
function func({a=0, b=0}={})
```

**What is _spread argument_?**

- operator that converts single iterable argument to multible arguments
- is used in method call
- is opposite to _rest parameter_

```javascript
function spread(a, b) {
  console.log(a, b);
}
spread(..."ab");
```

**How to evaluate JS code?**

Is better to evaluate code in global context

```javascript
eval.call(undefined, "code");
```

**Note:** `Function` creates function in non-strict mode.

```javascript
new Function("a", "b", "return a + b")(1, 2);
```

**What is carrying?**

- converting function with two parameters into two nested functions with one parameter each.

  ```javascript
  x => y => x + y;
  ```

## Context

**What is context?**

- it is the object what is bound to `this` variable inside function body;

**How to invoke function with specific context?**

- `func.call(obj, arg1, arg2)`
- `func.apply(obj, [arg1, arg2])`
- `func.call(obj, ...[arg1, arg2])`
- `const bound = func.bind(obj, arg1, arg2)`

**How can you implement `bind()` function?**

```javascript
function bind(func, context, ...boundArgs) {
  return function(...args) {
    func.call(context, ...boundArgs, ...args);
  };
}
```

**How does context work in different function types?**

|                                             | Real function                                                 | Method                   | Constructor    |
| ------------------------------------------- | ------------------------------------------------------------- | ------------------------ | -------------- |
| Ordinary function<br />**_dynamic `this`_** | `undefined` in `strict` mode<br />`global` in non-strict mode | object context           | object context |
| Arrow function<br />**_lexical `this`_**    | context from outer scope                                      | context from outer scope | -              |
| Method<br />**_dynamic `this`_**            | `undefined` in `strict` mode                                  | object context           | -              |
| Class                                       | -                                                             | -                        | object context |

**How does context work in arrow function?**

- arrow functions get context (`this`) from outer scope with closure (the logic is the same as for variables)
- `arguments` is absent in arrow function
