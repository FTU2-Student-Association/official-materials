---
layout: default
title: DOM Element Object
nav_order: 1
# has_children: true
parent: HTML DOM
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

## The Element Object
{: .fs-7}

In the HTML DOM, the Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element.

---

## Properties and Methods
{: .fs-7}

The following properties and methods can be used on all HTML elements:

| Property / Method         | Description                                                                                        |
| :------------------------ | :------------------------------------------------------------------------------------------------- |
| className                 | *Sets or returns the value of the class attribute of an element                                    |
| setAttribute()            | *Sets or changes the specified attribute, to the specified value                                   |
| textContent               | *Sets or returns the textual content of a node and its descendants (Light)                         |
| innerText                 | ^Sets or returns the text content of a node and its descendants (Heavy)                            |
| innerHTML                 | *Sets or returns the content of an element  `(Use with caution)`                                   |
| outerHTML                 | ^Sets or returns the content of an element (including the start tag and the end tag)               |
| style                     | *Sets or returns the value of the style attribute of an element                                    |
| classList                 | *Returns the class name(s) of an element                                                           |
| accessKey                 | Sets or returns the accesskey attribute of an element                                              |
| addEventListener()        | Attaches an event handler to the specified element                                                 |
| appendChild()             | Adds a new child node, to an element, as the last child node                                       |
| attributes                | Returns a NamedNodeMap of an element's attributes                                                  |
| blur()                    | Removes focus from an element                                                                      |
| childElementCount         | Returns the number of child elements an element has                                                |
| childNodes                | Returns a collection of an element's child nodes (including text and comment nodes)                |
| children                  | Returns a collection of an element's child element (excluding text and comment nodes)              |
| click()                   | Simulates a mouse-click on an element                                                              |
| clientHeight              | Returns the height of an element, including padding                                                |
| clientLeft                | Returns the width of the left border of an element                                                 |
| clientTop                 | Returns the width of the top border of an element                                                  |
| clientWidth               | Returns the width of an element, including padding                                                 |
| cloneNode()               | Clones an element                                                                                  |
| closest()                 | Searches up the DOM tree for the closest element which matches a specified CSS selector            |
| compareDocumentPosition() | Compares the document position of two elements                                                     |
| contains()                | Returns true if a node is a descendant of a node, otherwise false                                  |
| contentEditable           | Sets or returns whether the content of an element is editable or not                               |
| dir                       | Sets or returns the value of the dir attribute of an element                                       |
| exitFullscreen()          | Cancels an element in fullscreen mode                                                              |
| firstChild                | Returns the first child node of an element                                                         |
| firstElementChild         | Returns the first child element of an element                                                      |
| focus()                   | Gives focus to an element                                                                          |
| getAttribute()            | Returns the specified attribute value of an element node                                           |
| getAttributeNode()        | Returns the specified attribute node                                                               |
| getBoundingClientRect()   | Returns the size of an element and its position relative to the viewport                           |
| getElementsByClassName()  | Returns a collection of all child elements with the specified class name                           |
| getElementsByTagName()    | Returns a collection of all child elements with the specified tag name                             |
| hasAttribute()            | Returns true if an element has the specified attribute, otherwise false                            |
| hasAttributes()           | Returns true if an element has any attributes, otherwise false                                     |
| hasChildNodes()           | Returns true if an element has any child nodes, otherwise false                                    |
| id                        | Sets or returns the value of the id attribute of an element                                        |
| insertAdjacentElement()   | Inserts a HTML element at the specified position relative to the current element                   |
| insertAdjacentHTML()      | Inserts a HTML formatted text at the specified position relative to the current element            |
| insertAdjacentText()      | Inserts text into the specified position relative to the current element                           |
| insertBefore()            | Inserts a new child node before a specified, existing, child node                                  |
| isContentEditable         | Returns true if the content of an element is editable, otherwise false                             |
| isDefaultNamespace()      | Returns true if a specified namespaceURI is the default, otherwise false                           |
| isEqualNode()             | Checks if two elements are equal                                                                   |
| isSameNode()              | Checks if two elements are the same node                                                           |
| isSupported()             | Returns true if a specified feature is supported on the element                                    |
| lang                      | Sets or returns the value of the lang attribute of an element                                      |
| lastChild                 | Returns the last child node of an element                                                          |
| lastElementChild          | Returns the last child element of an element                                                       |
| matches()                 | Returns a Boolean value indicating whether an element is matched by a specific CSS selector or not |
| namespaceURI              | Returns the namespace URI of an element                                                            |
| nextSibling               | Returns the next node at the same node tree level                                                  |
| nextElementSibling        | Returns the next element at the same node tree level                                               |
| nodeName                  | Returns the name of a node                                                                         |
| nodeType                  | Returns the node type of a node                                                                    |
| nodeValue                 | Sets or returns the value of a node                                                                |
| normalize()               | Joins adjacent text nodes and removes empty text nodes in an element                               |
| offsetHeight              | Returns the height of an element, including padding, border and scrollbar                          |
| offsetWidth               | Returns the width of an element, including padding, border and scrollbar                           |
| offsetLeft                | Returns the horizontal offset position of an element                                               |
| offsetParent              | Returns the offset container of an element                                                         |
| offsetTop                 | Returns the vertical offset position of an element                                                 |
| outerText                 | Sets or returns the outer text content of a node and its descendants                               |
| ownerDocument             | Returns the root element (document object) for an element                                          |
| parentNode                | Returns the parent node of an element                                                              |
| parentElement             | Returns the parent element node of an element                                                      |
| previousSibling           | Returns the previous node at the same node tree level                                              |
| previousElementSibling    | Returns the previous element at the same node tree level                                           |
| querySelector()           | Returns the first child element that matches a specified CSS selector(s) of an element             |
| querySelectorAll()        | Returns all child elements that matches a specified CSS selector(s) of an element                  |
| remove()                  | Removes the element from the DOM                                                                   |
| removeAttribute()         | Removes a specified attribute from an element                                                      |
| removeAttributeNode()     | Removes a specified attribute node, and returns the removed node                                   |
| removeChild()             | Removes a child node from an element                                                               |
| removeEventListener()     | Removes an event handler that has been attached with the addEventListener() method                 |
| replaceChild()            | Replaces a child node in an element                                                                |
| requestFullscreen()       | Shows an element in fullscreen mode                                                                |
| scrollHeight              | Returns the entire height of an element, including padding                                         |
| scrollIntoView()          | Scrolls the specified element into the visible area of the browser window                          |
| scrollLeft                | Sets or returns the number of pixels an element's content is scrolled horizontally                 |
| scrollTop                 | Sets or returns the number of pixels an element's content is scrolled vertically                   |
| scrollWidth               | Returns the entire width of an element, including padding                                          |
| setAttributeNode()        | Sets or changes the specified attribute node                                                       |
| tabIndex                  | Sets or returns the value of the tabindex attribute of an element                                  |
| tagName                   | Returns the tag name of an element                                                                 |
| title                     | Sets or returns the value of the title attribute of an element                                     |
| toString()                | Converts an element to a string                                                                    |

