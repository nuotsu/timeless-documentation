<nav class="grid gap-2">
	{#each menu as { dir, metadata, entries }}
		<details open>
			<summary>{metadata.title}</summary>
			<ul>
				{#each sort(entries) as entry}
					{@const href = `${dir}/${entry.slug}`}

					<li>
						<a {href} class={linkClass} class:font-bold={pathname === href}>
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

	export let linkClass: string | null = null

	const { menu } = $page.data

	$: ({ pathname } = $page.url)

	function sort(arr: Documentation.Page[] = []) {
		return arr.sort((a, b) => Number(a.metadata.order) - Number(b.metadata.order))
	}
</script>
