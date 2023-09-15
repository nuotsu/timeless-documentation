<figure class="carousel gap-4 items-center p-4 bg-canvas rounded">
	{#each images as src}
		<img
			class="max-w-[90%] rounded shadow-md"
			{src}
			alt="" loading="lazy"
		/>
	{/each}
</figure>

<script lang="ts">
	export let images: string[] = []
</script>
