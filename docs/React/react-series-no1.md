---
layout: default
title: React series No.1
nav_order: 3
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

## Hướng dẫn sử dụng React series No.1

Đây là các series code mẫu nhằm mục đích giới thiệu mọi người các chức năng mới của React thông qua ví dụ.

- Phương thức học: deduction.
- Cách áp dụng: tự code lại không nhìn code mẫu là hiểu bài.

## Bài thứ 17

<!-- !Bài tập về... -->
<details markdown="block">
  <summary>
    File so bla bla
  </summary>
```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script
   src="https://unpkg.com/react@17/umd/react.development.js"
   crossorigin
  ></script>
  <script
   src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
   crossorigin
  ></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
 </head>
 <body>
  <div id="root"></div>
  <script type="text/babel">
   //! Cách render nhanh bằng điều kiện

   function App() {
    let IfCome = true;
    // Thử sửa bằng false để thấy kết quả
    return (
     <div id="wrapper">{IfCome && <div>Hello World</div>}</div>
    );
   }
   ReactDOM.render(<App />, document.getElementById("root"));
  </script>
 </body>
</html>
```
</details>

Định dạng để xuất phải là JSX.
Phải có thẻ đóng bên ngoài bao bọc các thành phần bên trong.
Sử dụng <React.Fragment> </React.Fragment> để bao bọc bên ngoài tránh bị thiếu thẻ ôm.

[Xem trên website](https://ftu2-student-association.github.io/official-materials/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}
