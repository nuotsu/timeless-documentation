<div class="max-w-screen-sm mx-auto rte [&_a]:link">
	<h1>{data.metadata.title}</h1>

	{#if data.metadata.file}
		<p>📂 <code>{data.metadata.file}</code></p>
	{/if}

	<svelte:component this={data.component} />
</div>

<script lang="ts">
	export let data
</script>
