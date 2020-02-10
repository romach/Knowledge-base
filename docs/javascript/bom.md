---
title: BOM
sidebar_label: BOM
---

## LocalStorage

**How to save value to localStorage?**

```javascript
localStorage.setItem('key', 'value');
```

**How to get value from localStorage?**

```javascript
localStorage.getItem('key');
```

**How to remove value from localStorage?**

```javascript
localStorage.removeItem('key');
```

**How to clear localStorage?**

```javascript
localStorage.clear();
```

## Local environment

**How to get `UserAgent`?**

```javascript
navigator.userAgent;
```

**How to get language?**

```javascript
navigator.language;
```

**How to get plugins?**

```javascript
navigator.plugins;
```

## Location

**How to get full url?**

```javascript
location.href;
```

**What parts does full url have?**

- protocol
- host
- pathname
- hash

**How to add event listener on hashchange?**

```javascript
window.addEventListener('hashchange', callback);
```

## Async code execution

**How to execute code after some period?**

```javascript
setTimeout(func, millis);
```

**How to clear timeout?**

```javascript
clearTimeout(timer);
```

**How to run code with interval?**

```javascript
setTimeout(func, millis);
```

**How to clear interval?**

```
clearInterval(millis);
```

