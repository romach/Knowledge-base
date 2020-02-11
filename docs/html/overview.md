---
title: HTML Overview
sidebar_label: Overview
---

**How to remove element from keyboard tab navigation?**

Add attribute `tabindex="-1"`. See also: [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)

**What semantic tags do you know?**

- `<header>` - is used for page or article header;
- `<main>` - is used for main content of the page; should be used once per page;
- `<nav>` - contains navigation links;
- `<footer>` - is used for page or article footer;

**What element can you use to show progress bar?**

- `<meter>`;
- `<progress>`;

**Create basic HTML structure for web-page**

- `doctype` - tells browser how to process page
- `html` - content of the page
  - set `lang` attribute
- `head` - metadata for page (for example, title)
  - set `<meta charset="utf-8">` tag
- `body` - content that is displayed in browser

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
    	<title>Title</title>
        <link rel="styleSheet" href="./index.css"/>
    </head>
    <body>
        
    </body>
</html>
```

**How to add links?**

```html
<a href="./index.html">Link</a>
```

**How to make link be opened in new tab?** 

```html
<a href="./index.html" target="_blank">Link</a>
```

