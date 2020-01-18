---
id: objects
title: Objects
sidebar_label: Objects
---

**How can you create objects?**

- with _object literal_:

  ```javascript
  {
    prop: "value";
  }
  ```

  ```javascript
  const prop = "value";
  {
    prop;
  } // => {prop: "value"}
  ```

* `Object.create(prototype)`

**How to delete property from object?**

Use [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator: `delete obj.prop;`

- delete only own properties;

**How to check that object has property (including inherited)?**

Use `in` operator: `'prop' in obj`

**How to get own object keys?**

```javascript
Object.keys(obj); //only enumerable, only strings
Object.getOwnPropertyNames(obj); //only strings
Object.getOwnPropertySymbols(obj); //only symbols
Reflect.ownKeys(obj); //all keys
```

**How to get object keys-value pairs?**

```javascript
Object.entries(obj); //=> [['key1', 'value1'], ['key2', 'value2']]
```

**How to check if object has not inherited property?**

Use [`hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) method: `obj.hasOwnProperty('prop')`

**How to convert object to JSON?**

Use [`JSON.strignify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method: `JSON.stringify({ x: 5, y: 6 })`

**How to override `JSON.strignify()` behavior?**

- use `replacer` callback as second argument:

  ```javascript
  JSON.stringify(obj, (key, value) => {...})
  ```

  If you return `undefined`, property will not be added to result string.

- use `replacer` array:

  ```javascript
  JSON.stringify(obj, ["one", "two"]);
  ```

  If object has property from array, this property will be added to result string.

- use `toJSON()` object's method

**How to parse object from string?**

Use [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method: `JSON.parse('{"key":value}')`

**How should I use `instanceof` operator?**

- it is used with objects;

- it returns `true`, if variable was created with specified class (inheritance rules work too)

  ```javascript
  [] instanceof Array === true;
  [] instanceof Object === true;
  ```

**Why do we need wrapper classes?**

- to convert variables to specific primitive type with constructor function;
- wrapper classes provide properties for primitive types;
- wrapper classes are namespaces for utility functions;
- to create objects from primitive values;

**How to get object keys?**

```javascript
Object.keys(obj);
```

**How to get object keys-value pairs?**

```javascript
Object.entries(obj); //=> [['key1', 'value1'], ['key2', 'value2']]
```

**How to create getter?**

Add `get` modifier to the method

```javascript
{
    name: "John",
    get func() {
        return this.name;
    }
}
```

**How to create setter?**

Add `set` modifier to the method

```javascript
{
    name: "John",
    set name(name) {
        this.name = name;
    }
}
```

**How can you spread one object into another?**

```javascript
const o = {
	prop1: 1,
	prop2: 2
};
{...o, prop1: 3} // => {prop1: 3, prop2: 2}
{prop1: 3, ...o} // => {prop1: 1, prop2: 2}
```

**How can you make shallow copy of the object?**

```javascript
const o = { prop: 1 };
const copy = { ...o };
```

**How can you create object with default properties?**

```javascript
const defaults = { a: 1, b: 2 };
const inputData = { a: 12 };
const created = { ...defaults, ...input };
```

**How can we use computed property keys?**

```javascript
const keyName = "key";
const o = {
  [keyName]: "value"
};
o.key; // => "value"
o[keyName]; // => "value"
```