>Thêm [] vào DOM elements để hiển thị ra thuộc tính
{: .q}

[textContent vs innerText](https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext){: .btn .btn-blue .mb-1 .mt-2 .fs-6 .m-auto}

---

### style property
{: .fs-5}

Style Object Properties
The "CSS" column indicates in which CSS version the property is defined (CSS1, CSS2, or CSS3).

>Cách sử dụng: var.style.color = "red";
{: .q}
<!--  -->

>Cách thêm CSS vào DOM thứ 2:

```js
Object.assign(boxElement.style, {
    width: '200px',
    backgroundColor: 'blue',
})
```

Nhờ cách này có thể thêm nhiều style cùng một lúc.

| Property                 | Description                                                                                                                                     | CSS  |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :--- |
| alignContent             | Sets or returns the alignment between the lines inside a flexible container when the items do not use all available space                       | 3    |
| alignItems               | Sets or returns the alignment for items inside a flexible container                                                                             | 3    |
| alignSelf                | Sets or returns the alignment for selected items inside a flexible container                                                                    | 3    |
| animation                | A shorthand property for all the animation properties below, except the animationPlayState property                                             | 3    |
| animationDelay           | Sets or returns when the animation will start                                                                                                   | 3    |
| animationDirection       | Sets or returns whether or not the animation should play in reverse on alternate cycles                                                         | 3    |
| animationDuration        | Sets or returns how many seconds or milliseconds an animation takes to complete one cycle                                                       | 3    |
| animationFillMode        | Sets or returns what values are applied by the animation outside the time it is executing                                                       | 3    |
| animationIterationCount  | Sets or returns the number of times an animation should be played                                                                               | 3    |
| animationName            | Sets or returns a name for the @keyframes animation                                                                                             | 3    |
| animationTimingFunction  | Sets or returns the speed curve of the animation                                                                                                | 3    |
| animationPlayState       | Sets or returns whether the animation is running or paused                                                                                      | 3    |
| background               | Sets or returns all the background properties in one declaration                                                                                | 1    |
| backgroundAttachment     | Sets or returns whether a background-image is fixed or scrolls with the page                                                                    | 1    |
| backgroundColor          | Sets or returns the background-color of an element                                                                                              | 1    |
| backgroundImage          | Sets or returns the background-image for an element                                                                                             | 1    |
| backgroundPosition       | Sets or returns the starting position of a background-image                                                                                     | 1    |
| backgroundRepeat         | Sets or returns how to repeat (tile) a background-image                                                                                         | 1    |
| backgroundClip           | Sets or returns the painting area of the background                                                                                             | 3    |
| backgroundOrigin         | Sets or returns the positioning area of the background images                                                                                   | 3    |
| backgroundSize           | Sets or returns the size of the background image                                                                                                | 3    |
| backfaceVisibility       | Sets or returns whether or not an element should be visible when not facing the screen                                                          | 3    |
| border                   | Sets or returns borderWidth, borderStyle, and borderColor in one declaration                                                                    | 1    |
| borderBottom             | Sets or returns all the borderBottom properties in one declaration                                                                              | 1    |
| borderBottomColor        | Sets or returns the color of the bottom border                                                                                                  | 1    |
| borderBottomLeftRadius   | Sets or returns the shape of the border of the bottom-left corner                                                                               | 3    |
| borderBottomRightRadius  | Sets or returns the shape of the border of the bottom-right corner                                                                              | 3    |
| borderBottomStyle        | Sets or returns the style of the bottom border                                                                                                  | 1    |
| borderBottomWidth        | Sets or returns the width of the bottom border                                                                                                  | 1    |
| borderCollapse           | Sets or returns whether the table border should be collapsed into a single border, or not                                                       | 2    |
| borderColor              | Sets or returns the color of an element's border (can have up to four values)                                                                   | 1    |
| borderImage              | A shorthand property for setting or returning all the borderImage properties                                                                    | 3    |
| borderImageOutset        | Sets or returns the amount by which the border image area extends beyond the border box                                                         | 3    |
| borderImageRepeat        | Sets or returns whether the image-border should be repeated, rounded or stretched                                                               | 3    |
| borderImageSlice         | Sets or returns the inward offsets of the image-border                                                                                          | 3    |
| borderImageSource        | Sets or returns the image to be used as a border                                                                                                | 3    |
| borderImageWidth         | Sets or returns the widths of the image-border                                                                                                  | 3    |
| borderLeft               | Sets or returns all the borderLeft properties in one declaration                                                                                | 1    |
| borderLeftColor          | Sets or returns the color of the left border                                                                                                    | 1    |
| borderLeftStyle          | Sets or returns the style of the left border                                                                                                    | 1    |
| borderLeftWidth          | Sets or returns the width of the left border                                                                                                    | 1    |
| borderRadius             | A shorthand property for setting or returning all the four borderRadius properties                                                              | 3    |
| borderRight              | Sets or returns all the borderRight properties in one declaration                                                                               | 1    |
| borderRightColor         | Sets or returns the color of the right border                                                                                                   | 1    |
| borderRightStyle         | Sets or returns the style of the right border                                                                                                   | 1    |
| borderRightWidth         | Sets or returns the width of the right border                                                                                                   | 1    |
| borderSpacing            | Sets or returns the space between cells in a table                                                                                              | 2    |
| borderStyle              | Sets or returns the style of an element's border (can have up to four values)                                                                   | 1    |
| borderTop                | Sets or returns all the borderTop properties in one declaration                                                                                 | 1    |
| borderTopColor           | Sets or returns the color of the top border                                                                                                     | 1    |
| borderTopLeftRadius      | Sets or returns the shape of the border of the top-left corner                                                                                  | 3    |
| borderTopRightRadius     | Sets or returns the shape of the border of the top-right corner                                                                                 | 3    |
| borderTopStyle           | Sets or returns the style of the top border                                                                                                     | 1    |
| borderTopWidth           | Sets or returns the width of the top border                                                                                                     | 1    |
| borderWidth              | Sets or returns the width of an element's border (can have up to four values)                                                                   | 1    |
| bottom                   | Sets or returns the bottom position of a positioned element                                                                                     | 2    |
| boxDecorationBreak       | Sets or returns the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break.                | 3    |
| boxShadow                | Attaches one or more drop-shadows to the box                                                                                                    | 3    |
| boxSizing                | Allows you to define certain elements to fit an area in a certain way                                                                           | 3    |
| captionSide              | Sets or returns the position of the table caption                                                                                               | 2    |
| caretColor               | Sets or returns the caret/cursor color of an element                                                                                            | 3    |
| clear                    | Sets or returns the position of the element relative to floating objects                                                                        | 1    |
| clip                     | Sets or returns which part of a positioned element is visible                                                                                   | 2    |
| color                    | Sets or returns the color of the text                                                                                                           | 1    |
| columnCount              | Sets or returns the number of columns an element should be divided into                                                                         | 3    |
| columnFill               | Sets or returns how to fill columns                                                                                                             | 3    |
| columnGap                | Sets or returns the gap between the columns                                                                                                     | 3    |
| columnRule               | A shorthand property for setting or returning all the columnRule properties                                                                     | 3    |
| columnRuleColor          | Sets or returns the color of the rule between columns                                                                                           | 3    |
| columnRuleStyle          | Sets or returns the style of the rule between columns                                                                                           | 3    |
| columnRuleWidth          | Sets or returns the width of the rule between columns                                                                                           | 3    |
| columns                  | A shorthand property for setting or returning columnWidth and columnCount                                                                       | 3    |
| columnSpan               | Sets or returns how many columns an element should span across                                                                                  | 3    |
| columnWidth              | Sets or returns the width of the columns                                                                                                        | 3    |
| content                  | Used with the :before and :after pseudo-elements, to insert generated content                                                                   | 2    |
| counterIncrement         | Increments one or more counters                                                                                                                 | 2    |
| counterReset             | Creates or resets one or more counters                                                                                                          | 2    |
| cursor                   | Sets or returns the type of cursor to display for the mouse pointer                                                                             | 2    |
| direction                | Sets or returns the text direction                                                                                                              | 2    |
| display                  | Sets or returns an element's display type                                                                                                       | 1    |
| emptyCells               | Sets or returns whether to show the border and background of empty cells, or not                                                                | 2    |
| filter                   | Sets or returns image filters (visual effects, like blur and saturation)                                                                        | 3    |
| flex                     | Sets or returns the length of the item, relative to the rest                                                                                    | 3    |
| flexBasis                | Sets or returns the initial length of a flexible item                                                                                           | 3    |
| flexDirection            | Sets or returns the direction of the flexible items                                                                                             | 3    |
| flexFlow                 | A shorthand property for the flexDirection and the flexWrap properties                                                                          | 3    |
| flexGrow                 | Sets or returns how much the item will grow relative to the rest                                                                                | 3    |
| flexShrink               | Sets or returns how the item will shrink relative to the rest                                                                                   | 3    |
| flexWrap                 | Sets or returns whether the flexible items should wrap or not                                                                                   | 3    |
| cssFloat                 | Sets or returns the horizontal alignment of an element                                                                                          | 1    |
| font                     | Sets or returns fontStyle, fontVariant, fontWeight, fontSize, lineHeight, and fontFamily in one declaration                                     | 1    |
| fontFamily               | Sets or returns the font family for text                                                                                                        | 1    |
| fontSize                 | Sets or returns the font size of the text                                                                                                       | 1    |
| fontStyle                | Sets or returns whether the style of the font is normal, italic or oblique                                                                      | 1    |
| fontVariant              | Sets or returns whether the font should be displayed in small capital letters                                                                   | 1    |
| fontWeight               | Sets or returns the boldness of the font                                                                                                        | 1    |
| fontSizeAdjust           | Preserves the readability of text when font fallback occurs                                                                                     | 3    |
| fontStretch              | Selects a normal, condensed, or expanded face from a font family                                                                                | 3    |
| hangingPunctuation       | Specifies whether a punctuation character may be placed outside the line box                                                                    | 3    |
| height                   | Sets or returns the height of an element                                                                                                        | 1    |
| hyphens                  | Sets how to split words to improve the layout of paragraphs                                                                                     | 3    |
| icon                     | Provides the author the ability to style an element with an iconic equivalent                                                                   | 3    |
| imageOrientation         | Specifies a rotation in the right or clockwise direction that a user agent applies to an image                                                  | 3    |
| isolation                | Defines whether an element must create a new stacking content                                                                                   | 3    |
| justifyContent           | Sets or returns the alignment between the items inside a flexible container when the items do not use all available space.                      | 3    |
| left                     | Sets or returns the left position of a positioned element                                                                                       | 2    |
| letterSpacing            | Sets or returns the space between characters in a text                                                                                          | 1    |
| lineHeight               | Sets or returns the distance between lines in a text                                                                                            | 1    |
| listStyle                | Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration                                                         | 1    |
| listStyleImage           | Sets or returns an image as the list-item marker                                                                                                | 1    |
| listStylePosition        | Sets or returns the position of the list-item marker                                                                                            | 1    |
| listStyleType            | Sets or returns the list-item marker type                                                                                                       | 1    |
| margin                   | Sets or returns the margins of an element (can have up to four values)                                                                          | 1    |
| marginBottom             | Sets or returns the bottom margin of an element                                                                                                 | 1    |
| marginLeft               | Sets or returns the left margin of an element                                                                                                   | 1    |
| marginRight              | Sets or returns the right margin of an element                                                                                                  | 1    |
| marginTop                | Sets or returns the top margin of an element                                                                                                    | 1    |
| maxHeight                | Sets or returns the maximum height of an element                                                                                                | 2    |
| maxWidth                 | Sets or returns the maximum width of an element                                                                                                 | 2    |
| minHeight                | Sets or returns the minimum height of an element                                                                                                | 2    |
| minWidth                 | Sets or returns the minimum width of an element                                                                                                 | 2    |
| navDown                  | Sets or returns where to navigate when using the arrow-down navigation key                                                                      | 3    |
| navIndex                 | Sets or returns the tabbing order for an element                                                                                                | 3    |
| navLeft                  | Sets or returns where to navigate when using the arrow-left navigation key                                                                      | 3    |
| navRight                 | Sets or returns where to navigate when using the arrow-right navigation key                                                                     | 3    |
| navUp                    | Sets or returns where to navigate when using the arrow-up navigation key                                                                        | 3    |
| objectFit                | Specifies how the contents of a replaced element should be fitted to the box established by its used height and width                           | 3    |
| objectPosition           | Specifies the alignment of the replaced element inside its box                                                                                  | 3    |
| opacity                  | Sets or returns the opacity level for an element                                                                                                | 3    |
| order                    | Sets or returns the order of the flexible item, relative to the rest                                                                            | 3    |
| orphans                  | Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element | 2    |
| outline                  | Sets or returns all the outline properties in one declaration                                                                                   | 2    |
| outlineColor             | Sets or returns the color of the outline around a element                                                                                       | 2    |
| outlineOffset            | Offsets an outline, and draws it beyond the border edge                                                                                         | 3    |
| outlineStyle             | Sets or returns the style of the outline around an element                                                                                      | 2    |
| outlineWidth             | Sets or returns the width of the outline around an element                                                                                      | 2    |
| overflow                 | Sets or returns what to do with content that renders outside the element box                                                                    | 2    |
| overflowX                | Specifies what to do with the left/right edges of the content, if it overflows the element's content area                                       | 3    |
| overflowY                | Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area                                       | 3    |
| padding                  | Sets or returns the padding of an element (can have up to four values)                                                                          | 1    |
| paddingBottom            | Sets or returns the bottom padding of an element                                                                                                | 1    |
| paddingLeft              | Sets or returns the left padding of an element                                                                                                  | 1    |
| paddingRight             | Sets or returns the right padding of an element                                                                                                 | 1    |
| paddingTop               | Sets or returns the top padding of an element                                                                                                   | 1    |
| pageBreakAfter           | Sets or returns the page-break behavior after an element                                                                                        | 2    |
| pageBreakBefore          | Sets or returns the page-break behavior before an element                                                                                       | 2    |
| pageBreakInside          | Sets or returns the page-break behavior inside an element                                                                                       | 2    |
| perspective              | Sets or returns the perspective on how 3D elements are viewed                                                                                   | 3    |
| perspectiveOrigin        | Sets or returns the bottom position of 3D elements                                                                                              | 3    |
| position                 | Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)                                        | 2    |
| quotes                   | Sets or returns the type of quotation marks for embedded quotations                                                                             | 2    |
| resize                   | Sets or returns whether or not an element is resizable by the user                                                                              | 3    |
| right                    | Sets or returns the right position of a positioned element                                                                                      | 2    |
| scrollBehavior           | Specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable boxt  |      |
| tableLayout              | Sets or returns the way to lay out table cells, rows, and columns                                                                               | 2    |
| tabSize                  | Sets or returns the length of the tab-character                                                                                                 | 3    |
| textAlign                | Sets or returns the horizontal alignment of text                                                                                                | 1    |
| textAlignLast            | Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"                 | 3    |
| textDecoration           | Sets or returns the decoration of a text                                                                                                        | 1    |
| textDecorationColor      | Sets or returns the color of the text-decoration                                                                                                | 3    |
| textDecorationLine       | Sets or returns the type of line in a text-decoration                                                                                           | 3    |
| textDecorationStyle      | Sets or returns the style of the line in a text decoration                                                                                      | 3    |
| textIndent               | Sets or returns the indentation of the first line of text                                                                                       | 1    |
| textJustify              | Sets or returns the justification method used when text-align is "justify"                                                                      | 3    |
| textOverflow             | Sets or returns what should happen when text overflows the containing element                                                                   | 3    |
| textShadow               | Sets or returns the shadow effect of a text                                                                                                     | 3    |
| textTransform            | Sets or returns the capitalization of a text                                                                                                    | 1    |
| top                      | Sets or returns the top position of a positioned element                                                                                        | 2    |
| transform                | Applies a 2D or 3D transformation to an element                                                                                                 | 3    |
| transformOrigin          | Sets or returns the position of transformed elements                                                                                            | 3    |
| transformStyle           | Sets or returns how nested elements are rendered in 3D space                                                                                    | 3    |
| transition               | A shorthand property for setting or returning the four transition properties                                                                    | 3    |
| transitionProperty       | Sets or returns the CSS property that the transition effect is for                                                                              | 3    |
| transitionDuration       | Sets or returns how many seconds or milliseconds a transition effect takes to complete                                                          | 3    |
| transitionTimingFunction | Sets or returns the speed curve of the transition effect                                                                                        | 3    |
| transitionDelay          | Sets or returns when the transition effect will start                                                                                           | 3    |
| unicodeBidi              | Sets or returns whether the text should be overridden to support multiple languages in the same document                                        | 2    |
| userSelect               | Sets or returns whether the text of an element can be selected or not                                                                           | 2    |
| verticalAlign            | Sets or returns the vertical alignment of the content in an element                                                                             | 1    |
| visibility               | Sets or returns whether an element should be visible                                                                                            | 2    |
| whiteSpace               | Sets or returns how to handle tabs, line breaks and whitespace in a text                                                                        | 1    |
| width                    | Sets or returns the width of an element                                                                                                         | 1    |
| wordBreak                | Sets or returns line breaking rules for non-CJK scripts                                                                                         | 3    |
| wordSpacing              | Sets or returns the spacing between words in a text                                                                                             | 1    |
| wordWrap                 | Allows long, unbreakable words to be broken and wrap to the next line                                                                           | 3    |
| widows                   | Sets or returns the minimum number of lines for an element that must be visible at the top of a page                                            | 2    |
| zIndex                   | Sets or returns the stack order of a positioned element                                                                                         | 2    |

