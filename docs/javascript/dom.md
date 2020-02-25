---
id: dom
title: DOM
sidebar_label: DOM
---

**What object should we use to manipulate with DOM?**

- `document`

**How to remove node?**

```javascript
node.remove()
```

**How to get element by id?**

```javascript
document.getElementById("someId"); // without #
```

**How to get elements by tag name?**

```javascript
document.getElementsByTagName("span"); // returns HTMLCollection
```

**How to get first element by query selector?**

```javascript
document.querySelector("span");
```

**How to get all elements by query selector?**

```javascript
document.querySelectorAll("span"); // returns NodeList
```

**How to read node attribute?**

```javascript
node.getAttribute("id");
```

**How to set node attribute?**

```javascript
node.setAttribute("id", "some-id");
```

**How to get node type?**

```javascript
node.nodeType;
```

**How to get node name?**

```javascript
node.nodeName;
```

**How to get access to the text inside node?**

```javascript
node.textContent;
```

**How to navigate through node tree?**

```javascript
node.previousSibling;
node.nextSibling;
node.childNodes;
node.parentNode;
```

**How to modify node tree?**

```javascript
document.createElement("p");
document.createTextNode("Text");
newNode = node.cloneNode(deepClone:Boolean);
node.appendChild(rightLeafNode);
node.insertBefore(newLeftNode, beforeRightNode);
node.removeChild(childNode);
node.replaceChild(new, old);
```

**How to add event listener to element?**

```javascript
node.addEventListener("click", handler);
```

**How to change browser reaction on event?**

```javascript
event.preventDefault(); // stops default browser reaction on event
```

**How to stop event bubbling?**

```
event.stopPropagation();
```

