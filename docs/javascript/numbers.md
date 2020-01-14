---
id: numbers
title: Numbers
sidebar_label: Numbers
---

**How to trim number to precision?**

- `2.45.toFixed(1)` - **with rounding**
  - note, that rounding isn't always valid due to floating point numbers cannot represent all decimals precisely

**How to trim number to integer without fraction part?**

- `Math.round(2.45)` - **with rounding**
  - note, that rounding isn't always valid due to floating point numbers cannot represent all decimals precisely
- `Math.floor(2.45)` - round down
- `Math.ceil(2.45)` - round up