<div class="max-w-screen-sm mx-auto rte [&_a]:link">
	<h1>{data.metadata.title}</h1>

	{#if data.metadata.file}
		<p>📂 <code>{data.metadata.file}</code></p>
	{/if}

	{#if data.metadata.images}
		<ImageCarousel images={data.metadata.images} />
	{/if}

	<svelte:component this={data.component} />
</div>

<script lang="ts">
	import ImageCarousel from '$lib/ImageCarousel.svelte'

	export let data
</script>
