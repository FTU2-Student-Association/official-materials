---
layout: default
title: Link Javascript
nav_order: 1
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

## External (sử dụng file .js bên ngoài)

```js
<body>
    ...
    <script src="đường_dẫn_tới_file.js"></script>
</body>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>Các content khác ở đây</div>
    <script src="/_test/test.js"></script>
</body>
</html>
```

>Viết dưới cùng của phần `body`
{: .q}

## Internal (sử dụng nội bộ)

```js
<body>
    ...
    <script>
        alert('Xin chào các bạn!')
    </script>
    ...
</body>
```

## Kiểm tra xem đã link thành công hay chưa

Gõ dòng này vào file Javascript:

```js
alert("Đã link thành công")
```

>Sau khi gõ sẽ thấy một dòng thông báo hiện lên từ web.
{: .q}
