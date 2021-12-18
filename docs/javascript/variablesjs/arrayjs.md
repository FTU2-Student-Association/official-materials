---
layout: default
title: Javascript array
nav_order: 5
# has_children: true
parent: Variables & data type
grand_parent: JavaScript
---

<!-- markdownlint-disable MD022 MD025-->
# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Cách tạo array
{: .fs-7}

```js
const cars = ["Saab", "Volvo", "BMW"];
```

>Sử dụng array để trữ hàng loạt các dữ liệu có kiểu giống nhau.
{: .q}

Cách tạo khác `(không khuyến cáo)`

```js
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```

---

## Cách để truy cập một giá trị trong array
{: .fs-7}

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

>Cách giá trị trong array sẽ được đánh số từ 0 trở đi tương ứng với 0 là elements đầu tiên của array.
{: .q}

Để thay đổi giá trị của array, ta target element ở vị trí tương ứng và gán cho giá trị mới:

```js
cars[2] = "Xạp đe"
```

---

## Tính chất của array
{: .fs-7}

### Arrays are Objects

Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

>But, JavaScript arrays are best described as arrays.
{: .q}

---

### Array Elements Can Be Objects

```js
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

---

## Array Methods and Properties
{: .fs-7}

JavaScript Array Methods
{: .fs-7}

| Method        | Description                                                                      |
| :------------ | :------------------------------------------------------------------------------- |
| concat()      | *Joins two or more arrays, and returns a copy of the joined arrays                |
| copyWithin()  | Copies array elements within the array, to and from specified positions          |
| entries()     | Returns a key/value pair Array Iteration Object                                  |
| every()       | Checks if every element in an array pass a test                                  |
| fill()        | Fill the elements in an array with a static value                                |
| filter()      | Creates a new array with every element in an array that pass a test              |
| find()        | Returns the value of the first element in an array that pass a test              |
| findIndex()   | Returns the index of the first element in an array that pass a test              |
| forEach()     | Calls a function for each array element                                          |
| from()        | Creates an array from an object                                                  |
| includes()    | Check if an array contains the specified element                                 |
| indexOf()     | Search the array for an element and returns its position                         |
| isArray()     | Checks whether an object is an array                                             |
| join()        | *Joins all elements of an array into a string                                     |
| keys()        | Returns a Array Iteration Object, containing the keys of the original array      |
| lastIndexOf() | Search the array for an element, starting at the end, and returns its position   |
| map()         | Creates a new array with the result of calling a function for each array element |
| pop()         | *Removes the last element of an array, and returns that element                   |
| push()        | *Adds new elements to the end of an array, and returns the new length             |
| reduce()      | Reduce the values of an array to a single value (going left-to-right)            |
| reduceRight() | Reduce the values of an array to a single value (going right-to-left)            |
| reverse()     | Reverses the order of the elements in an array                                   |
| shift()       | *Removes the first element of an array, and returns that element                  |
| slice()       | Selects a part of an array, and returns the new array                            |
| some()        | Checks if any of the elements in an array pass a test                            |
| sort()        | Sorts the elements of an array                                                   |
| splice()      | *Adds/Removes elements from an array                                              |
| toString()    | *Converts an array to a string, and returns the result                            |
| unshift()     | *Adds new elements to the beginning of an array, and returns the new length       |
| valueOf()     | Returns the primitive value of an array                                          |

---

JavaScript Array Properties
{: .fs-7}

| Property    | Description                                                    |
| :---------- | :------------------------------------------------------------- |
| constructor | Returns the function that created the Array object's prototype |
| length      | Sets or returns the number of elements in an array             |
| prototype   | Allows you to add properties and methods to an Array object    |

### The length Property

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);
//Trả về giá trị 4
```

>Ví dụ thêm
{: .q}

```js
const hi = [1,2,3,4,5,6,7]

console.log(hi[0]) //In ra element đầu
console.log(hi[hi.length - 1]) //In ra element cuối
```

---

## Bổ sung sau

[Bổ sung sau](https://www.w3schools.com/js/js_arrays.asp)
