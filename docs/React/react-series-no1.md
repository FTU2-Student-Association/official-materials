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

### Sử dụng props truyền vào nhiều biến (Ví dụ thêm)

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
            function ConsoleLogMyName(props) {
                return (
                    <React.Fragment>
                        <div>{props.nameTo}</div>
                        <div>{props.age}</div>
                        <div>{props.price - 9}</div>
                        <div>{props.myObject.joke}</div>
                        <div>{props.myObject.monet}</div>
                        <div>{props.myArray2[2]}</div>
                        <div>{props.myArray2[4]}</div>
                    </React.Fragment>
                )
            }
            let myName = "Earth-606"
            let myAge = {
                joke: "none",
                monet: "not yet",
            }
            let myPrice = 10
            let myArrray = [4, 5, 8]
            function App() {
                return (
                    <div id="wrapper">
                        <ConsoleLogMyName
                            nameTo={myName}
                            age="Em chưa 19"
                            price={myPrice}
                            myObject={myAge}
                            myArray2={myArrray}
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

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[11]-2.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 12: Cách sử dụng destructuring để truyền value vào ReactDOM (Pro 2)

Có thể áp dụng để truyền default value cho function

<!-- ! -->
<details markdown="block">
  <summary>
    Một cách màu mè hơn Pro 1
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
            // Chúng ta sử dụng dấu ngoặc {} để truy cập thẳng vào object props
            // và gọi cách property của props bằng tên thật
            function ConsoleLogMyName({
                nameTo,
                age = "đây là giá trị mặc định",
                price,
                myObject,
                myArray2,
                function1 = () => console.log("Function chưa được truyền"),
            }) {
                // Bật console lên để xem function được truyền thế nào
                // *Xoá thử function được truyền phía bên dưới (Hello World)
                // để xem kết quả và suy ra công dụng của phần đặt function
                // như trên. Xoá tương tự với biến price
                function1()
                return (
                    <React.Fragment>
                        <div>{nameTo}</div>
                        <div>{age}</div>
                        <div>{price - 9}</div>
                        <div>{myObject.joke}</div>
                        <div>{myObject.monet}</div>
                        <div>{myArray2[2]}</div>
                        <div>{myArray2[4]}</div>
                    </React.Fragment>
                )
            }
            let myName = "Earth-606"
            let myAge = {
                joke: "none",
                monet: "not yet",
            }
            let myPrice = 10
            let myArrray = [4, 5, 8]
            function App() {
                return (
                    <div id="wrapper">
                        <ConsoleLogMyName
                            nameTo={myName}
                            age="Em chưa 19"
                            price={myPrice}
                            myObject={myAge}
                            myArray2={myArrray}
                            function1={() => console.log("Hello World")}
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

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[12]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 13: Cách truyền object value vào ReactComponent

### Cách bình thường (xem thêm cách dưới)

<!-- ! -->
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
            const course = {
                name: "html",
                price: 2,
                logMe: () => console.log("Hello object"),
            }
            function PrintMe(props) {
                props.justLogMe()
                return (
                    <React.Fragment>
                        <li>{props.nameIn}</li>
                        <li>{props.priceIn}</li>
                    </React.Fragment>
                )
            }
            // Chúng ta vẫn làm bình thường trừ việc phải lấy từng
            // property của object truyền vào Component function
            // (sử dụng dấu chấm . để lấy giá trị con từ course)
            function App() {
                return (
                    <ul>
                        <PrintMe
                            nameIn={course.name}
                            priceIn={course.price}
                            justLogMe={course.logMe}
                        />
                    </ul>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[13]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Sử dụng destructuring để gọn nhẹ hơn (nên học)

<!-- ! -->
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
            const course = {
                name: "html",
                price: 2,
                logMe: () => console.log("Hello object"),
            }
            // Xem kỹ name và price trong function, chúng có giống ví dụ
            // trên hay không?
            function PrintMe({ newObject }) {
                newObject.logMe()
                return (
                    <React.Fragment>
                        <li>{newObject.name}</li>
                        <li>{newObject.price}</li>
                    </React.Fragment>
                )
            }
            // So sánh kỹ với ví dụ bên trên để thấy lợi ích
            function App() {
                return (
                    <ul>
                        <PrintMe newObject={course} />
                    </ul>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[13]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 14: Cách truyền object trong array vào ReactComponent (Pro 3)

### Cách lòng vòng, xem để hiểu hơn về map

<!-- ! -->
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
            const courses = [
                {
                    name: "html",
                    price: 2,
                },
                {
                    name: "css",
                    price: 65,
                },
                {
                    name: "hell",
                    price: 99,
                },
            ]
            // Cách classic, xem để hiểu cách map hoạt động (giống như lặp lại)
            function PrintMe(props) {
                return (
                    <React.Fragment>
                        <div>{props.nameTo}</div>
                        <div>{props.priceTo}</div>
                    </React.Fragment>
                )
            }
            // Lên mạng xem thêm ví dụ về cách xài map
            function App() {
                return (
                    <ul>
                        {courses.map((course, index) => {
                            return (
                                <PrintMe
                                    nameTo={course.name}
                                    priceTo={course.price}
                                />
                            )
                        })}
                    </ul>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[14]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Cách truyền nhanh hơn bằng cách bỏ thẳng object vào

<!-- ! -->
<details markdown="block">
  <summary>
    Cách đỡ lòng vòng hơn
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
            const courses = [
                {
                    name: "html",
                    price: 2,
                },
                {
                    name: "css",
                    price: 65,
                },
                {
                    name: "hell",
                    price: 99,
                },
            ]
            // Do không sử dụng destructuring nên mới dẫn đến trường hợp object lồng
            // object thế này, nhìn xấu
            function PrintMe(props) {
                return (
                    <React.Fragment>
                        <div>{props.course1.name}</div>
                        <div>{props.course1.price}</div>
                    </React.Fragment>
                )
            }
            // Lên mạng xem thêm ví dụ về cách xài map
            function App() {
                return (
                    <ul>
                        {courses.map((course, index) => {
                            return <PrintMe course1={course} />
                        })}
                    </ul>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[14]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Bỏ thẳng object + destructuring (Cách tốt nhất)

<!-- ! -->
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
            const courses = [
                {
                    name: "html",
                    price: 2,
                },
                {
                    name: "css",
                    price: 65,
                },
                {
                    name: "hell",
                    price: 99,
                },
            ]
            // Không thể gọn hơn
            function PrintMe({ course1 }) {
                return (
                    <React.Fragment>
                        <div>{course1.name}</div>
                        <div>{course1.price}</div>
                    </React.Fragment>
                )
            }
            function App() {
                return (
                    <ul>
                        {courses.map((course, index) => {
                            return <PrintMe course1={course} />
                        })}
                    </ul>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[14]-2.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 15: Truyền object vào ReactDOM bằng destructuring và map - ví dụ thực tế (Pro 3)

### Cách gà

<!-- ! -->
<details markdown="block">
  <summary>
    Cách không nên xài (nhưng xem qua để hiểu)
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
            // Cách lấy dữ liệu từ API cơ bản
            const courses = [
                {
                    id: 2,
                    title: "HTML, CSS từ Zero đến Hero",
                    slug: "html-css",
                    description:
                        "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
                    thumbnail: "courses/2.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "R6plN3FvzFY",
                    preview_path: null,
                    language: "html",
                    syntax_highligh: "language-html",
                    level: "Trình độ cơ bản",
                    priority: 10,
                    students_count: 95693,
                    deleted_at: null,
                    created_at: "2020-04-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:38:31.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/2.png",
                },
                {
                    id: 1,
                    title: "JavaScript Cơ Bản",
                    slug: "javascript-co-ban",
                    description:
                        "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
                    thumbnail: "courses/1.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "0SJE9dYdpps",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ cơ bản",
                    priority: 30,
                    students_count: 58547,
                    deleted_at: null,
                    created_at: "2020-06-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:34:20.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png",
                },
                {
                    id: 7,
                    title: "Kiến Thức Nhập Môn",
                    slug: "lessons-for-newbie",
                    description:
                        "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
                    thumbnail: "courses/7.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "M62l1xA5Eu8",
                    preview_path: null,
                    language: null,
                    syntax_highligh: null,
                    level: "Trình độ cơ bản",
                    priority: 0,
                    students_count: 44554,
                    deleted_at: null,
                    created_at: "2020-02-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:35:38.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png",
                },
                {
                    id: 3,
                    title: "Responsive Với Grid System",
                    slug: "responsive-web-design",
                    description:
                        "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
                    thumbnail: "courses/3.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "uz5LIP85J5Y",
                    preview_path: null,
                    language: "html",
                    syntax_highligh: "language-html",
                    level: "Trình độ cơ bản",
                    priority: 20,
                    students_count: 16759,
                    deleted_at: null,
                    created_at: "2020-05-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T05:56:52.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png",
                },
                {
                    id: 6,
                    title: "Node & ExpressJS",
                    slug: "nodejs",
                    description:
                        "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
                    thumbnail: "courses/6.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "z2f7RHgvddc",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ cơ bản",
                    priority: 32,
                    students_count: 14606,
                    deleted_at: null,
                    created_at: "2020-08-01T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:38:53.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/6.png",
                },
                {
                    id: 13,
                    title: "Xây Dựng Website với ReactJS",
                    slug: "reactjs",
                    description:
                        "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
                    thumbnail: "courses/13/13.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "x0fSBAgBrOQ",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-jsx",
                    level: "Trình độ trung bình",
                    priority: 0,
                    students_count: 11301,
                    deleted_at: null,
                    created_at: null,
                    updated_at: "2021-12-20T06:35:41.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png",
                },
                {
                    id: 5,
                    title: "HTML, CSS Tips & Tricks",
                    slug: "html-css-tutorials",
                    description:
                        "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
                    thumbnail: "courses/5.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "nB6cJh_bb1U",
                    preview_path: null,
                    language: "html",
                    syntax_highligh: "language-html",
                    level: "Trình độ cơ bản",
                    priority: 40,
                    students_count: 11062,
                    deleted_at: null,
                    created_at: "2020-03-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T05:57:27.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/5.png",
                },
                {
                    id: 12,
                    title: "JavaScript Nâng Cao",
                    slug: "javascript-nang-cao",
                    description:
                        "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
                    thumbnail: "courses/12.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "MGhw6XliFgo",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ nâng cao",
                    priority: 31,
                    students_count: 9455,
                    deleted_at: null,
                    created_at: "2021-04-03T14:23:13.000000Z",
                    updated_at: "2021-12-20T04:10:59.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/12.png",
                },
                {
                    id: 4,
                    title: 'App "Đừng Chạm Tay Lên Mặt"',
                    slug: "tool-canh-bao-so-len-mat",
                    description:
                        "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
                    thumbnail: "courses/4/61a9e9e701506.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "r6GWbQL-qwA",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ cơ bản",
                    priority: 50,
                    students_count: 3962,
                    deleted_at: null,
                    created_at: "2020-01-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:01:05.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/4/61a9e9e701506.png",
                },
                {
                    id: 14,
                    title: "Làm việc với Terminal & Ubuntu",
                    slug: "windows-terminal-wsl",
                    description:
                        "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
                    thumbnail: "courses/14/61a89fb15f2fb.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "7ppRSaGT1uw",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-shell",
                    level: "Trình độ trung bình",
                    priority: 51,
                    students_count: 621,
                    deleted_at: null,
                    created_at: "2021-12-01T12:08:12.000000Z",
                    updated_at: "2021-12-20T06:06:49.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/14/61a89fb15f2fb.png",
                },
            ]
            function GetCourse(props) {
                return (
                    <div>
                        <div>{props.title}</div>
                        <img src={props.image} />
                        <p>{props.description}</p>
                        <p>{props.students_count}</p>
                    </div>
                )
            }
            // Nó chỉ giống ví dụ trên nhưng dài hơn
            // Ta thấy truyền props vào ReactComponent
            // Như vậy sẽ làm list bên dưới ngày càng dài (nên tránh)
            function App() {
                return (
                    <div id="wrapper">
                        {courses.map((course) => (
                            <GetCourse
                                key={course.id}
                                title={course.title}
                                image={course.thumbnail_cdn}
                                description={course.description}
                                students_count={course.students_count}
                            />
                        ))}
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[15]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Cách thực tế hơn

<!-- ! -->
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
            // Cách lấy dữ liệu từ API cơ bản
            const courses = [
                {
                    id: 2,
                    title: "HTML, CSS từ Zero đến Hero",
                    slug: "html-css",
                    description:
                        "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
                    thumbnail: "courses/2.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "R6plN3FvzFY",
                    preview_path: null,
                    language: "html",
                    syntax_highligh: "language-html",
                    level: "Trình độ cơ bản",
                    priority: 10,
                    students_count: 95693,
                    deleted_at: null,
                    created_at: "2020-04-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:38:31.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/2.png",
                },
                {
                    id: 1,
                    title: "JavaScript Cơ Bản",
                    slug: "javascript-co-ban",
                    description:
                        "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
                    thumbnail: "courses/1.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "0SJE9dYdpps",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ cơ bản",
                    priority: 30,
                    students_count: 58547,
                    deleted_at: null,
                    created_at: "2020-06-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:34:20.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png",
                },
                {
                    id: 7,
                    title: "Kiến Thức Nhập Môn",
                    slug: "lessons-for-newbie",
                    description:
                        "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
                    thumbnail: "courses/7.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "M62l1xA5Eu8",
                    preview_path: null,
                    language: null,
                    syntax_highligh: null,
                    level: "Trình độ cơ bản",
                    priority: 0,
                    students_count: 44554,
                    deleted_at: null,
                    created_at: "2020-02-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:35:38.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png",
                },
                {
                    id: 3,
                    title: "Responsive Với Grid System",
                    slug: "responsive-web-design",
                    description:
                        "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
                    thumbnail: "courses/3.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "uz5LIP85J5Y",
                    preview_path: null,
                    language: "html",
                    syntax_highligh: "language-html",
                    level: "Trình độ cơ bản",
                    priority: 20,
                    students_count: 16759,
                    deleted_at: null,
                    created_at: "2020-05-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T05:56:52.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png",
                },
                {
                    id: 6,
                    title: "Node & ExpressJS",
                    slug: "nodejs",
                    description:
                        "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
                    thumbnail: "courses/6.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "z2f7RHgvddc",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ cơ bản",
                    priority: 32,
                    students_count: 14606,
                    deleted_at: null,
                    created_at: "2020-08-01T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:38:53.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/6.png",
                },
                {
                    id: 13,
                    title: "Xây Dựng Website với ReactJS",
                    slug: "reactjs",
                    description:
                        "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
                    thumbnail: "courses/13/13.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "x0fSBAgBrOQ",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-jsx",
                    level: "Trình độ trung bình",
                    priority: 0,
                    students_count: 11301,
                    deleted_at: null,
                    created_at: null,
                    updated_at: "2021-12-20T06:35:41.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png",
                },
                {
                    id: 5,
                    title: "HTML, CSS Tips & Tricks",
                    slug: "html-css-tutorials",
                    description:
                        "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
                    thumbnail: "courses/5.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "nB6cJh_bb1U",
                    preview_path: null,
                    language: "html",
                    syntax_highligh: "language-html",
                    level: "Trình độ cơ bản",
                    priority: 40,
                    students_count: 11062,
                    deleted_at: null,
                    created_at: "2020-03-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T05:57:27.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/5.png",
                },
                {
                    id: 12,
                    title: "JavaScript Nâng Cao",
                    slug: "javascript-nang-cao",
                    description:
                        "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
                    thumbnail: "courses/12.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "MGhw6XliFgo",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ nâng cao",
                    priority: 31,
                    students_count: 9455,
                    deleted_at: null,
                    created_at: "2021-04-03T14:23:13.000000Z",
                    updated_at: "2021-12-20T04:10:59.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/12.png",
                },
                {
                    id: 4,
                    title: 'App "Đừng Chạm Tay Lên Mặt"',
                    slug: "tool-canh-bao-so-len-mat",
                    description:
                        "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
                    thumbnail: "courses/4/61a9e9e701506.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "r6GWbQL-qwA",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-javascript",
                    level: "Trình độ cơ bản",
                    priority: 50,
                    students_count: 3962,
                    deleted_at: null,
                    created_at: "2020-01-10T14:23:13.000000Z",
                    updated_at: "2021-12-20T06:01:05.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/4/61a9e9e701506.png",
                },
                {
                    id: 14,
                    title: "Làm việc với Terminal & Ubuntu",
                    slug: "windows-terminal-wsl",
                    description:
                        "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
                    thumbnail: "courses/14/61a89fb15f2fb.png",
                    content: null,
                    preview_origin: "youtube",
                    preview_youtube_id: "7ppRSaGT1uw",
                    preview_path: null,
                    language: "javascript",
                    syntax_highligh: "language-shell",
                    level: "Trình độ trung bình",
                    priority: 51,
                    students_count: 621,
                    deleted_at: null,
                    created_at: "2021-12-01T12:08:12.000000Z",
                    updated_at: "2021-12-20T06:06:49.000000Z",
                    thumbnail_cdn:
                        "https://cdn.fullstack.edu.vn/f8-learning/courses/14/61a89fb15f2fb.png",
                },
            ]
            // Số lượng dòng giảm đi nhiều, nhưng để hiểu cần phải biết
            // Destructuring, map và sử dụng array, object thuần thục
            // div có thể thay bằng React.Fragment
            function GetCourse({ course }) {
                return (
                    <div>
                        <div>{course.title}</div>
                        <img src={course.thumbnail_cdn} />
                        <p>{course.description}</p>
                        <p>{course.students_count}</p>
                    </div>
                )
            }
            // Mỗi lần truyền vào một course nên để một giá trị key tương ứng
            function App() {
                return (
                    <div id="wrapper">
                        {courses.map((course) => (
                            <GetCourse key={course.id} course={course} />
                        ))}
                    </div>
                )
            }
            // Có thể truyền key như cách dưới đây, index là giá trị map sẽ trả mặc định
            // function App() {
            //     return (
            //         <div id="wrapper">
            //             {courses.map((course, index) => (
            //                 <GetCourse key={index} course={course} />
            //             ))}
            //         </div>
            //     )
            // }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[15]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 16: DOM event

### Cách thêm DOM event đơn giản

<!-- ! -->
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
            //! Cách nhấn vào ra Hello World
            // Nhớ rằng trong ReactDOM, các DOM event sẽ được viết hoa chữ
            // cái đầu phía sau
            // để tạo một function, có thể sử dụng arrow function cho tiện
            // thay () => console.log("Hello World")
            // bằng function () {console.log("Hello World")}
            // thì kết quả không đổi, nhưng arrown function đẹp hơn
            function ClickMe() {
                return (
                    <div onClick={() => console.log("Hello World")}>
                        Click me
                    </div>
                )
            }
            // Lưu ý mỗi khi thêm biến hay thêm function thì sử dụng {} như trên
            function App() {
                return (
                    <div id="wrapper">
                        <ClickMe />
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[16]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Cách thêm DOM event bằng cách sử dụng thêm nội dung event đang diễn ra (Phần 1)

<!-- ! -->
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
            //! Cách nhấn vào ra tên khoá học
            // Nếu không truyền đối số cho ClickMe thì event mặc định sẽ là hành động
            // mình đang làm
            // target là để hướng đến vị trí của DOM component mình vừa click vào
            // (là div với nội dung là Click me trong trường hợp này)
            // thêm textContent để lấy ra nội dung text từ thẻ div đó
            function ClickMe() {
                return (
                    <div onClick={() => console.log(event.target.textContent)}>
                        Click me
                    </div>
                )
            }
            // Xoá lần lượt textContent và target để thấy thêm kết quả
            function App() {
                return (
                    <div id="wrapper">
                        <ClickMe />
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[16]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Cách thêm DOM event bằng cách sử dụng thêm nội dung event đang diễn ra (Phần 2)

<!-- ! -->
<details markdown="block">
  <summary>
    Áp dụng cái vừa học
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
            // Nhớ mở console để xem kết quả
            function ClickMe({ contentHere }) {
                return (
                    <div onClick={() => console.log(event.target.textContent)}>
                        {contentHere}
                    </div>
                )
            }
            let name1 = "Hello World"
            let name2 = "No sweet without sweat"
            function App() {
                return (
                    <div id="wrapper">
                        <ClickMe contentHere={name1} />
                        <ClickMe contentHere={name2} />
                        <ClickMe contentHere="You can insert here too" />
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[16]-2.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 17: Master DOM event

### Bắt đầu đưa function truyền vào ra ngoài

<!-- ! -->
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
            //! Cách nhấn vào ra tên khoá học (Cách 2, tốt hơn, nhưng vẫn chưa tối ưu)
            let name = "Hello World"
            function Render1({ name, onClick }) {
                return (
                    <div>
                        <p onClick={onClick}>{name}</p>
                    </div>
                )
            }
            function App() {
                // Nên viết OnClick ra riêng như thế này nhằm mục đích kiểm soát tốt
                // Tên function phục vụ ReactDOM nhớ viết hoa cả chữ cái đầu
                // do name sẽ không được đưa thẳng vào ReactDOM (nhận biết bằng cách
                // nếu sau chữ return có các thẻ div đi kèm là đang trong vùng hoạt động
                // của ReactDOM) mà chỉ ở dạng function
                // => Cho nên name ở dưới không cần dấu {} (cần cho đưa JavaScript vào
                // ReactDOM)
                function OnClick(name) {
                    console.log(name)
                }
                return (
                    <div id="wrapper">
                        <Render1 name={name} onClick={() => OnClick(name)} />
                    </div>
                )
            }
            // Để ý rằng do mình vẫn đang truyền arrow function vào bên trong
            // ReactDOM (truyền vào trong App, sau return) nên các cách sau sẽ bắt
            // đầu giải quyết vấn đề này
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[17]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Nên học thuộc cái này để master DOM event

<!-- ! -->
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
            let name = "Hello World"
            // Ta nên truyền thẳng function OnClick vào function khác thế này
            // Sau đó thêm arrow function vào chỗ onClick
            // Lý do thêm lắm arrow function như vậy vì sau onClick (DOM event)
            // Sẽ cần thực thi một function gốc (là arrow function ở đây)
            // Thử xoá đi arrow function sẽ hiểu lý do
            // Nhờ cách này chúng ta vẫn truyền đối số name vào function OnClick
            // như bình thường
            function Render1({ name, onClick }) {
                return (
                    <div>
                        <p onClick={() => onClick(name)}>{name}</p>
                    </div>
                )
            }
            function App() {
                function OnClick(name) {
                    console.log(name)
                }
                return (
                    <div id="wrapper">
                        <Render1 name={name} onClick={OnClick} />
                    </div>
                )
            }
            // Nhờ cách này, code ở phần App sẽ clean hơn, và giúp render tốt hơn
            // do ReactDOM.render nhận trực tiếp App
            // => Tóm tắt: loại bỏ mớ bùi nhùi ở App càn nhiều càng tốt
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[17]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 18: Cách tạo ra ReactComponent xài lại (Reusable)

### Cách tạo đơn giản nhất

<!-- ! -->
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
            //! Cách xài đi xài lại một component
            // Tại đây, Form là một object có 2 giá trị
            // Input() {} là cách tạo ra method (bản chất là hàm)
            // có tên là Input
            // *Return như bình thường để trả về ReactDOM
            const Form = {
                Input() {
                    return <input />
                },
                Checkbox() {
                    return <input type="checkbox" />
                },
            }
            // Gọi method như dưới đây
            function App() {
                return (
                    <div id="wrapper">
                        <Form.Input />
                        <Form.Checkbox />
                    </div>
                )
            }
            // Dứng dụng: tạo ra một biến Form, trong đó có rất nhiều
            // ReactDOM con khác nhau giúp code dễ đọc và tiện lợi hơn
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[18]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Các nút linh hoạt hơn

<!-- ! -->
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
            //! Cách xài đi xài lại một component (Cách hay hơn)
            const Form = {
                Input() {
                    return <input />
                },
                Checkbox() {
                    return <input type="checkbox" />
                },
            }
            // Xem kỹ phần type, làm điều này sẽ giúp chúng ta đổi
            // Các nút bấm dễ dàng nhờ reusable button
            function App() {
                let type = "Input"
                let Component = Form[type]
                return (
                    <div id="wrapper">
                        <Component />
                        <Form.Checkbox />
                    </div>
                )
            }
            ReactDOM.render(<App />, document.getElementById("root"))
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[18]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 19: Sử dụng spread để tạo button tự thay đổi theo thông tin được nhập vào

<!-- ! -->
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
            //! Cách xài đi xài lại một component (Các hay hơn)
            // Spread (định dạng {...var}) có chức nâng xoá đi các thanh bọc
            // bên ngoài của object là {} và của array là []
            // *Như ví dụ dưới, nếu ta xoá đi thanh bọc thì giống như ta đang
            // truyền thẳng props là href={href}, onClick={() => onClick(title)}
            // vào return Component
            //*Việc này giống như thêm class hay id vào html thôi không có gì cao
            // siêu cả
            function BtnHref({ title, href, onClick }) {
                let Component = "button"
                const props = {}
                if (href) {
                    Component = "a"
                    props.href = href
                }
                if (onClick) {
                    props.onClick = () => onClick(title)
                }
                return <Component {...props}>{title}</Component>
            }
            // Mặc định sẽ là nút button
            // nếu có function truyền vào, sẽ có chức năng thêm
            // Nếu có href truyền vào, đổi qua phím a
            // Thay đổi code của chính mình để thấy kết quả
            function App() {
                function OnClick(hi) {
                    console.log(hi)
                }
                return (
                    <div id="wrapper">
                        <BtnHref
                            title="Hello World"
                            href="https://www.google.com/"
                            onClick={OnClick}
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

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[19]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

## Lesson 20: Booleans, Null, Undefined sẽ không được render ra ReactDOM

### Áp dụng toán tử logic &&

<!-- ! -->
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
            function App({ isBlack, isOrange }) {
                let IfCome1 = false
                let IfCome2 = true
                // Thử sửa bằng false để thấy kết quả
                return (
                    <div id="wrapper">
                        {IfCome1 && <div>Hello World 1</div>}
                        {IfCome2 && <div>Hello World 2</div>}
                        {isBlack && <div>Some black box here</div>}
                        {isOrange && <div>Some orange box here</div>}
                    </div>
                )
            }
            // Treat cái App này không khác gì một Function component to con
            ReactDOM.render(
                <App isBlack={true} isOrange={false} />,
                document.getElementById("root")
            )
        </script>
    </body>
</html>
```

</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[20]-0.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

---

### Áp dụng toán tử logic ||

<!-- ! -->
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
            // console.log(object)
            function App({ title, content }) {
                // Xem console
                console.log({ title })
                let IfCome1 = "the World"
                let IfCome2 = null
                // string là true
                // null là falses
                return (
                    <div id="wrapper">
                        {IfCome1 || <div>Hello World 1</div>}
                        {IfCome2 || <div>Hello World 2</div>}
                        {title || content}
                    </div>
                )
            }
            // Nếu không có cả title và content thì không in ra gì cả
            ReactDOM.render(
                <App title="" content="In ra nếu thiếu title" />,
                document.getElementById("root")
            )
        </script>
    </body>
</html>
```
</details>

[Xem trên website](https://ftu2-student-association.github.io/official-materials/materials\React\F8\[20]-1.html){: .btn .mb-1 .mt-2 .fs-6 .m-auto}

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

```markdown
class = > className
for => htmlFor
```
