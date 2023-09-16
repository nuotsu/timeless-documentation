<tbody class="whitespace-nowrap">
	<tr class="border-b">
		<th>Setting</th>
		<th>Type</th>

		{#if hasValues}<th>Values</th>{/if}
		{#if hasInfo}<th>Info</th>{/if}
		{#if hasDefault}<th>Default value</th>{/if}
	</tr>

	{#each settings as setting}
		{#if setting.type === 'header'}
			<tr class="border-none">
				<th class="text-left" colspan="5">{setting.content}</th>
			</tr>
		{:else}
			<tr>
				<th class="text-left font-normal" class:whitespace-nowrap={setting.label}>
					{#if setting.type === 'color_scheme_group'}
						Color scheme group
					{:else}
						{setting.label}
					{/if}
				</th>

				<td><code>{setting.type}</code></td>

				{#if hasValues}
					<td>
						{#if setting.options}
							<ul class="text-left !leading-none">
								{#each (setting.options) as option}
									<li>{option.label}</li>
								{/each}
							</ul>
						{/if}

						{#if setting.min !== undefined || setting.max !== undefined}
							<span>{[setting.min, 'n', setting.max].filter(String).join(' ≤ ')}</span>
						{/if}
					</td>
				{/if}

				{#if hasInfo}
					<td class="whitespace-normal text-xs">{setting.info || ''}</td>
				{/if}

				{#if hasDefault && setting.default}
					<td class={/^</g.test(setting.default) ? 'text-left whitespace-normal leading-snug' : ''}>
						{#if /^ð/.test(setting.default)}
							<code>👍</code>
						{:else}
							<code>{setting.default}</code>
						{/if}
					</td>
				{/if}
			</tr>
		{/if}
	{/each}
</tbody>

<style lang="postcss">

</style>

<script lang="ts">
	export let settings: Shopify.SchemaSetting[]

	$: settings

	const hasInfo = settings?.some(setting => setting.info)
	const hasValues = settings?.some(setting => ['select', 'range'].includes(setting.type))
	const hasDefault = settings?.some(setting => setting.default)
</script>
