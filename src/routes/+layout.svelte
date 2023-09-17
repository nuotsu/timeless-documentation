<header class="grid gap-4 w-[14rem] mx-auto p-4 sm:px-8 self-start md:sticky top-0">
	<a class="grid text-center" href="/">
		<strong class="text-4xl">🕰️</strong>
		<strong>Timeless Theme</strong>
	</a>

	<Menu linkClass="hover:underline decoration-dotted" />
</header>

<main class="grow p-4 py-8 sm:px-8 bg-white">
	<slot></slot>
</main>

<script lang="ts">
	import Menu from '$lib/Menu.svelte'
	import '../styles/app.css'
</script>
