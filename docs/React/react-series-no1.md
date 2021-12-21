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
- Để xem source của `Xem trên web`, chuột phải vào trang web và chọn `View page source`.

Cách bài lesson sẽ không đánh số theo thứ tự nên mọi người đừng hoang mang.
{: .q}

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

---

## Lesson 10: Tạo một function component

<!-- !Bài tập về function component -->
<details markdown="block">
  <summary>
    Bài tập về function component
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
            function ReuseMe() {
                return (
                    //Thử bỏ tag React.Fragment xem chuyện gì sẽ xảy ra
                    <React.Fragment>
                        <div>Hello World</div>
                        <p>Hello World again</p>
                        <img
                            src="https://i.pinimg.com/originals/89/80/72/898072bc408d7f5ce7d815fcebf90e0c.jpg"
                            alt="Nope"
                        />
                    </React.Fragment>
                )
            }
            function App() {
                // Cách thêm DOM element vào website và chèn vào
                // function khác như dưới đây bằng cách sử dụng function
                // gọi là Function component
                // Nếu không có gì đặc biệt mọi người nên sử dụng cách này
                // thay cho Class component (google please)
                return (
                    <div>
                        <ReuseMe />
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[10]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---
## Lesson 10.1: Reuse function component

<!-- !Bài tập về function component -->
<details markdown="block">
  <summary>
    Welcome to trouble. And make it double.
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
            function ReuseMe() {
                return (
                    //Thử bỏ tag React.Fragment xem chuyện gì sẽ xảy ra
                    <React.Fragment>
                        <div>Hello World</div>
                        <p>Hello World again</p>
                        <img
                            src="https://i.pinimg.com/originals/89/80/72/898072bc408d7f5ce7d815fcebf90e0c.jpg"
                            alt="Nope"
                        />
                    </React.Fragment>
                )
            }
            function App() {
                // Cách thêm DOM element vào website và chèn vào
                // function khác như dưới đây bằng cách sử dụng function
                // gọi là Function component
                // Nếu không có gì đặc biệt mọi người nên sử dụng cách này
                // thay cho Class component (google please)
                return (
                    <div>
                        <ReuseMe />
                        <ReuseMe />
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[10]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 11: Sử dụng props (Pro 1)

### Khái niệm props

<!-- ! -->
<details markdown="block">
  <summary>
    Sử dụng props
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
            // props ở đây chỉ chung tất cả những thứ được truyền vào, nên props
            // hiện tại đang là object. Để lấy propety từ object ta xài .
            function ConsoleLogMyName(props) {
                return <div>{props.nameTo}</div>
            }
            // Nếu không là function component, tạo biến với tên định dạng JavaScript
            let myName = "Earth-606"
            // Để ý dấu ngoặc nhọn {}, dấu này sẽ được sử dụng khi muốn truyền một giá
            // trị JavaScript vào ReactDOM (khi truyền vào HTML element ta luôn xài {})
            function App() {
                return (
                    <div id="wrapper">
                        <ConsoleLogMyName nameTo={myName} />
                    </div>
                )
            }
            // Biến nameTo sẽ truyền lên thế chỗ props ở trên
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[11]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Sử dụng props truyền vào nhiều biến

<!-- ! -->
<details markdown="block">
  <summary>
    Sử dụng props truyền vào nhiều biến
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
            // Nhớ sử dụng React.Fragment hoặc div để bao bên ngoài return
            // Nhìn vào phép trừ được sử dụng như thế nào
            // Nhìn vào để thấy tại sao props lại cần thiết
            function ConsoleLogMyName(props) {
                return (
                    <React.Fragment>
                        <div>{props.nameTo}</div>
                        <div>{props.age}</div>
                        <div>{props.price - 9}</div>
                    </React.Fragment>
                )
            }
            // Quy tắc thêm dấu {} - Truyền giá trị là biến hoặc số vào ReactDOM
            // Các biến được nhận + mới tạo như nameTo vẫn đặt tên giống JS,
            // không hoa chữ cái đầu
            // Tóm tắt: in hoa chữ đầu khi là ReactComponent như App()
            let myName = "Earth-606"
            function App() {
                return (
                    <div id="wrapper">
                        <ConsoleLogMyName
                            nameTo={myName}
                            age="Em chưa 19"
                            price={10}
                        />
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```

</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[11]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Cách sử dụng destructuring để truyền value vào ReactDOM (Pro 2)

Có thể áp dụng để truyền default value cho function

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
a
```

</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Cách truyền object value vào ReactComponent

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
a
```

</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Cách truyền object trong array vào ReactComponent

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
a
```

</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Cách truyền object trong array vào ReactComponent gọn nhẹ (Pro 3)

Sử dụng cách cục súc

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
a
```

</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Template

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
a
```

</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

### 1

```markdown
class = > className
for => htmlFor
```
