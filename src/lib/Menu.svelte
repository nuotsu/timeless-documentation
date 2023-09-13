<nav>
	{#each menu as { dir, metadata, entries }}
		<details open>
			<summary>{metadata.title}</summary>
			<ul>
				{#each entries as entry}
					{@const href = `${dir}/${entry.slug}`}

					<li>
						<a {href} class:font-bold={pathname === href}>
							{entry.metadata.title}
						</a>
					</li>
				{/each}
			</ul>
		</details>
	{/each}

</nav>

<script lang="ts">
	import { page } from '$app/stores'

	const { menu } = $page.data

	$: ({ pathname } = $page.url)
</script>
