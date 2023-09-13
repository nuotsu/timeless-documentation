<div class="flex <md:flex-col max-w-screen-lg mx-auto min-h-[100dvh]">
	<aside class="w-[12rem] mx-auto p-4 sm:px-8 self-start md:sticky top-0">
		<a href="/">Timeless Theme</a>

		<Menu/>
	</aside>

	<main class="grow p-4 sm:px-8 bg-white">
		<slot></slot>
	</main>
</div>

<script>
	import Menu from '$lib/Menu.svelte'
	import '../styles/app.css'
</script>
