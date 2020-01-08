---
id: data-types
title: Data types
sidebar_label: Data types
---

**What is the difference between primitive variables and objects?**

|           | Primitive | Object  |
| --------- | --------- | ------- |
| Immutable | Yes       | No      |
| Passed    | By value  | By link |
| Compared  | By value  | By link |

**How many data types JavaScript has got?**

- JavaScript has 7 types: 6 primitive and `object`

**Why `typeof null` is `"object"`?**

- it is a bug;
- `null` is represented as NULL pointer (so it is an object link), but implementation of `typeof` doesn't have check for null pointer, only for object; [details](https://2ality.com/2013/10/typeof-null.html)

**Why `typeof NaN` is `"number"`?**

- because `NaN` is a numeric data type whose value cannot be represented using actual numbers;

**Why `typeof function` is `"function"`?**

- despite the fact that `function` has `"object"` type, `typeof` returns `"function"` . This is logic of `typeof` operator
