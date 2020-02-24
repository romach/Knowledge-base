---
id: objects
title: Objects
sidebar_label: Objects
---

**How objects work with arithmetic operators?**

- first of all object is converted to primitive value using `valueOf()` method;
- if `valueOf()` returns object, then it is ignored and `toString()` method is used;

**How objects work with template literals?**

- `toString()` is used;

**How object is compared with primitive?**

- `valueOf()` is used. If non primitive is returned, `toString()` is used;

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

* with `new` keyword (not recommended)

  ```javascript
  const o = new Object();
  ```
  
* with constructor function

  ```javascript
  function Person(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
  }
  const p = new Person("First", "Second");
  ```

* with classes

  ```javascript
  class Person {
    constructor(firstName, secondName) {
      this.firstName = firstName;
      this.secondName = secondName;
    }
  }
  const p = new Person("First", "Second");
  ```

* assemble from entries

  ```javascript
  Object.fromEntries([
    ["one", 1],
    ["two", 2]
  ]);
  ```

**How to create object without prototype?**

```javascript
Object.create(null);
```

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

**How to get object values (_enumerable_)?**

```javascript
Object.values(o);
```

**How to get object keys-value pairs (_enumerable_)?**

```javascript
Object.entries(obj); //=> [['key1', 'value1'], ['key2', 'value2']]
```

**How to check if object has not-inherited property?**

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

**Notes:**

- prototype isn't copied
- non-enumerable properties aren't copied
- property attributes are not copied properly
- getters and setters are not copied properly

```javascript
const o = { prop: 1 };
const copy = { ...o };
```

**Copy with prototype**

```javascript
const o = { prop: 1 };
const copy = { __proto__: Object.getPrototypeOf(o), ...o }
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

**What does `Object.assign()` function do?**

It assigns properties from `source` objects to `target` object and returns `target` object

```javascript
const target = { first: 1 };
Object.assign(target, { first: 2, second: 2 }, { first: 3, third: 3 });
//=> {first:3, second:2, third:3}
```

**How to create proper shallow copy?**

```javascript
function copyAllOwnProperties(original) {
	return Object.defineProperties(
		{}, Object.getOwnPropertyDescriptors(original)
    );
}
```

**How to freeze object?**

Use `Object.freeze(obj)` - can't change prototype and shallow properties.

```javascript
Object.freeze({ one: 1 });
```

**What is the attribute?**

Ii is component (property) of the property.

**What is property descriptor?**

It is the object where each field is attribute.

```javascript
const o = { one: 1 };
Object.getOwnPropertyDescriptor(o, "one");
```

**What property attributes do you know?**

- **_value_** - property value
- **_writable_**
- **_enumerable_** - ignored by `Object.keys()`
- **_configurable_**

**How to create non-enumerable properties?**

```javascript
Object.defineProperties(obj, {
  prop: {
    value: 3,
    enumerable: false
  }
});
```

**How to change property's attribute?**

```javascript
Object.defineProperty(o, "prop", {
  enumerable: false
});
```
