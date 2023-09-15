<tbody>
	<tr class="border-b [&_th]:whitespace-nowrap">
		<th>Label</th>
		<th>Schema type</th>
		<th>Info</th>
		<th>Default value</th>
	</tr>

	{#each settings as s}
		{#if s.type === 'header'}
			<tr>
				<th colspan="4">{s.content}</th>
			</tr>
		{:else}
			<tr class="border-b hover:bg-accent/10">
				<th class="text-left font-normal" class:whitespace-nowrap={s.label}>
					{s.label}
				</th>

				<td><code>{s.type}</code></td>

				<td>{s.info || ''}</td>

				<td class:text-left={/^</g.test(s.default)}>
					<code>{s.default || ''}</code>
				</td>
			</tr>
		{/if}
	{/each}
</tbody>

<style lang="postcss">
	tr:hover code {
		@apply bg-white;
	}

	tbody tr:hover code {
		@apply bg-white;
	}
</style>

<script lang="ts">
	export let settings: Shopify.SectionSchemaSetting[]
</script>
