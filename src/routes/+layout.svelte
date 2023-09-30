<header class="grid gap-4 w-full max-w-[14rem] mx-auto p-4 sm:px-8 self-start md:sticky top-0">
	<a class="grid text-center" href="/">
		<strong class="text-4xl">🕰️</strong>
		<strong>Timeless Shopify</strong>
	</a>

	<Menu linkClass="hover:underline decoration-dotted text-sm" closedOnMobile />
</header>

<main class="grow flex flex-col">
	<div class="grow mt-4 relative z-[1] p-4 py-8 sm:px-8 bg-white rounded">
		<slot></slot>
	</div>

	<p class="sticky bottom-0 p-4 text-center text-xs text-neutral-400">
		&copy; {new Date().getFullYear()} All rights reserved. Timeless Shopify Theme by <a href="https://nuotsu.dev">nuotsu</a>.
	</p>
</main>

<script lang="ts">
	import Menu from '$lib/Menu.svelte'
	import '../styles/app.css'
</script>
