---
layout: default
title: Beginner
nav_order: 2
# has_children: true
parent: 
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

## Các dạng hàm React cơ bản

### React.createElement()

Để tạo ra HTML một cách cực khổ.
Sử dụng thư viện Babel để cuộc sống tốt đẹp hơn. (Thêm type=text/babel)

### ReactDOM.render()

ReactDOM.render(jsx, document.getElementById('root'))

>Dùng để xuất HTML từ React
{: .q}

Lưu ý:

- Định dạng để xuất phải là JSX.
- Phải có thẻ đóng bên ngoài bao bọc các thành phần bên trong.
- Sử dụng <React.Fragment> </React.Fragment> để bao bọc bên ngoài tránh bị thiếu thẻ ôm.

## Component

Những thứ như function gọi là React `component`, phần nằm bên trong gọi là React `element`.
Khi sử dụng function component thì phải viết hoa chữ cái đầu.

```js
<Header></Header>
//Viết ngắn hơn
<Header />
```

## Prop in REACT

Prop có thể là bất kỳ kiểu dữ liệu gì

### Với REACT elements
{: .fs-6}

```markdown
class => className
for => HTMLfor
// DOM event
click => onClick
```

Ví dụ:

```js
<div title="bla bla">
```

### Với REACT components
{: .fs-6}

Với REACT components sẽ giống đưa vào như đối số (xem nó như function)
{: .fs-6}

Ví dụ:

```js
<PostItems message="hello" />
//Cách viết hàm nên làm: sử dụng destructoring

function Hello ({name = 0,age,getName = () => {}}) {
    JSX
}
```
