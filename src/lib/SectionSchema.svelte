<h2>Schema Settings</h2>

<div class="overflow-x-auto <md:full-width <md:px-4 <md:pb-4">
	<table>
		<SectionSchemaSetting settings={schema.settings} />
	</table>
</div>

{#if schema.blocks}
	<h2>Block settings</h2>

	{#each schema.blocks as block}
		<div class="overflow-x-auto <md:full-width <md:px-4 <md:pb-4">
			<table>
				<thead>
					<tr>
						<th class="font-normal" colspan="4">
							<strong>{block.name}</strong>:
							<code>{block.type}</code>
						</th>
					</tr>
				</thead>
				<SectionSchemaSetting settings={block.settings} />
			</table>
		</div>
	{/each}
{/if}

<style lang="postcss">
	table {
		text-align: center;
		min-width: 100%;
	}

	table :global(:is(th, td)) {
		@apply py-2 px-4;
	}
</style>

<script lang="ts">
	import SectionSchemaSetting from './SectionSchemaSetting.svelte'

	export let schema: Shopify.SectionSchema

	$: schema
</script>
