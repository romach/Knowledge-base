---
id: scopes
title: Scopes
sidebar_label: Scopes
---

**What is hoisting?**

This is process of putting variable and function declaration to the mamory during the compile phase.

**What is the hoisting order?**

1. `var`, `let`, `const`. Only `var` is initialized by `undefined` during hoisting. `let` initialized by `undefined` after declaration;
2. function parameters;
3. function declarations. Will conflict with variable declarations with the same name;

**What variable scopes do you know?**

- _direct_ - scope where variable was declared;
- _inner_ - scope that is nested to the direct scope;
- _outer_ - parent scope for _direct_;

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
