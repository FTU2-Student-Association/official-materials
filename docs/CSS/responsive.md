---
layout: default
title: Responsive
nav_order: 5
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

## Overview

```css
* {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
}
/* (Phone) */
/* #region */

/* (Tablet) */
/* #region */
@media (min-width: 740px) {
}
/* #endregion */

/* (PC low resolution) */
/* #region */
@media (min-width: 1024px) {
}
/* #endregion */
/* )End */
```

>Nhanh gọn lẹ: nếu muốn thay đổi cấu trúc trên laptop hoặc ipad thì nhập thêm tuỳ chỉnh vào bên trong @media, không có gì phức tạp.
{: .q}

* Viết phần này vào trong một file CSS riêng, đặt tên grid
