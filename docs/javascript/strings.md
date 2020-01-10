---
id: strings
title: Strings
sidebar_label: Strings
---

**How to convert value to `string`?**

- `String(value)` - **preferred**
- `'' + value`
- `x.toString()` - not applicable for `null` and `undefined`

**How to strignify values?**

- use `toString()` method
- use `JSON.strignify()` method

**How are strings compared?**

Strings are compared by numeric values of their characters

**How characters are represented?**

Unicode characters are consisted of _code points_.

Each code point can have 1 or 2 _code units_.

JavaScript character is represented by code units. So, length of one unicode character can equals `2`.

**How to check if string ends with other string?**

```javascript
string.endsWith("a");
```

**How to check if string contains other string?**

```javascript
string.includes("a");
```

**How to check index of substring?**

```javascript
string.indexOf("a");
```

**How to extract substring?**

- use `.slice(start=0, end=this.length)` - **good**
- use `.substring(start: number, end=this.length)` - **bad**, doesn't support negative indeces

**How to split string into letters?**

- use spreading: `[...word]` - **good**, spreads into Unicode characters
- use `.split(separator)` - **bad**, because splitting to JavaScript characters

**How to concatenate strings?**

- use plus operator: `'a' + 'b'`
- `.concat(...)`
- pads string to desired size: `.padStart(size)`, `.padEnd(size)`
- repeat: `.repeat(number)`

**How to transform strings?**

- replace substring: `.replace(searchSubstring, replaceSubstring)`
- change case: `.toUpperCase()`, `.toLowerCase()` - **don't work fine with all alphabets**
- trim: `trim()`, `trimStart()`, `trimEnd()`

**What features of template literals do you know?**

- string interpolation
- multi-line

**How can you use raw string literals?**

```javascript
String.raw`^\.`
```

**How to create multiple lines template literal with proper indentation?**

```javascript
import dedent from 'dedent';
dedent`
  <div>
    ${text}
  </div>`
```

```javascript
	`
<div>
	${text}
</div>
	`.trim()
```

