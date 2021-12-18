---
layout: default
title: Javascript array
nav_order: 5
# has_children: true
parent: Variables & data type
grand_parent: JavaScript
---

<!-- markdownlint-disable MD022 MD025-->
# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Cách tạo array
{: .fs-7}

```js
const cars = ["Saab", "Volvo", "BMW"];
```

>Sử dụng array để trữ hàng loạt các dữ liệu có kiểu giống nhau.
{: .q}

Cách tạo khác `(không khuyến cáo)`

```js
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```

---

## Cách để truy cập một giá trị trong array
{: .fs-7}

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

>Cách giá trị trong array sẽ được đánh số từ 0 trở đi tương ứng với 0 là elements đầu tiên của array.
{: .q}

Để thay đổi giá trị của array, ta target element ở vị trí tương ứng và gán cho giá trị mới:

```js
cars[2] = "Xạp đe"
```

---

## Tính chất của array
{: .fs-7}

### Arrays are Objects

Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

>But, JavaScript arrays are best described as arrays.
{: .q}

---

### Array Elements Can Be Objects

```js
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

---

## Array Properties and Methods
{: .fs-7}

### The length Property

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);
//Trả về giá trị 4
```

>Ví dụ thêm
{: .q}

```js
const hi = [1,2,3,4,5,6,7]

console.log(hi[0]) //In ra element đầu
console.log(hi[hi.length - 1]) //In ra element cuối
```

---

[Bổ sung sau](https://www.w3schools.com/js/js_arrays.asp)
