<details>
  <summary class="h2">⚙️ Block settings</summary>

  {#each (blocks || []) as block}
    <div class="overflow-x-auto mb-4 <md:full-width <md:px-4 <md:pb-4">
      <table class="min-w-full">
        <thead>
          <tr class="border-none">
            <th class="text-center font-normal" colspan="4">
              <strong>{block.name}</strong>:
              <code>{block.type}</code>
            </th>
          </tr>
        </thead>
        <SchemaSetting settings={block.settings} />
      </table>
    </div>
  {/each}
</details>

<script lang="ts">
  import SchemaSetting from './SchemaSetting.svelte'

  export let blocks: Shopify.Schema['blocks']

  $: blocks
</script>
