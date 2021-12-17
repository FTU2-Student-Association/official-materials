---
layout: default
title: Git and Github
nav_order: 3
# has_children: true
parent: Getting started
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

## Installation

### Git

[Git Download](https://git-scm.com/downloads){: .btn .btn-blue .mb-1 .mt-2 .fs-5 }

>Cài đặt theo mặc định vào `ổ C`.

### Github

Internet hosting for software development and version control using Git.

[Join Github](https://github.com/){: .btn .btn-blue .mb-1 .mt-2 .fs-5 }

## Concept of Git

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-33-39.png)

The basic Git workflow goes something like this:  

1. You modify files in your working tree.
2. You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.
3. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory
modified -> staged -> commited

## How to use Git

### Add extension

- Gitlens.
- Git history.
- Git Graph.

### Set up Git

- Bấm Ctrl + Shift + ` (dấu dưới nút ESC) để mở terminal trong VS Code.
- Nhập vào lệnh này rồi enter, thay bằng email xài cho Github.

```shell
git config --global user.email example@email.com
```

Thay bằng user xài cho Github.

```shell
git config --global user.name `example`
```

>`Lưu ý`: tên và email phải giống với tên tài khoản và email đăng ký Github.

### Chọn thư mục để lưu trữ

Nhằm mục đích để clone các repository về tiện lợi, mọi người nên chọn 1 thư mục cố định trong máy chỉ để clone.  
Thư mục này có thể nằm bất cứ đâu trừ `ổ C`.  
>Nhớ tên thư mục cho các bước tiếp theo.

---

### Hướng dẫn clone repository

>Đây là các bước để đem tài nguyên xuống máy sử dụng, tải trực tiếp từ Github sẽ mất tác dụng của Git.

Làm các bước như hình:

Bước 1:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-47-19.png)

Bước 2:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-47-43.png)

Bước 3:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-48-06.png)

Bước 4:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-48-26.png)

Bước 5:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-48-40.png)

Bước 6:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-48-58.png)

Bước 7:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-49-13.png)

Bước 8:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-50-02.png)

Bước 9:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-50-43.png)

Bước 10:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-50-55.png)

Bước 11:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-51-08.png)

Bước 12:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-51-31.png)

Bước 13:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-51-45.png)

Bước 14:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-51-59.png)

Bước 15:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-52-13.png)

Bước 16:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-52-25.png)

Bước 17:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-52-40.png)

Bước 18:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-52-54.png)

Bước 19:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-53-07.png)

Bước 20:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-53-26.png)

Bước 21:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-53-39.png)

Bước 22:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-53-53.png)

Bước 23:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-54-05.png)

Bước 24:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-54-16.png)

Bước 25:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-54-30.png)

Bước 26:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-54-42.png)

Bước 27:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-54-57.png)

Bước 28:

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/git/Fri-17-Dec-2021-17-55-09.png)

Bước 29:
