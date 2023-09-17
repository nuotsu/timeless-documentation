<article class="max-w-screen-sm mx-auto rte [&_a]:link">
	<h1>{title}</h1>

	{#if file}
		<p>📂 <code>{file}</code></p>
	{/if}

	{#if images}
		<ImageCarousel {images} />
	{/if}

	<div class="rte">
		<svelte:component this={data.component} />
	</div>

	{#if showSchema && !!data.sectionSchema}
		<SectionSchema schema={data.sectionSchema} />
	{/if}

	{#if showSchema && !!data.settingSchema}
		<SectionSchema schema={data.settingSchema[1]} />
	{/if}
</article>

<style>
	div:empty::before {
		content: 'Documentation coming soon... ⏳';
	}
</style>

<script lang="ts">
	import ImageCarousel from '$lib/ImageCarousel.svelte'
	import SectionSchema from '$lib/schema/Schema.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ title, file, showSchema, images } = data.metadata)
</script>
