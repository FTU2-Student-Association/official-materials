// let me = "Hello"
// // let hi = me + ' World!'

// const hi = [1, 2, 3, 4, 5, 6, 7]

// console.log(hi[0]) //In ra element đầu
// console.log(hi[hi.length - 1]) //In ra element cuối

// let bar = true

// console.log(bar == true)

// bar.includes()

// var app = document.s

// app.listen

// setTimeout(function () {
//     console.log("Hello World!")
//     setTimeout(function () {
//         console.log("Hello World!")
//         setTimeout(function () {
//             console.log("Hello World!")
//             setTimeout(function () {
//                 console.log("Hello World!")
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// setTimeout(function () {
//     console.log("Hello World1!")
// }, 1000)

// let hi = {
//     name: "yup",
// }

// !Promise
// let promise = new Promise(
//     //Executor
//     function (resolve, reject) {
//         //Logic
//         //Thành công: resolve
//         //Thất bại: reject
//         resolve()
//     }
// )

// promise
//     .then(function () {
//         console.log("Successfully")
//     })
//     .catch(function () {
//         console.log("Failure")
//     })
//     .finally(function () {
//         console.log("Done")
//     })
// )Promise

// let promise = Promise.resolve("Success!")

// promise.then((data) => {
//     console.log("result :", data)
// })

// let varWorld = "World"
// console.log(`Hello ${varWorld}!`)

// let newArray = {
//     name: "oof",
//     price: 10,
//     address: "46 Bui Thi Xuan",
// }

// let { name: oof, price, ...rest } = newArray

// console.log(oof)
// console.log(rest)

// let newArray = {
//     name: "oof",
//     price: 10,
//     address: {
//         name: "46 Bui Thi Xuan",
//     },
// }

// let {
//     name: newName,
//     price,
//     address: { name: nameChildren },
// } = newArray
// //newName sau dấu : là để đổi tên biến khi lấy ra,
// //xài như vậy sẽ không gặp lỗi
// console.log(nameChildren)

// let newArray = {
//     name: "oof",
//     price: 10,
//     address: {
//         name: "46 Bui Thi Xuan",
//     },
// }

// let { name: newName, description = "Gia tri mac dinh" } = newArray
// //newName sau dấu : là để đổi tên biến khi lấy ra,
// //xài như vậy sẽ không gặp lỗi
// console.log(description)

// function logger(...params) {
//     console.log(params)
// }

// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9))

// function logger([a, b, ...rest]) {
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }

// logger([1, 2, 5, 4, 6, 5, 46, 3, 2])

// let array1 = ["Hello", "Ocean"]
// let array2 = ["World", "Trees", "Yup"]

// let array3 = [...array1, ...array2]

// console.log(array3)

let array = ["Yup", "Money", "Go"]

function logger(...rest) {
    console.log(...rest)
}

logger(array)
