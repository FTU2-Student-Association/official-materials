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
<!-- markdownlint-enable MD022 MD025-->

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
