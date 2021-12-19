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

let promise = Promise.resolve("Success!")

promise.then((data) => {
    console.log("result :", data)
})
