---
id: modules
title: Modules
sidebar_label: Modules
---

**How can you use CommonJS modules?**

Export:

```javascript
function f() {
  console.log("Hello");
}
module.exports = f;
```

Import:

```javascript
const f = require("./f.js");
```

**How can you use EcmaScript modules?**

Export:

```javascript
function f(){ console.log('Hello') }
export default f; // default export
// or
export f;
```

Import:

```javascript
import f from "./f.mjs"; // import default function
import * as f from "./f.mjs"; // import whole module as namespace object
import { f } from "./f.mjs"; // import a single export
```

**How to simulate modules?**

```javascript
// module1 - in global scope

// use IIFE to hide internal variables
var module2 = (function() {
  var imported = module2.func;
  function intrnal() {}
  function exported() {
    imported();
    internal();
  }
  return {
    exported: exported
  };
})();
```

**What module systems do you know?**

- **_CommonJS_** - Node
- **_AMD_** (Asynchronous Module Definition) - **_RequireJS_** - browser
- **_ECMAScript_** - server and browser

**How to use named imports and exports?**

Use `export` before declaration.

```javascript
// in module1.mjs
// inline named export
export function hello() {
  console.log("Hello");
}
export const PI = 3.14;
```

```javascript
// named export with clauses
function hello() {
  console.log("Hello");
}
const PI = 3.14;
export { hello, PI };
//or
export { hello as h, PI as p };
```

```javascript
// in module2.mjs
import { hello } from "./module1.mjs";
// rename import
import { hello as h } from "./module1.mjs";
```

**How to use namespace imports?**

```javascript
import * as myModule from "./module.mjs";
myModule.hello();
```

**How to use default export?**

```javascript
// in module.mjs
export default function func() {}
// or
export default "value";

// in main.mjs
import func from "./module.mjs";
func();
```

**What module specifiers do you know?**

- relative path: `'./path/module.mjs'`
- bare path: `'package'`
- deep import path: `'package/path/module.mjs'`

**How can you dynamically load module?**

Use `import()` operator.

```javascript
// in price.mjs
export const PRICE = 100;

// in main.mjs
function loadPrice() {
  const priceModulePath = "./price.mjs";
  return import(priceModulePath).then(price => {
    const result = price.PRICE;
    return result;
  });
}
```
