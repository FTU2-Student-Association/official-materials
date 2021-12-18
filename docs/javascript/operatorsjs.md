---
layout: default
title: Javascript operators
nav_order: 3
# has_children: true
parent: JavaScript
# grand_parent:
---

<!-- markdownlint-disable MD022 MD025-->
# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
<!-- markdownlint-enable MD022 MD025-->

## Arithmetic Operators

| Operator | Description             |
| :------- | :---------------------- |
| +        | Addition                |
| -        | Subtraction             |
| *        | Multiplication          |
| **       | Exponentiation (ES2016) |
| /        | Division                |
| %        | Modulus (Remainder) Lấy phần dư    |
| ++       | Increment               |
| --       | Decrement               |

### Prefix & Suffix

```js
x++;
//Cộng 1 vào x
```

Cách bên dưới cũng là cộng 1, nhưng sẽ cộng 1 trước trong các hàm if (xài khi thật sự hiểu)

```js
++x;
//Cộng 1 vào x trước khi tiếp tục logoc
```

## Assignment Operators (Toán tử gán)

| Operator | Example  | Same As     |
| :------- | :------- | :---------- |
| =        | x = y    | x = y       |
| +=       | x += y   | x = x + y   |
| -=       | x -= y   | x = x - y   |
| *=       | x *= y   | x = x * y   |
| /=       | x /= y   | x = x / y   |
| %=       | x %= y   | x = x % y   |
| <<=      | x <<= y  | x = x << y  |
| >>=      | x >>= y  | x = x >> y  |
| >>>=     | x >>>= y | x = x >>> y |
| &=       | x &= y   | x = x & y   |
| ^=       | x ^= y   | x = x ^ y   |
| |=       | x |= y   | x = x | y   |
| **=      | x **= y  | x = x ** y  |

## Comparison Operators

| Operator | Description                       |
| :------- | :-------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |
| ?        | ternary operator                  |

## Logical Operators

| Operator | Description |
| :------- | :---------- |
| &&       | logical and |
| ||       | logical or  |
| !        | logical not |

## String Operators

```js
let me = 'Hello';
let hi = me + ' World!'
console.log(hi)
//In ra Hello World!
```

>Đây là cách nối string cơ bản
{: .q}

## Type Operators

| Operator   | Description                                                |
| :--------- | :--------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |

## Bitwise Operators

>Chưa cần quan tâm.
{: .q}

| Operator | Description           | Example | Same as     | Result | Decimal |
| :------- | :-------------------- | :------ | :---------- | :----- | :------ |
| &        | AND                   | 5 & 1   | 0101 & 0001 | 0001   | 1       |
| |        | OR                    | 5 | 1   | 0101 | 0001 | 0101   | 5       |
| ~        | NOT                   | ~ 5     | ~0101       | 1010   | 10      |
| ^        | XOR                   | 5 ^ 1   | 0101 ^ 0001 | 0100   | 4       |
| <<       | Zero fill left shift  | 5 << 1  | 0101 << 1   | 1010   | 10      |
| >>       | Signed right shift    | 5 >> 1  | 0101 >> 1   | 0010   | 2       |
| >>>      | Zero fill right shift | 5 >>> 1 | 0101 >>> 1  | 0010   | 2       |
