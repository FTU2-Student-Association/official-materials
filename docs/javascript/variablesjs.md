---
layout: default
title: Variables & data type
nav_order: 2
has_children: true
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
<!-- markdownlint-enable MD022 MD025-->

## Cách tạo ra variable

```js
var `tên biến`;
>Ví dụ
var dayLaViDu;
```

---

## Gắn giá trị cho variable

Cách 1:

```js
var newVar = 5;
```

>Nên xài cách này vì đây là cách nhanh gọn nhất.
>Lưu ý không đặt biến tên là `var`.
{: .q}

Cách 2:

```js
var newVar1 = 5,
    newVar2 = 'Hello World!',
    newVar3 = newVar = 5,[4,7,2];
```

>Nên xài cách này vì đây là cách nhanh gọn nhất.
{: .q}

Cách 3:

```js
var newVar;
newVar = 5;
```

>Các cho người rảnh.
>Còn những cách khác nữa nữa tuy nhiên không cần phải làm cầu kỳ khó khăn cho người code chung, nếu có thể luôn luôn chọn `cách 1`.
{: .q}

## Format của biến

Thông nhất chỉ sử dụng một kiểu đặt tên biến duy nhất

>Tên biến có định dạng viết liền không cách, viết hoa chữ cái đầu từ thứ 2 trở đi, không có chữ số đằng sau, không thêm bất cứ thứ gì có vẻ `kỳ lạ!`  
>Ví dụ biến hợp lệ: northAmerica, newVariables
{: .q}

---

## Data type
<!-- markdownlint-disable MD022-->

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```js
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
```

---

Để kiểm tra type của data:

```js
console.log(typeof bar);
//Dùng để kiểm tra xem biến đang chứa kiểu dữ liệu nào
```

Ví dụ

```js
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
```

Ví dụ complex Data

```js
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
```

[Đọc thêm](https://www.w3schools.com/js/js_typeof.asp)

---

Để kiểm tra một biến đang có kiểu boolean gì:

```js
let bar = 1 //hoặc bằng bất kỳ thứ gì
console.log(bar == true) //sẽ in ra true nếu bar đang chứ giá trị có type boolean là true
```

---
## Primitive data
<!-- markdownlint-enable MD022-->

| Value      | Type                     | In if statement |
| :--------- | :----------------------- | :-------------- |
| 333        | Number                   | truthy          |
| 'Hello'    | String                   | truthy          |
| true false | Boolean                  |                 |
| undefined  | Undefined                | falsy           |
| null       | Null (rỗng, không có gì) | falsy           |

[Primitive data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

---

### Number

The Number type is a [double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) (numbers between -(2^53 − 1) and 2^53 − 1). In addition to representing floating-point numbers, the number type has three symbolic values: `+Infinity`, `-Infinity`, and `NaN` ("Not a Number").

---

### String

Empty value

```js
let car = "";    // The value is "", the typeof is "string"
```

>Thứ này không liên quan đến null hay undefined.
{: .q}

---

### Boolen

```js
let a = true
let b = false
if (a>b) {something}
```

>Nhớ kỹ các phép so sánh == và ===
{: .q}

<!-- markdownlint-disable MD022-->

---

### Falsy for Boolen
{: .no_toc}

<!-- markdownlint-enable MD022-->

| Value        | Description                                                                                                                                            |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| FALSE        | The keyword false.                                                                                                                                     |
| 0            | The Number zero (so, also 0.0, etc., and 0x0).                                                                                                         |
| 0            | The Number negative zero (so, also -0.0, etc., and -0x0).                                                                                              |
| 0n           | The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.                                                |
| "", '', ``   | Empty string value.                                                                                                                                    |
| null         | null — the absence of any value.                                                                                                                       |
| undefined    | undefined — the primitive value.                                                                                                                       |
| NaN          | NaN — not a number.                                                                                                                                    |
| document.all | Objects are falsy if and only if they have the `[[IsHTMLDDA]]` internal slot.That slot only exists in document.all and cannot be set using JavaScript. |

>Các giá trị sau đây cũng tính là false và có thể sử dụng trong if else như bình thường.
{: .q}

Ví dụng

```js
if(!(null)) {
    console.log('Hello me')
//In ra Hello me vì điều kiện sai 2 lần
}
```

---

<!-- markdownlint-disable MD022-->
### Truthy for Boolen
{: .no_toc}

<!-- markdownlint-enable MD022-->

| Value           | Description                                            |
| :-------------- | :----------------------------------------------------- |
| if (true)       |                                                        |
| if ({})         | Object rỗng vẫn true                                   |
| if ([])         | Array rỗng vẫn true                                    |
| if (42)         |                                                        |
| if ("0")        |                                                        |
| if ("false")    | DĐây là chữ false chứ không phải boolean giá trị false |
| if (new Date()) |                                                        |
| if (-42)        | Nếu là integer -> true                                 |
| if (12n)        |                                                        |
| if (3.14)       |                                                        |
| if (-3.14)      |                                                        |
| if (Infinity)   |                                                        |
| if (-Infinity)  |                                                        |

>Những giá trị sau đây có boolean là false trong if statement.
{: .q}

---

### Difference between null and undefined

| A                    | B                                           |
| :------------------- | :------------------------------------------ |
| typeof null          | // "object" (not "null" for legacy reasons) |
| typeof undefined     | // "undefined"                              |
| null === undefined   | // false                                    |
| null  == undefined   | // true                                     |
| null === null        | // true                                     |
| null == null         | // true                                     |
| !null                | // true                                     |
| isNaN(1 + null)      | // false                                    |
| isNaN(1 + undefined) | // true                                     |

>Những giá trị sau đây có boolean là true trong if statement.
{: .q}

---

<!-- markdownlint-disable MD022-->
## Complex data
<!-- markdownlint-enable MD022-->

| Value   | Type   | In if statement |
| :------ | :----- | :-------------- |
| { , , } | Object | truthy          |
| [ , , ] | Array  | truthy          |

---

### Use const or let

There is no preferred one, its based on your choice of usage for that array or object. You have to understand mutation and reassigning clearly.

>Mutation - updates the values present in the memory.
>Reassign - variable points to new memory locations where new values are stored.
{: .q}

`Let` - offers both mutation and reassiging

`Const` - offers mutation but not reassiging

`Both` - doesnot offers redeclaring

>If your usecase only needs mutation, you can go for const.. if you need reassigning then go for let.
{: .q}

---

### Object

```js
let person = {
    firstName:"John", 
    lastName:"Doe",
    age:50,
    eyeColor:"blue"};
```

>Cách khai báo một object như trên.
>Mọi người sẽ thường khai báo object với `const` thay vì let.
{: .q}

```js
const person = {
    firstName:"John", 
    lastName:"Doe",
    age:50,
    eyeColor:"blue";
}
```

Cách gọi variable của object.

```js
console.log(person.firstName);
```

Cách thêm variable cho object.

```js
person.newVar = 'something';
//Thay đổi Tên
person.firstName = 'Mike'
```

>Nhờ cách này chúng ta có thể tạo ra object rỗng rồi gắn giá trị vào sau, nhưng không khuyến khích làm nếu có thể định nghĩa variables ngay từ ban đầu.
{: .q}

---

<!-- markdownlint-disable MD022-->
