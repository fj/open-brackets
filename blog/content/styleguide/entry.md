---
title:       Post Styleguide
date:        2017-01-14T08:30:00Z
comments:    true
subscribers: true
draft:       true
type:        entries
layout:      single
description: Lorem ipsum dolor sit amet, per ei iusto fastidii. Te fierent adipiscing mel, duo ei fabellas reprehendunt.
keywords:    test, draft, styleguide
markup:      mmark
tags:
  - styleguide
---

### Headings


# h1, Header
## h2, Header
### h3, Header
#### h4, Header
##### h5, Header
###### h6, Header

```
# h1, Header
## h2, Header
### h3, Header
#### h4, Header
##### h5, Header
###### h6, Header
```

### Paragraph

{{< margin >}}
This is an aside in the margin
{{< /margin >}}

This website was made with love by [**John Feminella**](https://twitter.com/jxxf). Extensive and thoughtful work and advice was also contributed by the redoubtable [**John Otander**](https://twitter.com/4lpine). Each bit was artisanally regurgitated onto the screen for your express delight.


### Lists

- Jeff Marshall, VP Customer Technical Solutions at Apcera
- Brian Martin, Chief Architect for BlueMix Services at IBM
- Joe Fernandes, Senior Director of Product Management at Red Hat
- Rahul Srivastava, CIO Team Member at VMware

```
- Jeff Marshall, VP Customer Technical Solutions at Apcera
- Brian Martin, Chief Architect for BlueMix Services at IBM
- Joe Fernandes, Senior Director of Product Management at Red Hat
- Rahul Srivastava, CIO Team Member at VMware
```

### Links

[Inline link](https://www.google.com)

```
[Inline link](https://www.google.com)
```

### Code

`prolog -e x.pl`


```
smallest(list):
  * Answer: the element `e` in `list` such that for all other
      elements `E`, `e` <= `E`.
```

### Blockquotes

> Albert: “I don’t know when your birthday is, but I know Bernard doesn’t know, either.”

> Bernard: “I didn’t know originally, but now I do.”

```
> Albert: “Well, now I know, too!”
```


### Text styles

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

### MathJax
$$ .\overline{123} $$
$$ \frac{123}{999} $$
$$ \frac{123}{999} = \frac{41}{333} $$

```
$$ .\overline{123} $$
$$ \frac{123}{999} $$
$$ \frac{123}{999} = \frac{41}{333} $$
```

### Images

![chocolate cake with the text 'Happy Birthday, Cheryl' written in frosting](/entries/cheryl.jpg)

{{< caption >}}Image Caption{{< /caption >}}

![serpentine walls at the University of Virginia](/entries/charlottesville-serpentine.jpg)

{{% caption %}}Caption [with link](#){{% /caption %}}


### Side Notes

One of the most distinctive features of Tufte’s style is his extensive use of sidenotes.{{< sidenote >}}This is a sidenote. Accepts an optional positional argument that is the side note id. {{< /sidenote >}} Sidenotes are like footnotes, except they don’t force the reader to jump their eye to the bottom of the page, but instead display off to the side in the margin. Perhaps you have noticed their use in this document already.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quo aspernatur dolor sed voluptate repudiandae inventore deleniti commodi reprehenderit fugit, animi doloremque obcaecati, dolores debitis, {{< sidenote >}}This is another sidenote *without* a reference to demonstrate that it is optional{{< /sidenote >}} quis porro? Assumenda, nisi, tenetur!
