<svelte:head>
	<link rel="preload" href="/assets/timeless-mockup.webp" as="image" type="image/webp">
</svelte:head>

<div class="grid gap-8">
	<section class="text-center">
		<h1 class="flex flex-wrap gap-x-3 items-center justify-center h1">
			<strong>🕰️</strong>
			Timeless Shopify Theme
		</h1>
	</section>

	<figure class="<md:full-width">
		<img
			class="md:rounded shadow-lg bg-canvas max-h-[300px] object-cover"
			src="/assets/timeless-mockup.webp"
			alt="Timeless Shopify Theme"
			width={1344} height={896}
			loading="eager"
			draggable="false"
		>
	</figure>

	<section class="w-full max-w-sm mx-auto -mt-24 backdrop-blur-lg p-4 bg-white/70 rounded">
		<Menu linkClass="link" />
	</section>

	<hr>

	<section class="grid md:grid-cols-2 gap-8 items-center">
		<hgroup class="grid gap-2 text-center">
			<h2 class="h2">🤔 Need help?</h2>
			<p>Feel free to <a class="link" href="/docs/support">reach out</a>!</p>
		</hgroup>

		<ContactForm/>
	</section>
</div>

<script lang="ts">
	import Menu from '$lib/Menu.svelte'
	import ContactForm from '$lib/ContactForm.svelte'
</script>
