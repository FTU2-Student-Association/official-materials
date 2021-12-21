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

Đây là các series code mẫu nhằm mục đích giới thiệu mọi người các chức năng mới của React thông qua `ví dụ`.

- Phương thức học: [Inductive learning](https://www.netlanguages.com/blog/index.php/2017/06/28/what-is-inductive-learning/#:~:text=Inductive%20learning%2C%20also%20known%20as,they%20then%20need%20to%20apply.).
- Do mọi người khi coi ví dụ sẽ hiểu syntax hơn và đồng thời hiểu luôn code như vậy để làm gì. Nên với anh lý thuyết quá nhiều sẽ thừa thãi, anh chỉ cung cấp `keyword` và `comment` nhé.
- Cách áp dụng: coi code từ đơn giản tới nâng cao để hiểu quy tắc, tự code lại **không** nhìn code mẫu là hiểu bài.
- Dưới mỗi code mẫu sẽ có một link `Xem trên website`, click chuột giữa hoặc trái để mở ra kết quả của code (nhớ vào `console` để xem thêm) mà không cần tải về và bật live server.

---

## Lesson 1: Hello World

<!-- !Bài tập về cách viết HTML trong React -->
<details markdown="block">
  <summary>
    Bài tập về cách viết HTML trong React
  </summary>
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- Import thư viện React -->
        <script
            src="https://unpkg.com/react@17/umd/react.development.js"
            crossorigin
        ></script>
        <!-- Import thư viện ReactDOM -->
        <script
            src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
            crossorigin
        ></script>
        <!-- Import thư viện ReactBabel -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            // Xem kỹ phần bên dưới, cách viết function sẽ không đổi
            // Nhớ rằng để trả về giá trị, function cần return
            // Xem kỹ xem chúng ta return gì
            // Xem kỹ method ReactDOM.render, những gì thuộc về React đều
            // viết hoa chữ cái đầu ở mỗi từ, không cách
            function App() {
                return <div>Hello World</div>
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[0].html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

## Template

<!-- !Bài tập về -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- Import thư viện React -->
        <script
            src="https://unpkg.com/react@17/umd/react.development.js"
            crossorigin
        ></script>
        <!-- Import thư viện ReactDOM -->
        <script
            src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
            crossorigin
        ></script>
        <!-- Import thư viện ReactBabel -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            // Xem kỹ phần bên dưới, cách viết function sẽ không đổi
            // Nhớ rằng để trả về giá trị, function cần return
            // Xem kỹ xem chúng ta return gì
            // Xem kỹ method ReactDOM.render, những gì thuộc về React đều
            // viết hoa chữ cái đầu ở mỗi từ, không cách
            function App() {
                return <div>Hello World</div>
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}
