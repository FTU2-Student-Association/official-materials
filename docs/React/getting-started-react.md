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

## Hướng dẫn cài đặt dự án React

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

Chọn thư mục muốn cài đặt dự án vào bên trong, nhấn chuột phải và chọn Git Bash here. Một terminal sẽ hiện lên như sau:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/getting-started-react/Tue-21-Dec-2021-14-47-18.png)

Copy dòng lệnh này vào (chuột phải để chọn option copy) với `yourapp` là tên dự án đang muốn tạo.

```bash
npx create-react-app yourapp
```

Nếu gặp lỗi [you are running create-react-app 4.0.3 which is behind the latest release (5.0.0)](https://stackoverflow.com/questions/70358643/you-are-running-create-react-app-4-0-3-which-is-behind-the-latest-release-5-0-0), nhập dòng lệnh dưới vào
{: .q}  

```bash
npx clear-npx-cache
```

Sau đó nhập lại lệnh create-react-app như phía trên.

Sau khi tạo xong sẽ thấy các thư mục trong file vừa tạo như dưới đây thì đã cài đặt hoàn tất.

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/getting-started-react/Tue-21-Dec-2021-15-03-43.png)

---
## Hướng dẫn chạy live sever bằng NodeJS

### Điều hướng terminal đúng vị trí

Đầu tiên, phải đảm bảo terminal đang hướng đến thư mục `yourapp` mà chúng ta đã tạo. Để chuyển vị trí terminal ta làm như sau.

Cách 1: Từ terminal vừa cài đặt xong từ bước 1, nhập lệnh sau với `yourapp` là tên dự án vừa tạo thành công.

```bash
cd yourapp
```

Cách 2: Tìm đến thư mục `yourapp`, click chuột phải và chọn `Copy as path`

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/getting-started-react/Tue-21-Dec-2021-15-12-46.png)

Tuỳ vào máy tính mà sẽ giống hình trên hoặc dưới
{: .q}

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/getting-started-react/Tue-21-Dec-2021-15-13-19.png)

Sau đó copy vào terminal với cú pháp như Sau

```bash
cd "path"
```

Ví dụ:

```bash
cd "E:\Study\Code\Career Fair 2022\official-materials\materials\React"
```

Kiểm tra lại xem terminal đang ở đúng thư mục chưa

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/getting-started-react/Tue-21-Dec-2021-15-16-25.png)

### Chạy live sever

Nhập lệnh sau vào terminal

```bash
npm start
```

Bật trình duyệt và thưởng thức

---

## Các thư viện cần sử dụng

- React
- ReactDOM
- Babel: hỗ trợ việc chuyển đổi từ JSX sang dạng thông tin React lấy được.
