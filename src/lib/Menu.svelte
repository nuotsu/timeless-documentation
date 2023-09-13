<nav>
	{#each menu as { dir, metadata, entries }}
		<details open>
			<summary>{metadata.title}</summary>
			<ul>
				{#each entries as entry}
					<li><a href="{dir}/{entry.slug}">{entry.metadata.title}</a></li>
				{/each}
			</ul>
		</details>
	{/each}

</nav>

<script lang="ts">
	import { page } from '$app/stores'

	const { menu } = $page.data
</script>
