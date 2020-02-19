---
title: Optimization
sidebar_label: Optimization
---

**How to optimize CSS?**

- minify (use Shrinker)
- concatenate (use Shrinker)
- asynchronous load (use loadCSS.js)
- load critical CSS in `style` tag inside `head`

**How to optimize JS?**

- asynchronous load using `defer` and `async` attributes

**How to optimize images?**

- use smaller images for mobile devices (use `srcset` attribute)
- scale down large images

**What page loading steps do you know?**

- DNS resolution
- Initial TCP connection
- SSL / TLS handshake
- Request
- TTFB (*time to first byte*) / Waiting
- Content download
- Parse DOM
- Parse CSSOM
- Request sub-resource
- Execute JS
- Apply CSS
- Create layout
- Render

**What types of DNS servers do you know?**

- **Root DNS servers** - store information about Top Level Domain DNS servers 
- **Top Level Domain DNS server** - stores information about Second Level Domain SNS servers
- **Hosting DNS server** - stores information about IP address of the server

**What browser events of page loading do you know?**

- `DOMContentLoaded` - initial HTML was loaded and parsed
- `Onload` - page was loaded

**What is Render Tree?**

- combination of DOM and CSSOM
- contains nodes that will be rendered in browser

**How to use CSS media types?**

```html
<link href="style.css" rel="stylesheet" media="screen">
```

**What optimization methods do you know?**

- reduce DNS lookup

  - store vendor css and js locally
  - use `rel="dns-prefetch"` to prefetch DNS of js and css resources

- improve TCP connection

  - use `rel='preconnect'` to create TCP connection

- decrease TTFB

  - cache resources

- decrease content download time

  - use GZIP for static files

- use CSS media types and CSS media queries

- add `async` or `defer` attributes to `<script>` tags

- dynamic js load

- combine CSS

- minimize CSS

- combine JS

- minimize CSS

- GZIP compression

- substitute images with CSS effects

- combine images into sprites

- scale images to their display size

- create smaller versions of all images

  - use `srcset` attribute

- add font face for each font style

  ```css
  @font-face {
    font-family: Regular;
    src: url(regular.woff);
    font-weight: normal;
  }
  @font-face {
    font-family: Bold;
    src: url(bold.woff);
    font-weight: bold;
  }
  ```

- subset font for different languages

- load critical front with `preload` directive:

  ```html
  <link rel="preload" href="/fonts/font-l.woff2" as="font">
  ```

**What is the difference between `async` and `defer`?**

|                             | default                               | `defer`                                      | `async`                             |
| --------------------------- | ------------------------------------- | -------------------------------------------- | ----------------------------------- |
| `DOMContentLoaded`          | before                                | executes before `DOMContentLoaded`           | independent from `DOMContentLoaded` |
| DOM                         | executes according occurrence in code | executes after DOM is ready                  | independent from DOM                |
| downloading and DOM parsing | blocks                                | doesn't block                                | doesn't block                       |
| execution                   | blocks                                | doesn't block (executes after DOM is parsed) | blocks                              |
| Order                       | executes according occurrence in code | preserve order with other `defer`            | doesn't preserve order              |

**What values of `Cache-Control` HTTP header do you know?**

- `no-cache` - always checks `Etag` response header
- `no-store` - forbid to cache response
- `public` - caches response
- `private` - forbid caching on CDN

**How to create responsive image with `srcset` attribute?**

- add `srcset` attribute - set path and screen width values

  ```
  srcset="./img-small.png 100w,
  		./img-medium.png 200w"
  ```

- add sizes attribute if your image haven't 100% width

  ```
  sizes="(min-width:760px) 50vw, 100vw"
  ```

  