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
