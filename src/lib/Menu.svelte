<svelte:window on:resize={closedOnMobile ? closeOnMobile : undefined} />

<nav class="grid gap-2">
	{#each menu as { dir, metadata, entries }}
		<details {open}>
			<summary class="technical text-sm text-neutral-400 hover:text-accent">{metadata.title}</summary>

			<ul class="grid anim-fade-b">
				{#each sort(entries) as entry}
					{@const href = `${dir}/${entry.slug}`}

					<li>
						<a {href} class={twMerge(
							'block border-l border-neutral-200 pl-2 ml-1 hover:border-accent',
							linkClass,
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
	import { browser } from '$app/environment'
	import { twMerge } from 'tailwind-merge'

	export let
		linkClass: string | undefined = undefined,
		closedOnMobile: boolean = false

	const { menu } = $page.data

	$: ({ pathname } = $page.url)

	function sort(arr: Documentation.Page[] = []) {
		return arr.sort((a, b) => Number(a.metadata.order) - Number(b.metadata.order))
	}

	let open = true

	function closeOnMobile() {
		if (!browser) return
		if (window.matchMedia('(max-width: 768px)').matches) open = false
		else open = true
	}

	closedOnMobile && closeOnMobile()
</script>
