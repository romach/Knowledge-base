---
id: arrays
title: Arrays
sidebar_label: Arrays
---

**How to merge two arrays?**

```javascript
Array.prototype.push.apply(array1, array2);
```

**How to shuffle array?**

We can combine `Math.random()` with `Array.prototype.sort()`

```javascript
[1, 2, 3].sort((first, second) => Math.random() - 0.5);
```

**How can you create array?**

You can use _array literal_: `let arr = [1, 2]`

**How can you find `NaN` in array?**

```javascript
[NaN].includes(NaN);
[NaN].findIndex(x => Number.isNaN(x));
[NaN].find(x => Number.isNaN(x));
```
