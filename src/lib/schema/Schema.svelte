{#if schema}
	<h2>⚙️ Schema Settings</h2>

	<div class="overflow-x-auto <md:full-width <md:px-4 <md:pb-4">
		<table class="min-w-full">
			<SchemaSetting settings={schema.settings} />
		</table>
	</div>

	{#if schema.blocks}
		<BlockSchema blocks={schema.blocks} />
	{/if}
{/if}

<script lang="ts">
	import SchemaSetting from './SchemaSetting.svelte'
	import BlockSchema from './BlockSchema.svelte'

	export let schema: Shopify.Schema | null = null

	$: schema
</script>
