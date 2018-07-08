---
title:        "Tufte-CSS Test"
date:         2016-03-14T10:00:00Z
description:  "Tufte-CSS Test"
comments:     true
subscribers:  true
slug:         "tufte-css-test"
icon:         post
tags:
  - pivotal
  - work
---

Tufte CSS provides tools to style web articles using the ideas demonstrated by Edward Tufte’s books and handouts. Tufte’s style is known for its simplicity, extensive use of sidenotes, tight integration of graphics with text, and carefully chosen typography.

# Side Notes

One of the most distinctive features of Tufte’s style is his extensive use of sidenotes.{{< sidenote >}}This is a sidenote. Accepts an optional positional argument that is the side note id. {{< /sidenote >}} Sidenotes are like footnotes, except they don’t force the reader to jump their eye to the bottom of the page, but instead display off to the side in the margin. Perhaps you have noticed their use in this document already. {{% sidenote "hi" %}}This is a sidenote with a **custom reference**."{{% /sidenote %}}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quo aspernatur dolor sed voluptate repudiandae inventore deleniti commodi reprehenderit fugit, animi doloremque obcaecati, dolores debitis, {{< sidenote >}}This is another sidenote *without* a reference to demonstrate that it is optional{{< /sidenote >}} quis porro? Assumenda, nisi, tenetur!

# Margin Notes

If you want a sidenote without footnote-style numberings, then you want a margin note. {{< margin id="example-1-2" >}}This is a margin note{{< /margin >}} Notice there isn’t a number preceding the note. On large screens, a margin note is just a sidenote that omits the reference number. This lessens the distracting effect taking away from the flow of the main text, but can increase the cognitive load of matching a margin note to its referent text. However, on small screens, a margin note is like a sidenote except its viewability-toggle is a symbol rather than a reference number. This document currently uses the symbol ⊕ (&#8853;), but it’s up to you.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi, aut earum in sapiente a laboriosam impedit cupiditate quos quam laudantium, delectus possimus. {{% margin id="example-ref" %}}This is another margin note with a *custom reference*{{% /margin %}}

Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas id cursus magna, ut aliquam orci. Aliquam erat volutpat. Donec vehicula erat sit amet sagittis lacinia. Ut at malesuada ligula, sed aliquam ex. Vivamus sit amet urna convallis, aliquet mauris non, bibendum enim. Pellentesque at ultrices ipsum. Quisque fermentum urna sodales interdum ultricies.{{< margin >}}This is an margin note, so you can use it in the middle of a paragraph without breaking the block{{< /margin >}} Nullam in neque ut lorem posuere placerat. Integer at dui ligula. Duis posuere eros ut felis facilisis, scelerisque luctus felis vehicula. In eget elit pharetra purus laoreet efficitur. Praesent porta arcu eget vehicula volutpat. Praesent iaculis, elit a eleifend ultricies, augue turpis viverra sapien, at rhoncus neque massa non erat. Maecenas eleifend consectetur dui, eget cursus massa suscipit in.

Cras quis nulla quis nisi porttitor rhoncus vel in justo. Cras quis lacus nisl. Nulla facilisi. Mauris nec libero elit. Curabitur et elementum tellus. {{% margin %}}This is an  **margin note** with _markdown_{{% /margin %}}Suspendisse vitae nunc eu mi dapibus maximus nec eu urna. Nam sit amet tortor vel dui sollicitudin facilisis. Donec tristique sollicitudin nulla, vel hendrerit nisl gravida ac. Donec mollis ullamcorper euismod.

# Margin Notes With Images and HTML

Tufte emphasizes tight integration of graphics with text. Data, graphs, and figures are kept with the text that discusses them. In print, this means they are not relegated to a separate page. On the web, that means readability of graphics and their accompanying text without extra clicks, tab-switching, or scrolling.

{{< margin >}}
<img src="https://edwardtufte.github.io/tufte-css/img/rhino.png" alt="Image of a Rhinoceros"/>F.J. Cole, “The History of Albrecht Dürer’s Rhinoceros in Zooological Literature,” <em>Science, Medicine, and History: Essays on the Evolution of Scientific Thought and Medical Practice</em> (London, 1953), ed. E. Ashworth Underwood, 337-356. From page 71 of Edward Tufte’s <em>Visual Explanations</em>.
{{< /margin >}}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis ipsa optio modi, voluptate temporibus impedit perferendis vitae recusandae quidem, explicabo laudantium at dolorem beatae illum est fuga voluptatibus quis error dignissimos illo accusamus vel incidunt vero cumque? Ipsum recusandae culpa est ratione nulla voluptatum rerum assumenda deserunt eum perspiciatis!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis ipsa optio modi, voluptate temporibus impedit perferendis vitae recusandae quidem, explicabo laudantium at dolorem beatae illum est fuga voluptatibus quis error dignissimos illo accusamus vel incidunt vero cumque? Ipsum recusandae culpa est ratione nulla voluptatum rerum assumenda deserunt eum perspiciatis!
