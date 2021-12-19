---
layout: default
title: JSON
nav_order: 1
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

1. Viết tắt của JavaScript Object Notation
2. Là một định dạng dữ liệu (string)
3. Được dùng rất nhiều trong API, backend
4. Có thể chứa các dữ liệu:
    - Number
    - String
    - Boolean
    - Null
    - Object
    - Array

Before sending to the server:

```js
JSON.stringify(obj);
```

>Việc này sẽ chuyển dữ liệu muốn lưu sang dạng chuỗi
{: .q}

After pull from the server

```js
JSON.parse(obj);
```
