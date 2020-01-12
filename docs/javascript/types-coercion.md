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