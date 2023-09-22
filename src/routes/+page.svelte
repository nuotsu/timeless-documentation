<svelte:head>
	<link rel="preload" href="/assets/timeless-mockup.webp" as="image" type="image/webp">
</svelte:head>

<div class="grid gap-8">
	<hgroup class="grid gap-2 text-center py-4">
		<p class="technical text-xs">A modern Shopify Theme</p>
		<h1 class="flex flex-wrap gap-x-3 items-center justify-center h0">
			<strong>🕰️</strong>
			Timeless
		</h1>
		<p>Built for merchants <em>and</em> developers</p>
	</hgroup>

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

	<section class="w-full -mt-24 md:px-4">
		<Menu
			className="!flex flex-wrap gap-x-12 backdrop-blur p-4 bg-white/80 rounded"
			linkClass="link"
		/>
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
