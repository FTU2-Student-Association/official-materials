---
layout: default
title: My Docs
nav_order: 10
---

# Official Materials

>Career Fair 2022 - Website team. No cost too great.

1. [Official Materials](#official-materials)
2. [Getting started](#getting-started)
   1. [VS Studio code](#vs-studio-code)
      1. [What is this?](#what-is-this)
   2. [Markdown format](#markdown-format)
      1. [Heading](#heading)
      2. [Text](#text)
      3. [Images](#images)
      4. [List](#list)
      5. [Quotes](#quotes)
      6. [Vertical line](#vertical-line)
      7. [Code Snippets](#code-snippets)
      8. [Reference Lists & Titles](#reference-lists--titles)
      9. [Markdown Footnotes](#markdown-footnotes)
      10. [Escaping](#escaping)
      11. [Embedding HTML](#embedding-html)
      12. [Strike-throughs](#strike-throughs)
      13. [Syntax Highlighting](#syntax-highlighting)
      14. [Automatic Links](#automatic-links)
      15. [Disable Automatic Links](#disable-automatic-links)
      16. [Linking Images](#linking-images)
      17. [Tables](#tables)
      18. [Alignment](#alignment)
      19. [Heading IDs](#heading-ids)
      20. [Linking to Heading IDs](#linking-to-heading-ids)
      21. [Task Lists](#task-lists)
   3. [Tips&Tricks](#tipstricks)
      1. [VS Code shortcuts](#vs-code-shortcuts)
      2. [VS Code shortcuts for Markdown](#vs-code-shortcuts-for-markdown)
      3. [HTML shorcuts](#html-shorcuts)
      4. [Terminal](#terminal)

# Getting started

## VS Studio code

### What is this?

Normal text

## Markdown format

---

### Heading

```markdown
# Heading 1
## Heading 2
### Heading 3
```

Tự gõ ra để biết nha.

---

### Text

```markdown
*italic*
**bold**
***bold-italic***
```

*italic*
**bold**
***bold-italic***

---

### Images

```markdown
![m'lady](https://i.imgur.com/v8IVDka.jpg)
```

![m'lady](https://i.imgur.com/v8IVDka.jpg)

---

### List

>Cách 1

```markdown
1. Tidy the kitchen
2. Prepare ingredients
3. Cook delicious things
```

1. Tidy the kitchen
2. Prepare ingredients
3. Cook delicious things

>Cách 2

```markdown
* Milk
* Bread
  * Wholegrain
* Butter
```

* Milk
* Bread
  * Wholegrain
* Butter

---

### Quotes

```markdown
> To be or not to be, that is the question.
```

> To be or not to be, that is the question.

---

### Vertical line

```markdown
---
```

Like this

---

### Code Snippets

```markdown
Some text with an inline `code` snippet
```

Some text with an inline `code` snippet

---

### Reference Lists & Titles

```markdown
**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"
```

**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"

---

### Markdown Footnotes

```markdown
The quick brown fox[^1] jumped over the lazy dog[^2].

[^1]: Foxes are red
[^2]: Dogs are usually not red
```

The quick brown fox[^1] jumped over the lazy dog[^2].

[^1]: Foxes are red
[^2]: Dogs are usually not red

>Coi trên web mới có thể ra định dạng Footnotes

---

### Escaping

```markdown
\*literally\*
```

\*literally\*

> Using / before the letter you want to escape

```markdown
Character Name
\ backslash
` backtick (see also escaping backticks in code)
* asterisk
_ underscore
{ } curly braces
[ ] brackets
< > angle brackets
( ) parentheses
# pound sign
+ plus sign
- minus sign (hyphen)
. dot
! exclamation mark
| pipe (see also escaping pipe in tables)
```

---

### Embedding HTML

```markdown
<button style="background-color: blue; color: white"
class="button-save large">Big Fat Button</button>
```

<button style="background-color: blue; color: white"
class="button-save large">Big Fat Button</button>

---

### Strike-throughs

```markdown
~~deleted words~~
```

~~deleted words~~

<!-- ### Highlights

```markdown
==oooh fancy==
```

==oooh fancy==

>Chỉ coi được trên ghost -->

---

### Syntax Highlighting

```javascript
   [...]
```

>Phải thêm 3 dấu back note trước và sau để gõ code mẫu như trên

---

### Automatic Links

```markdown
<https://ghost.org>
```

<https://ghost.org>

---

### Disable Automatic Links

```markdown
`https://ghost.org`
```

`https://ghost.org`

---

### Linking Images

```markdown
[![Click me to Google](https://i.imgur.com/v8IVDka.jpg)](https://www.google.com/)
```

[![Click me to Google](https://i.imgur.com/v8IVDka.jpg)](https://www.google.com/)

---

### Tables

```markdown
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

```markdown
Có thể thay | bằng &#124;
```

---

### Alignment

```markdown
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

---

### Heading IDs

```markdown
---
### My Great Heading {#custom-id}
```

---

### Linking to Heading IDs

```markdown
[To Heading IDs](#custom-id)
```

<!-- ### Definition Lists

First Term
: This is the definition of the first term.
: This is the definition of the first term.

>Không đọc được ở Github -->

---

### Task Lists

```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

* [x] Write the press release
* [ ] Update the website
* [ ] Contact the media

<!-- ### Subscript

```markdown
H~2~O
```

H~2~O
>Không đọc được ở Github

---
### Superscript

```markdown
X^2^
```

X^2^
>Không đọc được ở Github -->

---

[Rule for codeblock specify](https://rdmd.readme.io/docs/code-blocks)

## Tips&Tricks

### VS Code shortcuts

* Alt + Z: toggle word wrap.
* Ctrl + B: đóng mở thanh tác vụ bên trái nhanh.
* Ctrl + Shift + E: trở về Explorer nhanh.
* Ctrl + Shift + T : mở lại tab vừa tắt.
* Ctrl + W : đóng tab đang mở.
* Alt + [number] : đi tới một tab cố định đang mở.
* Ctrl + D : tìm vị trí các chữ giống nhau so với chữ đang chọn phía dưới.
* Ctrl + Alt + arrow [down/up] : đưa con trở chuột lên trên hàng trên cùng lúc.
* Alt + D : đưa con trỏ đến các vị trí cùng lúc để edit số lượng lớn.
* Alt + arrow [down/up] : di chuyển hàng.
* Shift + Alt + kéo chuột : chọn nhiều dòng cùng lúc theo cùng hàng dọc.
* Shift + Alt + arrow [down/up] : copy dòng hiện tại và paste xuống/lên (có thể xài nhiều dòng).
* Ctrl + Shift + K : delete the entire line.
* Ctrl + Enter : tạo dòng mới và xuống dòng đó, không gây cắt hàng.

### VS Code shortcuts for Markdown

* Ctrl + Shift [ -> giảm level heading.
* Ctrl + Shift ] : giảm level heading.
* Ctrl + Shift + P : mở setting theo list.

### HTML shorcuts

[HTML shortcuts](https://www.youtube.com/watch?v=45eWEO0gRHI)

### Terminal

* Ctrl + J: toggle between text editor and terminal.
* Ctrl + Shift + ~ : mở terminal.
* $ Exit : đóng terminal.

Hi
