---
id: variables
title: Variables
sidebar_label: Variables
---

**What is the difference between `let` and `var`?**

|             | `var`                            | `let`                                            |
| ----------- | -------------------------------- | ------------------------------------------------ |
| Scope       | function                         | block                                            |
| Hoisting    | `undefined` before declaration   | has Temporal Dead Zone before declaration        |
| For loop    | updates after each iteration     | new binding (copy) is created for each iteration |
| Declaration | can be redeclared with same name | can't be redeclared                              |

