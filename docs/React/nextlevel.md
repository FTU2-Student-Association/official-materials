---
layout: default
title: Next Level
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

## Bài thứ 17

<!-- !Bài tập về... -->
<details open markdown="block">
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