---

### classList property
{: .fs-6}

Properties
{: .fs-6}

| Property | Description                                |
| :------- | :----------------------------------------- |
| length   | Returns the number of classes in the list. |

This property is read-only

Methods
{: .fs-6}

| Method                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| add(class1, class2, ...)       | Adds one or more class names to an element.<br />If the specified class already exist, the class will not be added.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| contains(class)                | Returns a Boolean value, indicating whether an element has the specified class name.<br />Possible values:<br />true - the element contains the specified class name<br />false - the element does not contain the specified class name                                                                                                                                                                                                                                                                                                                                                                                                   |
| item(index)                    | Returns the class name with a specified index number from an element.<br />Index starts at 0. Returns null if the index is out of range                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| remove(class1, class2, ...)    | Removes one or more class names from an element. Note: Removing a class that does not exist, does NOT throw an error                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| toggle(class, true&#124;false) | Toggles between a class name for an element.<br />The first parameter removes the specified class from an element, and returns false.<br />If the class does not exist, it is added to the element, and the return value is true.<br />The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed. For example:<br />Remove a class: element.classList.toggle("classToRemove", false);<br />Add a class: element.classList.toggle("classToAdd", true);<br />Note: The second parameter is not supported in Internet Explorer or Opera 12 and earlier. |

---

## DOM Link Object
{: .fs-7}

Link Object Properties

| Property    | Description                                                                                                       |
| :---------- | :---------------------------------------------------------------------------------------------------------------- |
| href        | *Sets or returns the URL of the linked document                                                                   |
| charset     | Not supported in HTML5. Sets or returns the character encoding of the linked document                             |
| crossOrigin | Sets or returns the the CORS settings of the linked document                                                      |
| disabled    | Sets or returns whether the linked document is disabled, or not                                                   |
| hreflang    | Sets or returns the language code of the linked document                                                          |
| media       | Sets or returns the media type for the link element                                                               |
| rel         | Sets or returns the relationship between the current document and the linked document                             |
| rev         | Not supported in HTML5. Sets or returns the reverse relationship from the linked document to the current document |
| sizes       | Returns the value of the sizes attribute of the linked resource                                                   |
| type        | Sets or returns the content type of the linked document                                                           |

>The Link object also supports the standard properties and events.
{: .q}
