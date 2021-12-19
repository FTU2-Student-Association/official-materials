---
layout: default
title: Promise
nav_order: 2
# has_children: true
parent: Hell
grand_parent: JavaScript
---

<!-- markdownlint-disable MD025-->
# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

<!-- markdownlint-enable MD025-->

## Synchronous and Asynchronous
{: .fs-7}

So to recap, synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.

>Tóm tắt, sync là đợi nhau chạy, async là thân ai nấy chạy. Việc này ảnh hưởng đến thứ tự function chạy trong JavaScript.
{: .q}

JavaScript là một ngôn ngữ chạy theo kiểu `đồng bộ`, nhưng các function sau đây sẽ là `bất đồng bộ`:

```markdown
// setTimeout, setInterval, fetch
// XMLHttpRequest, file reading
// request animation frame
```

## Pain

Để các function chạy một cách đồng bộ, callback là một các giải quyết vấn đề

Ví dụ:

```js
setTimeout(function () {
    console.log("Hello World!")
    setTimeout(function () {
        console.log("Hello World!")
        setTimeout(function () {
            console.log("Hello World!")
            setTimeout(function () {
               console.log("Hello World!")
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
```

>Function trên sẽ in ra Hello World 4 lần mỗi 1 giây

## How to use Promise
{: .fs-6}

```js
let promise = new Promise(
    //Executor
    function (resolve, reject) {
        //Logic
        //Thành công: resolve
        //Thất bại: reject
        resolve()
    }
)

promise
    .then(function () {
        console.log("Successfully")
    })
    .catch(function () {
        console.log("Failure")
    })
    .finally(function () {
        console.log("Done")
    })
```

Cách để promise luôn thành công

```js
let promise = Promise.resolve('Hello')
```

Cách để promise luôn thất bại

```js
let promise = Promise.reject('Failure')
```

Cách để chạy promise song song

```js
let promise = new Promise(
    //Executor
    function (resolve, reject) {
        //Logic
        //Thành công: resolve
        //Thất bại: reject
        resolve()
    }
)

Promise.all(a,b)
  .then()
```
