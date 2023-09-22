<div class="grid gap-8">
	<section class="text-center">
		<h1 class="flex flex-wrap gap-x-3 items-center justify-center h1">
			<strong>🕰️</strong>
			Timeless Shopify Theme
		</h1>
	</section>

	<section class="[&_nav]:max-w-max">
		<Menu linkClass="link" />
	</section>

	<hr>

	<section class="grid md:grid-cols-2 gap-8 items-start">
		<hgroup class="grid gap-2 text-center">
			<h2 class="h2">🤔 Need help?</h2>
			<p>Feel free to reach out!</p>
		</hgroup>

		<ContactForm/>
	</section>
</div>

<script lang="ts">
	import Menu from '$lib/Menu.svelte'
	import ContactForm from '$lib/ContactForm.svelte'
</script>
