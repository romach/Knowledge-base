---
title: CSS Overview
sidebar_label: Overview
---

## Basic

**How to import CSS to page?**

**How to make element invisible?**

```css
visibility: hidden;
```

**How to remove element from the DOM tree?**

```css
display: none;
```

**How to forbid to select text?**

```css
user-select: none;
```

## Typography

**How to make bold text?**

```css
font-weight: 700;
```

**How to make normal text?**

```css
font-weight: 400;
```

**How to make italic text?**

```css
font-style: italic;
```

**How to change text case?**

```css
text-transform: lowercase;
text-transform: uppercase;
text-transform: capitalize;
```

**How to align text horisontally?**

```css
text-align: right;
text-align: left;
text-align: center;
text-align: justify;
```

**How to align text vertically?**

- use `vertical-align` property

**How to truncate one line of text?**

```css
white-space: nowrap; /** text remains in one line **/
overflow: hidden; /** text is shrinked by parent margins **/
text-overflow: ellipsis; /** add three dots at the end **/
```

## Lists

**How to delete list items' circles?**

```css
ul {
  list-style: none;
}
```

## Floats

**How to implement clearfix?**

- add block element with `clear: both`

**How to fix element at the top of window?**

```css
position: fixed;
top: 0;
right: 0;
left: 0;
```

**How to fix element at the bottom of window?**

```css
position: fixed;
bottom: 0;
right: 0;
left: 0;
```

**How to make "sticky" element?**

```css
position: sticky;
top: 0;
```