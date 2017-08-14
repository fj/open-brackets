jxf-dot-me
==========

This is the source repository for [John Feminella's](https://jxf.me) site.

* **tasks:** This [Trello board](https://trello.com/b/W6nu7Ds5) tracks the site's evolution.

## References

Ideas are liberally taken from:

* [César Suárez Ortega](http://csuarez.me)
* [Juan B. Rodriguez](http://jbrodriguez.io)

## Installation

**Install Yarn**: https://yarnpkg.com/lang/en/docs/install/

```
brew install yarn
```

**Install Hugo**: https://gohugo.io/overview/installing/

```
brew install hugo
```

**Install Dependencies**

```
yarn
```

**Run server**

```
gulp serve
```


## Code Style

* When using semantic class names (i.e. `home-list` instead of `g-r-c-6-12`), extend any necessary unsemantic classes via Sass `@extends`, to avoid duplicating code.

```
.home-list {
  @extend .p1;
  @extend .mx1;
  @extend .g-r-c-6-12;
}
```


* Loosely uses BEM methodology to write and manage class names: http://getbem.com/introduction/

```
.block {}
.block-element {}
.block-element__sub-element {}
.block-element--modifier {}
```

* How CSS files are organized:

  * `base`: Reset styles, base styles like typography, layout, colors, `blockquote`s. Any styles for tags like `pre`
  * `components`: Modular components like `.list`, `.hero`
  * `utilities`: Reusable utilities like text and responsive utilities
