---
order: 1
title: Styling
file: snippets/tailwind.liquid
---

[Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework, is heavily used in the *Timeless* theme. It is a great tool to quickly build layouts and components and is highly maintainable.

## Base Styles and Customization

The base styles are defined in `snippets/tailwind.liquid`. Think of this file as the main stylesheet (e.g. `base.css`, `theme.css`) for the theme. Feel free to adjust according to your needs.

## No Build Step

Notice *Timeless* uses the [Play CDN](https://tailwindcss.com/docs/installation/play-cdn) by default instead of a typical PostCSS setup. We assume *Timeless* users are not familiar with PostCSS and the build process. The Play CDN is a great way to use Tailwind classes without the need for a build step.

**However**, it is recommended to configure a build process tailored to your needs, which can be configured using the [Tailwind CLI](https://tailwindcss.com/docs/installation#using-tailwind-cli) along with PostCSS, etc.

## Scoped Styling

*Timeless* uses special inline `<style text="text/tailwindcss">` to use `@apply` directives and Tailwind syntax throughout the codebase.

Additionally, inside sections files the `#shopify-section-{{ section.id }}` CSS selector with a Liquid variable is used to scope styles to the particular section.

```html
<style text="text/tailwindcss">
	#shopify-section-{{ section.id }} {
		@apply bg-canvas text-ink;
	}
</style>
```
