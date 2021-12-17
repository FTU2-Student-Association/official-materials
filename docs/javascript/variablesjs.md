---
layout: default
title: Javascript variables
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