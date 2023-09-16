<h2>⚙️ Schema Settings</h2>

<div class="overflow-x-auto <md:full-width <md:px-4 <md:pb-4">
	<table>
		<SchemaSetting settings={schema.settings} />
	</table>
</div>

{#if schema.blocks}
	<h2>⚙️ Block settings</h2>

	{#each schema.blocks as block}
		<div class="overflow-x-auto <md:full-width <md:px-4 <md:pb-4">
			<table>
				<thead>
					<tr class="border-none">
						<th class="text-left font-normal" colspan="4">
							<strong>{block.name}</strong>:
							<code>{block.type}</code>
						</th>
					</tr>
				</thead>
				<SchemaSetting settings={block.settings} />
			</table>
		</div>
	{/each}
{/if}

<style lang="postcss">
	table {
		min-width: 100%;
	}
</style>

<script lang="ts">
	import SchemaSetting from './SchemaSetting.svelte'

	export let schema: Shopify.Schema

	$: schema
</script>
