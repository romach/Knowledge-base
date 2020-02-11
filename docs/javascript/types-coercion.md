---
id: types-coercion
title: Types coercion
sidebar_label: Types coercion
---

**How to check numeric input?**

- `if (Number(x) === 1){}`

**How to test for null or undefined?**

- `if (!x){}` - **bad** - be aware of pitfall because of falsy values;
- `if (x === undefined)` - **good**

**How to check that value is integer?**

Use `Number.isInteger(num: number): boolean`

**How to parse float?**

- `Number.parseFloat(str: string): number` - **bad** - ignores leading whitespace and illegal trailing characters and can hide problems;
- `Number()` - **good** - ignores leading and trailing whitespace

**How to parse integer?**

- `Number.parseInt(str: string, radix=10): number` - **bad**
  - coercing to string is inefficient
  - stopping before the first non-digit
- `Math.trunc(num: number): number` - **good**

**How are types are compared with each other?**

See [table](https://dorey.github.io/JavaScript-Equality-Table/) for reference

**What are coercions rules between types?**

- see [table](https://getify.github.io/coercions-grid/)
- read [article](https://davidwalsh.name/fixing-coercion)

**How are types converted to boolean?**

| Initial value                   | Boolean    |
| ------------------------------- | ---------- |
| `undefined`                     | `false`    |
| `null`                          | `false`    |
| `0`                             | `false`    |
| `NaN`                           | `false`    |
| numbers (besides `0` and `NaN`) | **`true`** |
| `''`                            | `false`    |
| strings (besides `''`)          | **`true`** |
| objects                         | **`true`** |

**How are types converted to numbers with `Number()`?**

| Initial               | Result of `Number()`          |
| --------------------- | ----------------------------- |
| `undefined`           | **`NaN`**                     |
| `null`                | `0`                           |
| `false`               | `0`                           |
| `true`                | `1`                           |
| `''`                  | `0`                           |
| string (besides `''`) | parsed to number or **`NaN`** |
| object                | use `valueOf()`               |

