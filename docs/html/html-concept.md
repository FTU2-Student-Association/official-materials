---
layout: default
title: HTML Concept
nav_order: 1
# has_children: true
parent: HTML
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

## Normal layout

Website được cấu tạo theo cấu trúc xếp tầng.

Ví dụ:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/html-concept/Fri-17-Dec-2021-19-08-23.png)

//Theo như hình trên, để thêm text từ khối `block màu vàng` ta cần phải tạo các khối phía dưới để tạo layout.

## Thuộc tính của box

$Các thẻ `<div>` sẽ mặc định tạo khối block có các thuộc tính như sau:  

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/html-concept/Fri-17-Dec-2021-19-10-10.png)

Với border là viền, do vậy ta có thể điều chỉnh các từ từ các thuộc tính trên:

- Để nội dung nằm lùi hàng vào trong box, tăng Padding.
- Để các box cách xa nhau, thêm Margin.

>Bằng cách căn chia cho hợp lý thì mình đã có thể layout được mọi trang web theo ý mình muốn. Do vấn đề cũng nằm ở element này nằm đâu, chữ text nằm nằm thế nào.

[CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp){: .btn .btn-blue .mar-auto .fs-5}
