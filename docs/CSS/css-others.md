---
layout: default
title: CSS Others
nav_order: 99
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

## Custome variables

```css
/* !Sử dụng để đặt biến tuỳ chọn */
:root {
    --day-la-bien-tuy-chon: brown;
  }

/* !Sử dụng biến tuỳ chọn */
.chung {
    background-color: var(--day-la-bien-tuy-chon);
}
```

>Mục đích: có thể đổi màu hoặc bất kỳ thuộc tính nào của hàng loạt elements bằng các sửa giá trị biến tại root.
{: .q}

## Function

| Relative Lengths            | Function                                                                              | Note             |
| :-------------------------- | :------------------------------------------------------------------------------------ | :--------------- |
| attr()                      | Returns the value of an attribute of the selected element                             |                  |
| calc()                      | Allows you to perform calculations to determine CSS property values                   |                  |
| conic-gradient()            | Creates a conic gradient                                                              |                  |
| counter()                   | Returns the current value of the named counter                                        |                  |
| cubic-bezier()              | Defines a Cubic Bezier curve                                                          |                  |
| hsl()                       | Defines colors using the Hue-Saturation-Lightness model (HSL)                         |                  |
| hsla()                      | Defines colors using the Hue-Saturation-Lightness-Alpha model (HSLA)                  |                  |
| linear-gradient()           | Creates a linear gradient                                                             |                  |
| max()                       | Uses the largest value, from a comma-separated list of values, as the property value  |                  |
| min()                       | Uses the smallest value, from a comma-separated list of values, as the property value |                  |
| radial-gradient()           | Creates a radial gradient                                                             |                  |
| repeating-conic-gradient()  | Repeats a conic gradient                                                              |                  |
| repeating-linear-gradient() | Repeats a linear gradient                                                             |                  |
| repeating-radial-gradient() | Repeats a radial gradient                                                             |                  |
| rgb()                       | Defines colors using the Red-Green-Blue model (RGB) (Nhớ xài mã 3 số)                 | Use it           |
| rgba()                      | Defines colors using the Red-Green-Blue-Alpha model (RGBA)                            | Use it (opacity) |
| var()                       | Inserts the value of a custom property                                                |                  |

## Pseudo-classes

Syntax

```css
.class-name:pseudo-class {
    color: rebeccapurple;
}
```

`pseudo-class` can be:

- link (chưa bấm vào hiển thị thế nào)
- visited (bấm vào rồi hiển thị thế nào)
- hover (giữ chuột thì thế nào)
- active (???)
- 4 trạng thái của thẻ `<a>`
pseudo-class can be:
- first-child
- last-child
- Dùng để chọn child đầu tiên hoặc cuối cùng
- nth-child(n): Dùng để chọn thẻ con thứ n

>Quan trọng
{: .q}

| A              | B               | C                                                                  |
| :------------- | :-------------- | :----------------------------------------------------------------- |
| ::after        | p::after        | Insert content after every `<p>` element                             |
| ::before       | p::before       | Insert content before every `<p>` element                            |
| ::first-letter | p::first-letter | Selects the first letter of every `<p>` element (In đậm chữ cái đầu) |
| ::first-line   | p::first-line   | Selects the first line of every `<p>` element                        |
| ::selection    | p::selection    | Selects the portion of an element that is selected by a user       |

[Pseudo classes](https://www.w3schools.com/css/css_pseudo_classes.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}
