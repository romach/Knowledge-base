---
id: exception-handling
title: Exception handling
sidebar_label: Exception handling
---

**How to catch exceptions?**

```javascript
func(){
    throw new Error("Some description");
}

try {
	func();
} catch (error) {
	console.log("Some error")
} default {
	// some default action
}
// code after try-catch block
```

**What values can we throw?**

We can throw arbitrary values, but it is better to throw `Error` or subclasses, because it has stack trace.

**What are the steps of `try-catch block`?**

1. run code inside `try` block
2. run code inside `catch` block **on exception**
3. run code inside `default` block **always**
4. run code after `try-catch` block

**When code after `try-catch` block is not executed?**

When `catch` or `default` block has `return` or `throw` statements.

**How can we get message from `Error`?**

```javascript
error.message
```

**How can we get stack trace from `Error`?**

```javascript
error.stack
```