---
id: iterable
title: Iterable
---

**What methods should `Iterable` interface have?**

- `[Symbol.iterator]() : Iterator`

**What methods should `Iterator` interface have?**

- `next() : IteratorResult`

**What methods should `IteratorResult` interface have?**

- `done()` : boolean
- `value()`