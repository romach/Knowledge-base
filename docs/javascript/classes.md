---
id: classes
title: Classes
sidebar_label: Classes
---

**How to declare class?**

```javascript
class Balance {
  constructor(amount) {
    this.amount = amount;
  }
  increment(amount) {
    this.amount += amount;
  }
}
```

**Describe prototype chain of `b`:**

```javascript
function Balance() {
  this.hello = () => "Hello";
}
const b = new Balance();
// Object{hello:func} => Object{constructor:func} => Object{system methods}
```

**Describe prototype chain of `b`:**

```javascript
class Balance {
  constructor(amount) {
    this.amount = amount;
  }
  increment(amount) {
    this.amount += amount;
  }
}
const balance = new Balance(10);
// Object{amount:field} => Object{constructor:func, increment:func} => Object{system methods}
```

**When do you need to use `super()`?**

- to return values from descendant's `constructor()`
- to access this in descendant's `constructor()`

