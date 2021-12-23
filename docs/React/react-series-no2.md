---
layout: default
title: React series No.2 - Hooks
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

## Set up

Để chạy được hooks, xem thêm `getting started` phần đầu tại React và cài đặt mọi thứ vào một thư mục khác (không cài vào folder chung tên YAWAH đang xài nhé)

Sau khi cài xong project mới, xoá các nội dung trong thư mục src/App.css và xoá một phần trong src/App.js (xem thêm hình)

![><](https://raw.githubusercontent.com/FTU2-Student-Association/official-materials/gh-pages/assets/images/react-series-no2/Wed-22-Dec-2021-20-57-56.png)

Sau đó copy code paste vào App.js là chạy được, nhớ bật live server bằng lệnh `npm start` (Xem kỹ phần Getting started React)
{: .q}

---

## useState

Dùng để thay đổi trạng thái của dữ liệu.

Ví dụ: muốn chuyển đổi theme từ black sang white, đổi ngôn ngữ,...
{: .q}

### Làm counter số

innitialState là số 0, chúng ta có thể nhập function thoải mái vào mà không sợ bị tính lại

Giá trị của `counter` sẽ bị thay thế bởi giá trị của `setCounter`
{: .q}

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import "./App.css"
import { useState } from "react"
function App() {
    const [counter, setCounter] = useState(0)
    // Thử double dòng setCounter xem chúng ta có thể cộng
    // 2 lần liên tiếp không?
    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <div id="wrapper">
            <h1>{counter}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default App
```

</details>

---

### Làm counter số cộng nhiêu hơn một lúc (làm màu)

Nhớ sơ về cách sử dụng prevState như bên dưới

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import "./App.css"
import { useState } from "react"
function App() {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter((prevState) => prevState + 1)
        setCounter((prevState) => prevState + 1)
    }
    return (
        <div id="wrapper">
            <h1>{counter}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default App
```

---

## Two-way binding

### Làm một bộ random quà

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import "./App.css"
import { useState } from "react"
function App() {
    const [gift, setGift] = useState("Nhấn vào để nhận quà")
    const gifts = ["money", "bear", "nothing", "task"]
    function handleClick() {
        setGift(gifts[Math.floor(Math.random() * gifts.length)])
    }
    return (
        <div id="wrapper">
            <h1>{gift}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default App
```

---

### One way binding

Phần này bật Console lên xem nhé

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import "./App.css"
import { useState } from "react"
function App() {
    const [frominput, setFrominput] = useState("")
    console.log(frominput)
    return (
        <div id="wrapper">
            <input
                type="text"
                onChange={(e) => setFrominput(e.target.value)}
                placeholder="Nhớ bật console xem"
            />
        </div>
    )
}
export default App
```

---

### Cách ép React two-way binding

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
a
```

---

### Cách tạo ra button radio

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import "./App.css"
import { useState } from "react"
const btnList = [
    {
        name: "Đây là một",
    },
    {
        name: "Đây là hai",
    },
    {
        name: "Đây là ba",
    },
]
function App() {
    const [check, setCheck] = useState()
    console.log(check)
    function handleClick() {
        console.log({ id: check })
    }
    return (
        <div id="wrapper">
            {btnList.map((btn, index) => {
                return (
                    <div key={index}>
                        <input
                            type="radio"
                            checked={check === index}
                            onChange={(e) => setCheck(index)}
                        />
                        {btn.name}
                    </div>
                )
            })}
            <button onClick={handleClick}>Register</button>
        </div>
    )
}
export default App
```

---

### Cách tạo ra checklist

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import "./App.css"
import { useState } from "react"
const btnList = [
    {
        name: "Đây là một",
    },
    {
        name: "Đây là hai",
    },
    {
        name: "Đây là ba",
    },
]
function App() {
    const [check, setCheck] = useState([])
    function handleCheck(index) {
        setCheck((prev) => {
            let isCheck = prev.includes(index)
            if (isCheck) {
                return prev.filter((varr) => varr !== index)
            } else {
                return [...prev, index]
            }
        })
    }
    console.log(check)
    function handleClick() {
        console.log({ id: check })
    }
    return (
        <div id="wrapper">
            {btnList.map((btn, index) => {
                return (
                    <div key={index}>
                        <input
                            type="checkbox"
                            checked={check.includes(index)}
                            onChange={() => handleCheck(index)}
                        />
                        {btn.name}
                    </div>
                )
            })}
            <button onClick={handleClick}>Register</button>
        </div>
    )
}
export default App
```

---

### Check list baby

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import "./App.css"
import { useState } from "react"
function App() {
    const [list, setList] = useState([])
    const [show, setShow] = useState(
        JSON.parse(localStorage.getItem("list")) ?? []
    )
    console.log(list)
    function handleClick() {
        console.log(list)
        setShow((prev) => {
            const toLocal = [...prev, list]
            localStorage.setItem("list", JSON.stringify(toLocal))
            console.log(toLocal)
            return toLocal
        })
        setList("")
    }
    function HandleShow() {
        return show.map((iShow, index) => {
            return (
                <div key={index}>
                    <li>{iShow}</li>
                    <span>Delete</span>
                </div>
            )
        })
    }
    return (
        <div id="wrapper">
            <input
                type="text"
                value={list}
                onChange={(e) => setList(e.target.value)}
            />
            <button onClick={handleClick}>Register</button>
            <ul>
                <HandleShow />
            </ul>
        </div>
    )
}
export default App
```

---

## useEffect

Có 3 trường hợp sử dụng
Tính chất chung:

1. Callback luôn được gọi sau khi component mounted
2. Cleanup function luôn được gọi trước khi component unmounted
3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

### Trường hợp 1: useEffect (callback)

Tính chất thêm:

- Gọi callback mỗi khi component re-render
- Gọi callback sau khi component được thêm vào DOM

Do vậy khi làm form input sẽ bị gọi callback liên tục (nên ít được dùng)
{: .q}

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
a
```

---

### Trường hợp 2: useEffect (callback,[])

Tính chất thêm:

- Chỉ gọi callback 1 lần sau khi component mounted

Nên sử dụng để fetch một lần render ra giao diện
{: .q}

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import { useEffect, useState } from "react"
function Content() {
    const [newInput, setNewInput] = useState("")
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setPosts(data))
    }, [])
    return (
        <div>
            <input
                value={newInput}
                type="text"
                onChange={(e) => setNewInput(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export { Content }
```

---

## Trường hợp 3: useEffect (callback,[dependencies])

Tính chất thêm:

- Callback được gọi lại mỗi khi dependencies thay đổi

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import { useEffect, useState } from "react"
const btnType = ["posts", "comments", "albums"]
function Content() {
    const [newInput, setNewInput] = useState("")
    const [posts, setPosts] = useState([])
    const [toBtn, setToBtn] = useState("posts")
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${toBtn}`)
            .then((data) => data.json())
            .then((data) => setPosts(data))
    }, [toBtn])
    console.log(toBtn)
    return (
        <div>
            <div>
                {btnType.map((type, index) => (
                    <button
                        style={
                            toBtn === type
                                ? { color: "red", backgroundColor: "black" }
                                : {}
                        }
                        onClick={() => setToBtn(type)}
                        key={index}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <input
                value={newInput}
                type="text"
                onChange={(e) => setNewInput(e.target.value)}
            />
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}
export { Content }
```

---

### useEffect() with DOM events

Sử dụng add và remove để handle event tránh rò rỉ bộ nhớ

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import { useEffect, useState } from "react"
const btnType = ["posts", "comments", "albums"]
function Content() {
    const [newInput, setNewInput] = useState("")
    const [posts, setPosts] = useState([])
    const [toBtn, setToBtn] = useState("posts")
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${toBtn}`)
            .then((data) => data.json())
            .then((data) => setPosts(data))
    }, [toBtn])
    useEffect(() => {
        function handleScroll() {
            setShowGoToTop(window.scrollY > 200)
        }
        window.addEventListener("scroll", handleScroll)
        console.log("AddEventListener")
        return () => {
            window.removeEventListener("scroll", handleScroll)
            console.log("RemoveEventListener")
        }
    }, [])
    console.log(toBtn)
    return (
        <div>
            <div>
                {btnType.map((type, index) => (
                    <button
                        style={
                            toBtn === type
                                ? { color: "red", backgroundColor: "black" }
                                : {}
                        }
                        onClick={() => setToBtn(type)}
                        key={index}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <input
                value={newInput}
                type="text"
                onChange={(e) => setNewInput(e.target.value)}
            />
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <div style={{ position: "fixed", right: "5px", bottom: "5px" }}>
                    Go to top
                </div>
            )}
        </div>
    )
}
export { Content }
```

---

### useEffect() with timer functions

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import { useEffect, useState } from "react"
function Content() {
    const [countdown, setCountdown] = useState(180)
    useEffect(() => {
        const setId = setInterval(() => {
            setCountdown((prev) => prev - 1)
        }, 1000)
        return () => {
            clearInterval(setId)
        }
    }, [])
    return <div>{countdown}</div>
}
export { Content }
```

---

### useEffect() with preview avatar

<!-- ! -->
<details markdown="block">
  <summary>
    File
  </summary>
```html
import { useEffect, useState } from "react"
function Content() {
    const [previewImage, setPreviewImage] = useState()
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewImage)
        }
    }, [previewImage])
    function handleImage(e) {
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div>
            <input type="file" onChange={handleImage} />
            <div>
                {previewImage && <img src={previewImage} alt="Nothing" />}
            </div>
        </div>
    )
}
export { Content }
```

</details>

---

### useEffect() with fake Chat App

<!-- ! -->
<details markdown="block">
  <summary>
    Tại index
  </summary>
```html
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
// Fake comments
function emitComments(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung comment của lesson: ${id}`,
            })
        )
    }, 2000)
}
emitComments(1)
emitComments(2)
emitComments(3)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: <https://bit.ly/CRA-vitals>
reportWebVitals()
```

---

<!-- ! -->
<details markdown="block">
  <summary>
    Tại App
  </summary>
```html
import { useEffect, useState } from "react"
const courseList = [
    {
        id: 1,
        name: "Hello world",
    },
    {
        id: 2,
        name: "Hello noon",
    },
    {
        id: 3,
        name: "Hello night",
    },
]
function Content() {
    const [channel, setChannel] = useState(1)
    function handleClick(id) {
        setChannel(id)
    }
    useEffect(() => {
        function handleComment({ detail }) {
            console.log({ detail })
        }
        window.addEventListener(`lesson-${channel}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${channel}`, handleComment)
        }
    }, [channel])
    function DeployCourseList() {
        // console.log(courseList)
        return courseList.map((course) => (
            <li
                key={course.id}
                onClick={() => handleClick(course.id)}
                style={course.id === channel ? { color: "red" } : {}}
            >
                {course.name}
            </li>
        ))
    }
    return (
        <div>
            <DeployCourseList />
        </div>
    )
}
export { Content }
```

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
