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
<!-- markdownlint-enable MD025-->

## Cách tạo ra variable

```js
var `tên biến`;
>Ví dụ
var dayLaViDu;
```

Var là một key trong javaScript

---

## Gắn giá trị cho variable

Cách 1:

```js
var newVar = 5
```

> Nên xài cách này vì đây là cách nhanh gọn nhất.
> Lưu ý không đặt biến tên là `var`.
{: .q}

Cách 2:

```js
var newVar1 = 5,
    newVar2 = 'Hello World!',
    newVar3 = newVar = 5,[4,7,2];
```

> Nên xài cách này vì đây là cách nhanh gọn nhất.
{: .q}

Cách 3:

```js
var newVar
newVar = 5
```

> Các cho người rảnh.
> Còn những cách khác nữa nữa tuy nhiên không cần phải làm cầu kỳ khó khăn cho người code chung, nếu có thể luôn luôn chọn `cách 1`.
{: .q}

## Format của biến

Thông nhất chỉ sử dụng một kiểu đặt tên biến duy nhất

> Tên biến có định dạng viết liền không cách, viết hoa chữ cái đầu từ thứ 2 trở đi, không có chữ số đằng sau, không thêm bất cứ thứ gì có vẻ `kỳ lạ!`  
> Ví dụ biến hợp lệ: northAmerica, newVariables
{: .q}

---

## Data type

<!-- markdownlint-disable MD022-->

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```js
let x // Now x is undefined
x = 5 // Now x is a Number
x = "John" // Now x is a String
```

---

Để kiểm tra type của data:

```js
console.log(typeof bar)
//Dùng để kiểm tra xem biến đang chứa kiểu dữ liệu nào
```

Ví dụ

```js
typeof "John" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof false // Returns "boolean"
typeof x // Returns "undefined" (if x has no value)
```

Ví dụ complex Data

