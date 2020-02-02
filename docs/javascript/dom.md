---
id: dom
title: DOM
sidebar_label: DOM
---

**How to get element by id?**

```javascript
document.getElementById("someId"); // without #
```

**How to get elements by tag name?**

```javascript
document.getElementByTagName("span"); // returns HTMLCollection
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

**How to get text inside `div` node?**

```javascript
divNode.innerHTML;
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
document.createElement("My element");
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
