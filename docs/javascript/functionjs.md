---
layout: default
title: Javascript functions
nav_order: 4
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
## Quy tắc xài function chung

1. Nếu có thể, `luôn luôn` đặt tên cho function hoặc một hành động cụ thể nhằm cho việc gọi lại function đó là khiến code dễ đọc hơn. Tránh viết quá nhiều function lồng vào anh (như anh :/)

---

## Built-in function (Hàm có sẵn)

### Alert

`Hiệu ứng` Dùng để in alert ra màn hình

`Mục đích`

- Dùng để kiểm tra xem một function nào của Javascript đã chạy hay chưa.

`Cú pháp`

```js
alert(thu-can-in-ra)
```

Ví dụ

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/function/Fri-17-Dec-2021-22-38-25.png)

Kết quả

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/function/Fri-17-Dec-2021-22-37-27.png)

---

### Console

`Hiệu ứng` Dùng để in thông tin, kết quả ra console

`Mục đích`

- Dùng để kiểm tra xem một function nào của Javascript đã chạy hay chưa. (tương tự alear, nhưng được sử dụng nhiều hơn vì kết quả khi chạy ra sẽ được lưu lại dưới dạng lịch sử)
- Những gì hiện ra ở console.log() đều là những thứ các hàm khác nhận được.

`Cú pháp`

```js
console.log('Hello World')
```

Kết quả

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/function/Fri-17-Dec-2021-22-42-10.png)

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/function/Fri-17-Dec-2021-22-42-50.png)

Các method khác của console:

```js
log()
error()
warn()
clear()
time() and timeEnd()
table()
count()
group() and groupEnd()
custom console logs
```

[Methods of console](https://www.geeksforgeeks.org/console-in-javascript/){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

>Do chưa cần xài nên anh sẽ không nói qua, ai muốn tìm hiểu có thể xem ở link trên nhé.
{: .q}

---

### Confirm

`Không quan trọng`
Giống alert nhưng để confirm tuổi

---

### Prompt

`Không quan trọng`
Giống alert nhưng để confirm tuổi

---

### Set timeout

`Hiệu ứng` Delay thời gian chạy của một chương trình

`Mục đích`

- Khiến chương trình chạy theo ý mình.

`Cú pháp`

```js
setTimeout(function, 3000);
function: function tuỳ chọn
3000: thời gian tuỳ chọn, tính theo milliseconds
```

---

### Set interval

`Hiệu ứng` Lập đi lập lại một function cụ thể theo thời gian

`Cú pháp`

```js
setInterval(function, 3000);
function: function tuỳ chọn
3000: thời gian tuỳ chọn, tính theo milliseconds
```

## Custom function

### Cách để tạo custom function

### Declaration function

{: .fs-5}

```js
let newFunction = function (params) {
    
}
```

Cách 2:

```js
function name(params) {
    
}
```

---

### Scope of function (Quan trọng)

Các hàm hay function được định nghĩa trong nội bộ function sẽ không được sử dụng bên ngoài phạm vi function đó.

---

### Return

Tóm tắt: trả về một giá trị sau chữ return tại vị trí hàm được gọi (có thể song song với việc thực hiện function khác trong hàm)

### Argument

Nếu paste một đối số vào một function không có đối số từ đầu hàm sẽ nhận đối số đó là `arguments`

---

## Các loại định nghĩa function

### Expression function

### Arrow function