```js
typeof { name: "John", age: 34 } // Returns "object"
typeof [1, 2, 3, 4] // Returns "object" (not "array", see note below)
typeof null // Returns "object"
typeof function myFunc() {} // Returns "function"
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

<!-- markdownlint-enable-->

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

| Methods                     | Description                                                                                 |
| :-------------------------- | :------------------------------------------------------------------------------------------ |
| Number.isFinite()           | Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean                 |
| Number.isInteger()          | Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean                  |
| Number.parseFloat()         | Chuyển đổi chuỗi đã cho thành một số dấu phẩy động                                          |
| Number.parseInt()           | Chuyển đổi chuỗi đã cho thành một số nguyên                                                 |
| Number.prototype.toFixed()  | Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân |
| Number.prototype.toString() | Chuyển đổi và trả về số đã cho dưới dạng chuỗi                                              |

[Number methods](https://www.w3schools.com/js/js_number_methods.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

JavaScript Number Methods
{: .fs-7}

| Method           | Description                                                       |
| :--------------- | :---------------------------------------------------------------- |
| isFinite()       | Checks whether a value is a finite number                         |
| isInteger()      | Checks whether a value is an integer                              |
| isNaN()          | Checks whether a value is Number.NaN                              |
| isSafeInteger()  | Checks whether a value is a safe integer                          |
| toExponential(x) | Converts a number into an exponential notation                    |
| toFixed(x)       | Formats a number with x numbers of digits after the decimal point |
| toLocaleString() | Converts a number into a string, based on the locale settings     |
| toPrecision(x)   | Formats a number to x length                                      |
| toString()       | Converts a number to a string                                     |
| valueOf()        | Returns the primitive value of a number                           |

JavaScript Number Properties
{: .fs-7}

| Property          | Description                                                     |
| :---------------- | :-------------------------------------------------------------- |
| constructor       | Returns the function that created JavaScript's Number prototype |
| MAX_VALUE         | Returns the largest number possible in JavaScript               |
| MIN_VALUE         | Returns the smallest number possible in JavaScript              |
| NEGATIVE_INFINITY | Represents negative infinity (returned on overflow)             |
| NaN               | Represents a "Not-a-Number" value                               |
| POSITIVE_INFINITY | Represents infinity (returned on overflow)                      |
| prototype         | Allows you to add properties and methods to an object           |

---

### String

Empty value

```js
let car = "" // The value is "", the typeof is "string"
```

> Thứ này không liên quan đến null hay undefined.
{: .q}

- Có thể cộng các chuỗi lại với nhau.
- ES6: cách để ghi biến vào chuỗi: `Hello ${var}`
- Sử dụng backlash (\) để cancel ký tự đặc biệt.
- Xài property để xem độ dài chuỗi: length

String method
{: .fs-9}

| Method              | Description                                                                                                                         |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| charAt()            | Returns the character at the specified index (position)                                                                             |
| charCodeAt()        | *Returns the Unicode of the character at the specified index                                                                        |
| concat()            | Joins two or more strings, and returns a new joined strings                                                                         |
| endsWith()          | Checks whether a string ends with specified string/characters                                                                       |
| fromCharCode()      | Converts Unicode values to characters                                                                                               |
| includes()          | Checks whether a string contains the specified string/characters                                                                    |
| indexOf()           | *Returns the position of the first found occurrence of a specified value in a string                                                |
| lastIndexOf()       | Returns the position of the last found occurrence of a specified value in a string                                                  |
| localeCompare()     | Compares two strings in the current locale                                                                                          |
| match()             | Searches a string for a match against a regular expression, and returns the matches                                                 |
| repeat()            | Returns a new string with a specified number of copies of an existing string                                                        |
| replace()           | *Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced |
| search()            | Searches a string for a specified value, or regular expression, and returns the position of the match                               |
| slice()             | *Extracts a part of a string and returns a new string                                                                               |
| splice()            | *change the content of your array by removing or replacing existing elements with new ones                                          |
| split()             | *Splits a string into an array of substrings                                                                                        |
| startsWith()        | Checks whether a string begins with specified characters                                                                            |
| substr()            | Extracts the characters from a string, beginning at a specified start position, and through the specified number of character       |
| substring()         | Extracts the characters from a string, between two specified indices                                                                |
| toLocaleLowerCase() | *Converts a string to lowercase letters, according to the host's locale                                                             |
| toLocaleUpperCase() | *Converts a string to uppercase letters, according to the host's locale                                                             |
| toLowerCase()       | Converts a string to lowercase letters                                                                                              |
| toString()          | Returns the value of a String object                                                                                                |
| toUpperCase()       | Converts a string to uppercase letters                                                                                              |
| trim()              | *Removes whitespace from both ends of a string                                                                                      |
| valueOf()           | Returns the primitive value of a String object                                                                                      |

String method
{: .fs-9}

| Property    | Description                                           |
| :---------- | :---------------------------------------------------- |
| constructor | Returns the string's constructor function             |
| length      | *Returns the length of a string                       |
| prototype   | Allows you to add properties and methods to an object |

[String methods and properties](https://youtu.be/b4YivuRmcEw)

---

### Boolen

```js
let a = true
let b = false
if (a > b) {
  something
}
```

> Nhớ kỹ các phép so sánh == và ===
{: .q}

<!-- markdownlint-disable MD022-->

---

### Falsy for Boolen
{: .no_toc}

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

> Các giá trị sau đây cũng tính là false và có thể sử dụng trong if else như bình thường.
{: .q}

Ví dụng

```js
if (!null) {
  console.log("Hello me")
  //In ra Hello me vì điều kiện sai 2 lần
}
```

---

<!-- markdownlint-disable MD022-->

### Truthy for Boolen

{: .no_toc}

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

> Những giá trị sau đây có boolean là false trong if statement.
{: .q}

---

### Difference between null and undefined

| A                    | B                                           |
| :------------------- | :------------------------------------------ |
| typeof null          | // "object" (not "null" for legacy reasons) |
| typeof undefined     | // "undefined"                              |
| null === undefined   | // false                                    |
| null == undefined    | // true                                     |
| null === null        | // true                                     |
| null == null         | // true                                     |
| !null                | // true                                     |
| isNaN(1 + null)      | // false                                    |
| isNaN(1 + undefined) | // true                                     |

> Những giá trị sau đây có boolean là true trong if statement.
{: .q}

---

## Complex data

| Value   | Type   | In if statement |
| :------ | :----- | :-------------- |
| { , , } | Object | truthy          |
| [ , , ] | Array  | truthy          |

---

### Use const or let

There is no preferred one, its based on your choice of usage for that array or object. You have to understand mutation and reassigning clearly.

> Mutation - updates the values present in the memory.
> Reassign - variable points to new memory locations where new values are stored.
{: .q}

`Let` - offers both mutation and reassiging

`Const` - offers mutation but not reassiging

`Both` - doesnot offers redeclaring

> If your usecase only needs mutation, you can go for const.. if you need reassigning then go for let.
{: .q}

---

### Object

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
}
```

> Cách khai báo một object như trên.
> Mọi người sẽ thường khai báo object với `const` thay vì let.
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
console.log(person.firstName)
```

Cách thêm variable cho object.

```js
person.newVar = "something"
//Thay đổi Tên
person.firstName = "Mike"
```

> Nhờ cách này chúng ta có thể tạo ra object rỗng rồi gắn giá trị vào sau, nhưng không khuyến khích làm nếu có thể định nghĩa variables ngay từ ban đầu.
{: .q}

---

<!-- markdownlint-disable MD022-->
