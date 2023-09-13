<div class="flex <md:flex-col max-w-screen-md mx-auto">
	<aside>
		<a href="/">Timeless Theme</a>

		<nav>
			<dl>
				<dt>Docs</dt>
				<dd><a href="/docs/intro">Introduction</a></dd>
			</dl>
		</nav>
	</aside>

	<main class="grow bg-white">
		<slot></slot>
	</main>
</div>

<script>
	import '../styles/app.css'
</script>
