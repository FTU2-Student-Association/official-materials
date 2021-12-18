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

## Ternary Operator
The ternary operator is a simplified conditional operator like if / else.

```js
Syntax: condition ? <expression if true> : <expression if false>
```

>Xài giống if else nhưng gọn hơn, sử dụng như hình.
{: .q}

## Loop

Different Kinds of Loops
{: .fs-6}

JavaScript supports different kinds of loops:

```markdown
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
```

[More Loop](https://www.w3schools.com/js/js_loop_for.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

### For loop

```js
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

---

### For in

```js
const person = {
  fname:"John",
  lname:"Doe",
  age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text)
```

>Lấy từng phần tử của object ra

[For in](https://www.w3schools.com/js/js_loop_forin.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

>Khi cần học sẽ cập nhật thêm.
{: .q}

---

### For of

```js
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

console.log(text)
```

>Lấy từng phần tử của mảng hoặc từng chữ cái của chuỗi.
{: .q}

[For of](https://www.w3schools.com/js/js_loop_forof.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

>Khi cần học sẽ cập nhật thêm.
