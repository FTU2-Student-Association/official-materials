---
layout: default
title: Variables & data type
nav_order: 2
# has_children: true
parent: Javascript
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

### Boolen

```js
let a = true
let b = false
if (a>b) {something}
```

>Nhớ kỹ các phép so sánh == và ===
{: .q}

<!-- markdownlint-disable MD022-->
### Falsy for Boolen
{: .no_toc}

<!-- markdownlint-enable MD022-->

| Value        | Description                                                                                                                                          |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| FALSE        | The keyword false.                                                                                                                                   |
| 0            | The Number zero (so, also 0.0, etc., and 0x0).                                                                                                       |
| 0            | The Number negative zero (so, also -0.0, etc., and -0x0).                                                                                            |
| 0n           | The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.                                              |
| "", '', ``   | Empty string value.                                                                                                                                  |
| null         | null — the absence of any value.                                                                                                                     |
| undefined    | undefined — the primitive value.                                                                                                                     |
| NaN          | NaN — not a number.                                                                                                                                  |
| document.all | Objects are falsy if and only if they have the `[[IsHTMLDDA]]` internal slot.That slot only exists in document.all and cannot be set using JavaScript. |

>Các giá trị sau đây cũng tính là false và có thể sử dụng trong if else như bình thường

Ví dụng

```js
if(!(null)) {
    console.log('Hello me')
//In ra Hello me vì điều kiện sai 2 lần
}
```
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
