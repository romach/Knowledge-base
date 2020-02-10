---
id: prototypes
title: Prototypes
sidebar_label: Prototypes
---

**What do you know about prototype?**

- it is object
- object literal has prototype
- object inherits all prototype properties

**How can you access prototype?**

- `Object.getPrototypeOf(obj)` - **recommended**
- via `__proto__` property

**How can you create object with specified prototype?**

- with `__proto__` property:

  ```javascript
  const a = {
    one: 1
  };
  const b = {
    __proto__: a,
    two: 2
  };
  b.one; // => 1
  ```

- with `Object.create(proto)`

  ```javascript
  const a = {
    one: 1
  };
  const b = Object.create(a);
  b.one; // => 1
  ```

**How can you change prototype?**

```javascript
Object.setPrototypeOf(o, proto);
```

**How to check that one object is prototype of another?**

```javascript
o.isPrototypeOf(b); //`o` is in prototype chain of `b`
```

**What happens when we change object property?**

- only own property is changed (or is created when not found)
- property from prototype stays intact
