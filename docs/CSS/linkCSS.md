---
layout: default
title: Link CSS to HTML
nav_order: 1
# has_children: true
parent: CSS
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

## Cách 1

Thêm vào phần head đoạn này

```html
<link rel="stylesheet" href="/assets/CSS/style.css">
```

Xài thẻ link, thẻ này là thẻ đóng.

- rel – mặc định stylesheet để chỉ CSS là yếu tố để trang trí cho HTML.
- href – địa chỉ của file CSS

>Lưu ý: file CSS nào được đặt ở phía dưới thì sẽ được ưu tiên hơn vì trình duyệt sẽ đọc file HTML từ trên xuống.
{: .q}

## Cách 2

```html
Viết CSS trong thẻ <style></style>  và đặt thẻ này bên trong <head></head>
```

## Cách 3

```html
<div style="color: black;"></div>
```

Viết như một attribute vào trong node với attribute style.
>Không khuyên dùng cách này do nên để file CSS riêng với HTML và không chỉnh được số lượng lớn elements cùng lúc.
{: .q}
