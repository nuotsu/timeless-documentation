---
title: Icons
file: snippets/icon.liquid
---

SVG Icons can be rendered using the `icon.liquid` snippet, courtesy of the [Polaris Shopify Icons](https://polaris.shopify.com/icons) library.

## Usage

```liquid
{% render 'icon' with 'cart' %}
{% render 'icon' with 'chevron-right' %}
{% render 'icon' with 'twitter' %}
```

## `.with-icon` utility class

To render SVG icons inline with text, use the `.with-icon` utility class:

_Add-to-cart example_

```html
<button class="with-icon">
  Add to cart
  {% render 'icon' with 'chevron-right' %}
</button>
```

_Accordion example_

```html
<details class="with-accordion">
  <summary class="with-icon">
    Lorem ipsum
    {% render 'icon' with 'chevron-right' %}
  </summary>
  ...
</details>
```
