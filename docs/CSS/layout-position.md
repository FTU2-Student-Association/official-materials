---
layout: default
title: Layout and Position
nav_order: 4
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
<!-- markdownlint-enable MD025-->

## Node Position

Mặc định vị trí các tag trong CSS đều là position: static;

- húng sẽ hành xử chồng lớp theo kiểu mặc định
Để di chuyển relative so với vị trí mặc định, sử dụng position: relative;
Thêm các attribute như:
- left: ;
- right: ;
- top: ;
- bottom: ;

-
Để thay đổi vị trí

- Không nên xài để canh chữ.
- Nên xài để canh thẻ div so với vị trí mặc định của nó.

Để sắp xếp ảnh tương ứng vào vị trí một `<div>` có position: relative; , sử dụng position: absolute; để làm điều này. Lưu ý thẻ absolute phải nằm bên trong thẻ có thuộc tính relative.

- Sau đó canh chỉnh nhờ vào left, right như trên, nhưng sẽ hoạt động khác mọi người nên try.
- Dùng để sắp xếp div con ra khỏi vị trí của div cha.

-
Để fixed vào màn hình, không rung lắc được (kéo màn hình xuống vẫn nằm chỗ cũ)

```css
div.fixed {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    border: 3px solid #73AD21;
}
```

Sử dụng position: sticky; để tạo hiệu ứng bong bóng (sẽ bị kéo xuống theo khi sắp ra khỏi màn hình)
.Link.

[Node position](https://www.w3schools.com/css/css_positioning.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

---

## Layout

Kết hợp 2 thứ này với nhau: <https://css-tricks.com/css-grid-replace-flexbox/>

- Học về flex-box: <https://codepen.io/enxaneta/full/adLPwv>
- Học về CSS-grid: <https://css-tricks.com/snippets/css/complete-guide-grid/>

[Wes Bos](https://www.youtube.com/watch?v=T-slCsOrLcc&list=PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG){: .btn .btn-blue .mb-1 .mt-2 .fs-6}
[Auto-placement](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout){: .btn .btn-blue .mb-1 .mt-2 .fs-6}
