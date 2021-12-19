---
layout: default
title: Fetch
nav_order: 3
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

```js
fetch(postAPI)
    .then(function (response) {
        return response.json();
        //json = JSON.parse
    })
    .then(function (posts) {
        console.log(posts)
    })
````

Nói chung là dậy đó
