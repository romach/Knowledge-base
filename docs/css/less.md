---
title: LESS
sidebar_label: LESS
---

**How to add LESS support to HTML page?**

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js" ></script>
```

**How to use variables?**

```less
@border: 1px solid black;
header {
    border: @border;
}
```

**How to use calculations with variables?**

```less
@padding: 15px;
p {
  padding: @padding @padding + 10;
}
```

**How to use nested rules?**

```less
.links {
  .link {
    color: @link-color;
    &::after {
      content: ' - click on me';
    }
  }
}
```

**How to darken color?**

```less
color: darken(@link-color, 10%);
```

