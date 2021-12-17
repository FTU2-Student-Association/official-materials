---
layout: default
title: Node decoration
nav_order: 3
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

## Background image

Dùng khi muốn set ảnh thành nền của một thẻ `<div>`

Syntax:

```css
.class-name {
    background-image: url(“”);
    /* 100% là cho chiều ngang, auto là cho chiều dọc */
    background-size: 100% auto; 
    //Thêm 2 tuỳ chọn là cover chiếm full chiều ngang
    //Và contain để ảnh nằm đúng kích thước trong web
    /* Tìm hiểu background-repeat để làm nền có pattern */
    background-repeat: no;
    /* Tìm hiểu linear-gradient để làm nền gradient phủ lên hình ảnh*/
    background-postion: ???;
    // Đã là background thì ít khi cần chỉnh vị trí, khi 
    //nào xài thì search nhé
    // Tìm hiểu về background shorthand để code nhanh hơn nhưng anh
    // không khuyến khích xài vì làm người khác khó hiểu
    padding-top: 100%; => 100% của chiều dài nhưng sẽ đẩy element xuống
    phía dưới
}
```

## Units

| A                | B                                                                                         | C        |
| :--------------- | :---------------------------------------------------------------------------------------- | :------- |
| cm               | centimeters                                                                               |          |
| mm               | millimeters                                                                               |          |
| in               | inches (1in = 96px = 2.54cm)                                                              |          |
| px *             | pixels (1px = 1/96th of 1in)                                                              | Use it   |
| pt               | points (1pt = 1/72 of 1in)                                                                |          |
| pc               | picas (1pc = 12 pt)                                                                       |          |
| RELATIVE LENGTHS |                                                                                           |          |
| em               | Relative to the font-size of the element (2em means 2 times the size of the current font) |          |
| ex               | Relative to the x-height of the current font (rarely used)                                |          |
| ch               | Relative to the width of the "0" (zero)                                                   |          |
| rem              | Relative to font-size of the root element                                                 | * Use it |
| vw               | Relative to 1% of the width of the viewport*                                              |          |
| vh               | Relative to 1% of the height of the viewport*                                             |          |
| vmin             | Relative to 1% of viewport's* smaller dimension                                           |          |
| vmax             | Relative to 1% of viewport's* larger dimension                                            |          |
| %                | Relative to the parent element                                                            | Use it   |
