---
id: arrays
title: Arrays
sidebar_label: Arrays
---

**How to merge two arrays?**

```javascript
array1.push(...array2); // alter array1
array1.concat(array2); // merges array1 and array2 creating shallow copy
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

**How can you clone array?**

```javascript
let clone = arr1.concat();
```

**How to find index of element in array?**

```javascript
array.indexOf("element");
```
