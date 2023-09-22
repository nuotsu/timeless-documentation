{#await getContent('CHANGELOG.md', /(\t|^#.+\n)/g)}
	Loading changelog...
{:then changelog}
	{@html parse(changelog || '')}
{/await}

<script lang="ts">
	import { getContent } from './getGitHub'
	import { parse } from 'marked'
</script>
