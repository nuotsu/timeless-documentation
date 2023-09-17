<nav class="grid gap-2">
	{#each menu as { dir, metadata, entries }}
		<details open>
			<summary class="technical text-sm text-neutral-400">{metadata.title}</summary>
			<ul class="grid">
				{#each sort(entries) as entry}
					{@const href = `${dir}/${entry.slug}`}

					<li>
						<a {href} class={twMerge(
							'block max-w-max border-l border-neutral-200 pl-2 ml-1 hover:border-accent',
							pathname === href && 'font-bold border-accent'
						)}>
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
	import { twMerge } from 'tailwind-merge'

	export let linkClass: string | null = null

	const { menu } = $page.data

	$: ({ pathname } = $page.url)

	function sort(arr: Documentation.Page[] = []) {
		return arr.sort((a, b) => Number(a.metadata.order) - Number(b.metadata.order))
	}
</script>
