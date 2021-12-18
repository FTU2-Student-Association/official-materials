---
layout: default
title: Javascript statements
nav_order: 5
# has_children: true
parent: JavaScript
# grand_parent:
---

<!-- markdownlint-disable MD022 MD025-->
# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
<!-- markdownlint-enable MD025-->

---

## Conditional statements

### if, else if, else

```js
if (Điều kiện đầu) {
    Kiện hiện nếu điều kiện 1 đúng
} else if (Nếu if không đúng sẽ xét điều kiện này) {
    Thực hiện nếu điều kiện 2 đúng
} else {
    Điều kiện sẽ chạy khi tất cả ở trên đều sai
}
//Có thể thêm else if bao nhiêu tuỳ thích
```

---

### switch

```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Example

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript switch</h2>

<p id="demo"></p>

<script>
let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

>Xét điều kiện theo các case trước, nếu không có case nào thoả sẽ chạy default.
{: .q}
