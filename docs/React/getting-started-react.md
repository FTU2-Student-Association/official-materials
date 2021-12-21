---
layout: default
title: Getting started
nav_order: 1
# has_children: true
parent: React
# grand_parent:
---

<!-- markdownlint-disable MD025-->
# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
<!-- markdownlint-enable MD025-->

---

## Hướng dẫn chạy dự án bằng React

### Bước 1: Cài đặt NodeJS

NodeJS là một JavaScript runtime environment. Khả năng chạy được JavaScript giống với các trình duyệt là nhờ The V8 JavaScript Engine giống với Chrome đang sử dụng để chạy website.

Chúng ta cài đặt NodeJS để:

- Chạy server ảo trên máy tính mà không cần live server.
- Khi cài NodeJS, một thư viện sẽ được tích hợp tên là `NPM (là một package manager cho Node.js)`. Nhờ cách này chúng ta có thể cài đặt một môi trường để chạy dự án React gần như hoàn chỉnh chỉ với `1 dòng lệnh`.

[Tải NodeJS tại đây](https://nodejs.org/en/download/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

Chọn cấu hình `phù hợp` với máy tính, tải về và cài đặt theo ổ C như mặc định.

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/getting-started-react/Tue-21-Dec-2021-14-23-46.png)

### Bước 2: Cài đặt React folder

>Mặc định máy mọi người đã cài đặt [**Git**](https://git-scm.com/downloads).
{: .q}

Chọn thư mục muốn cài đặt dự án vào bên trong, nhấn chuột phải và chọn Git Bash. Một terminal sẽ hiện lên như sau:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/getting-started-react/Tue-21-Dec-2021-14-47-18.png)



## Các thư viện cần sử dụng

- React
- ReactDOM
- Babel: hỗ trợ việc chuyển đổi từ JSX sang dạng thông tin React lấy được.
