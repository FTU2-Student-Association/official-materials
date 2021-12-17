---
layout: default
title: HTML Tag
nav_order: 1
# has_children: true
parent: HTML
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

## Định nghĩa thẻ

Tag = Thẻ <>
>Gồm có node, attribute và text.
{: .q}

```html
<head></head>
<body></body>
```

>2 thẻ dùng để chứa toàn bộ trang web, học rồi cái này tự hiểu ha.
{: .q}

---

## $div

```html
<div></div>
```

>Không biết xài thẻ gì thì cứ xài thẻ này.
{: .q}
<!-- markdownlint-disable MD033-->
Thuộc tính:

- Block (mặc định).
- Có thể chứa bất cứ thứ gì.
- Ngoài thẻ <div> ra, không nên xài các thẻ được liệt kê phía dưới khi không rõ ràng mình đang làm gì.
<!-- markdownlint-enable MD033-->

---

## $h1
<!-- markdownlint-disable MD033-->

```html
<h1>Heading here</h1>
…
<h6>Heading here</h6>
```

>Dùng để báo hiệu rằng trong tag này sẽ có heading và ghi heading vào trong tag này
{: .q}
`Usage`: ghi heading vào.

---

## $p

```html
<p>Text</p>
```

Use: dùng để ghi text.

<!-- markdownlint-enable MD033-->

---

## $img

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

```

>Dùng để chèn hình ảnh vào trong web.
{: .q}

- src – dùng để chèn vị trí của ảnh vào.
- alt – Dùng để hiển thị lên web khi ảnh chưa load kịp. Ví dụ: Dòng chữ “Đây là con gà” sẽ hiển thị lên thay ảnh con gà khi ảnh chưa load kịp nếu thêm alt=” Đây là con gà”.
- width, height – để thay đổi kích cỡ ảnh. Nhận mọi giá trị.

---

## $a

```html
<a href="https://www.w3schools.com">Visit W3Schools.com!</a>
```

<!-- markdownlint-disable MD033-->
>Dùng để chèn link vào một dòng chữ, ta xài thay thẻ <p> vì mục đích này.
{: .q}
• `href` – vị trí của link muốn chèn.
<!-- markdownlint-enable MD033-->

___

## $ul, li

```html
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```

>Dùng để tạo list
{: .q}

• ul – dấu hiệu để bắt đầu một list.
• li – thành phần list.
<!-- markdownlint-disable MD033-->
//Thẻ <li> có thể dùng như thẻ <div> nhưng không khuyến khích add quá nhiều tag phức tạp.
<!-- markdownlint-ensable MD033-->

---

## $form, input

```html
<form action="/action_page.php">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>

    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>

    <input type="submit" value="Submit">
</form>
```

>form: dùng để mở đầu cho một form, cần viết ra để có thể kết hợp hành động từ backend.
{: .q}

- `action` – địa chỉ của hành động submit.

>input: dùng để tạo nên một thành phần để submit thông tin như điền tên, checkbox,..
{: .q}

- `type` – dạng thông tin cần nhập vào là gì. Options: name, email, checkbox,…
- `name` – xem phần #label phía dưới.
- `submit` – để tạo ra nút submit form.

>label: để hỗ trợ việc click vào input dễ hơn. Ví dụ khi mình click chuột vào chữ First name thì con trỏ chuột tự động được đưa vào check box.
{: .q}

- `name` –  thuộc tính dùng để ghi vào input nào cần label được chỉ đến, đặt cùng tên với for của label.
- `for` – ghi vào label để chỉ đến thẻ input cần định hướng đến khi click chuột vào.

[Form create](https://www.w3schools.com/tags/tag_input.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

---

## $button

```html
<button type="button">Click Me!</button>
```

>Để tạo nút bấm như hình, thường được dùng để tạo các nút link tới các thành phần khác (không dùng để submit form).
>Dùng để navigate.
{: .q}

[Button create](https://www.w3schools.com/tags/tag_button.asp){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}
