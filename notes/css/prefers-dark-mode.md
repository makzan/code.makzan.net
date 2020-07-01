---
title: Prefers dark mode in CSS
tags:
  - CSS
emoji: 🌗
---

We can use `prefers-color-scheme` media query for dark/light mode styles.


```css
body {
  font-family: 'Inter', sans-serif;
  margin: auto;
  max-width: 700px;
  padding: 1em;
  background: white;
  color: #222;
}
a,a:visited {
  color: blue;
}

@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
  a,a:visited {
    color: yellow;
  }
}
```