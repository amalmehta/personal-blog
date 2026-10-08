---
title: Debounce in a few lines
description: A sample post showing syntax-highlighted code.
date: 2026-09-24
---

*This is a sample post showing how code blocks look.*

A debounce waits for input to go quiet before it does anything:

```js
function debounce(fn, wait = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer); // restart the countdown on every call
    timer = setTimeout(() => fn(...args), wait);
  };
}

const save = debounce(() => console.log("saved"), 500);
```

Each call cancels the previous timer, so `fn` only runs once the calls stop for `wait` milliseconds.
