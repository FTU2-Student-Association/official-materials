---
layout: default
title: Finding DOM Elements
nav_order: 1
# has_children: true
parent: HTML DOM
grand_parent: JavaScript
---

<!-- markdownlint-disable MD025-->
# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
<!-- markdownlint-enable MD025-->

Những phương thức sau sẽ chọn element trong DOM qua reference.

## Finding HTML elements by id
{: .fs-7}

```js
const element = document.getElementById("intro");
```

If the element is found, the method will return the element as an object (in element).  
If the element is not found, myElement will contain null.

>This example finds the element with id="intro"
{: .q}

---

## Finding HTML elements by tag name
{: .fs-7}

```js
const element = document.getElementsByTagName("p");
```

>This example finds all `<p>` elements
{: .q}

---

## Finding HTML elements by class name
{: .fs-7}

```js
const x = document.getElementsByClassName("intro");
```

If you want to find all HTML elements with the same class name, use getElementsByClassName().

>This example returns a list of all elements with class="intro".
{: .q}

---

## Finding HTML elements by CSS selectors
{: .fs-7}

```js
const x = document.querySelector("p.intro");
//Chọn một element
const x = document.querySelectorAll("p.intro");
// Chọn nhiều elements
```

If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

>This example returns a list of all `<p>` elements with class="intro"
{: .q}

Sử dụng giống CSS

---

## Finding HTML elements by HTML object collections
{: .fs-7}

```js
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
```

>This example finds the form element with id="frm1", in the forms collection, and displays all element values
{: .q}
