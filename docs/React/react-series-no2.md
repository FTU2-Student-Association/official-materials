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
