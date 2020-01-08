---
id: testing
title: Testing
sidebar_label: Testing
---

**How to check that expression throws exception?**

```javascript
assert.throws(() => {
  null.prop;
});
```

```javascript
assert.throws(() => {
  null.prop;
}, TypeError);
```

```javascript
assert.throws(() => {
  null.prop;
}, /^TypeError: Cannot read property 'prop' of null$/);
```

```javascript
assert.throws(
  () => {
    null.prop;
  },
  {
    name: "TypeError",
    message: `Cannot read property 'prop' of null`
  }
);
```

**How to check an error type?**

```javascript
e.constructor === SyntaxError;
e.constructor.name === "name";
```

**What falsy values do you know?**

- `null`, `undefined`
- `0`, `NaN`
- `false`
- `''`
