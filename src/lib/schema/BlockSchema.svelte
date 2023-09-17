<h2>⚙️ Block settings</h2>

{#each (blocks || []) as block}
  <div class="overflow-x-auto <md:full-width <md:px-4 <md:pb-4">
    <table class="min-w-full">
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

<script lang="ts">
  import SchemaSetting from './SchemaSetting.svelte'

  export let blocks: Shopify.Schema['blocks']

  $: blocks
</script>
