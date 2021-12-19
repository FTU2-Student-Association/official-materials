---
layout: default
title: ECMAScript 6
nav_order: 8
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

## let & const

Khi muốn gắn giá trị, sử dụng:

- let: nên xài mọi lúc mọi nơi. Scope giới hạn. Không hỗ trợ hosting.
- const: nên xài khi định nghĩa biến không gán lại hoặc object (không xài toán tử gán cho lần 2 được). Scope giới hạn. Không hỗ trợ hosting.
- var: hao tốn tài nguyên hơn. Được hỗ trợ hosting (đem lên đầu đoạn code) và global scope.

## Template literals

```js
let varWorld = 'World';
console.log(`Hello ${varWorld}!`);
```

>Cách trên để chèn biến thẳng vào chữ
{: .q}

Thêm dấu `/` để cancel

## Arrow function

```js
let newFunction = function (params) {
    
}

// Sử dụng arrow function để viết nhanh hơn
let newFunction = (params) => {
    
}

//Nếu chỉ có một đối số có thể viết như sau

let newFunction = params => console.log(params)  
```

>Lưu ý: arrow function không có `context` và không làm object constructor được.
{: .q}

---

## Classes

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  getMean() {
      return
  }
} 
```

>Sử dụng cho gọn về sau
{: .q}

## Default parameter values

```js
function logger(log = 'Gia tri mac dinh') {
    console.log(log)
}

logger(undefined);
//Như vậy sẽ in ra giá trị mặc định.
```

---

## Enhanced object literals

1. Định nghĩa key cho object

```js
let name='oof';
let price=10;

var course = {
    name,
    price
}

console.log(course)
//Kết quả ra như việc gắn name: name
```

2. Định nghĩa method cho object

```js
let name='oof';
let price=10;

const course = {
    name,
    price,
    // Cách bình thường
    getName function() {
        something
    }
    // Cách mới
    getName() {
        something
    }
}

console.log(course)
//Kết quả ra như việc gắn name: name
```

3. Định nghĩa key cho object bằng biến

```js
let fieldName = name;
let fieldPrice = price;

const course = {
    [fieldName]: 'John',
    [fieldPrice]: 10,
}

console.log(course)


```

---

## Destructuring & Rest

Cách tạo các biến mới nhanh từ Array

```js
let newArray = [1, 2, 3]

let [a, b, c] = newArray

console.log(a)
```

Xài thêm rest để lấy các phần tử nhanh

```js
let newArray = [1, 2, 3]

let [a, ...rest] = newArray

console.log(rest)
```

>Console sẽ in ra [2,3]
{: .q}

---

Xài tương tự với object

```js
let newArray = {
    name: "oof",
    price: 10,
    address: "46 Bui Thi Xuan",
}

let { name: newName, price, ...rest } = newArray
//newName sau dấu : là để đổi tên biến khi lấy ra,
//xài như vậy sẽ không gặp lỗi
console.log(newName)
console.log(rest)
```

Cách lấy ra một property của object

```js
let newArray = {
    name: "oof",
    price: 10,
    address: {
        name:"46 Bui Thi Xuan",
        }
}

let { name: newName, price, address: {name : nameChildren} } = newArray
//newName sau dấu : là để đổi tên biến khi lấy ra,
//xài như vậy sẽ không gặp lỗi
console.log(nameChildren)
```

Khi muốn lấy một giá trị trong object mà không có, ta có thể gán giá trị mặc định như sau

```js
let newArray = {
    name: "oof",
    price: 10,
    address: {
        name:"46 Bui Thi Xuan",
        }
}

let { name: newName, description= 'Gia tri mac dinh' } = newArray
//newName sau dấu : là để đổi tên biến khi lấy ra,
//xài như vậy sẽ không gặp lỗi
console.log(description)
```

Một cách sử dụng khác của Rest

```js
function logger(...params) {
    console.log(params)
}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9))
```

Một magic

```js
function logger({ name, price }) {
    console.log(name)
    console.log(price)
}

logger({
    name: "oof",
    price: 13,
    description: "nothing",
})
```

>Xài cách này không cần gọi object lại nhiều lần trong hàm
{: .q}

Xài lại với array

```js
function logger([a, b, ...rest]) {
    console.log(a)
    console.log(b)
    console.log(rest)
}

logger([1, 2, 5, 4, 6, 5, 46, 3, 2])
```

---

## Spread

Cách dùng với array

```js
let array1 = ["Hello", "Ocean"]
let array2 = ["World", "Trees", "Yup"]

let array3 = [...array1, ...array2]

console.log(array3)
```

>Xài tương tự với Object để nối Object với nhau

Kết hợp cả rest và Spread

```js
let array = ["Yup", "Money", "Go"]

function logger(...rest) {
    console.log(...rest)
}

logger(array)
```
