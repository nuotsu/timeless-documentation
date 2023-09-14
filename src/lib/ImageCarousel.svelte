<figure class="carousel gap-4 items-center p-4 bg-canvas rounded">
	{#each images as image}
		<img
			class="max-w-[90%] rounded shadow-md"
			src="/{image}"
			alt=""
		/>
	{/each}
</figure>

<script lang="ts">
	export let images: string[] = []
</script>
