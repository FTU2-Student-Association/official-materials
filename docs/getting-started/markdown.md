---
layout: default
title: Markdown
nav_order: 10
parent: Getting started
---

# Markdown
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Formating

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

### Codeblock

Để gõ code trong định dạng Markdown không lỗi, ta có thể sử dụng `code block` để bao bọc
lấy đoạn code bên trong bằng cách thêm 3 dấu back quote theo như trong hình, không tính
đến dấu "|".
```markdown
|```markdown
|Nội dung
|```
```
Phần markdown có thể được thay đổi để phù hợp với ngôn ngữ trong đoạn codeblock, xem qua link sau để hiểu hơn.  
[Rule for codeblock specify](https://rdmd.readme.io/docs/code-blocks){: .btn .btn-blue .fs-3}

---
