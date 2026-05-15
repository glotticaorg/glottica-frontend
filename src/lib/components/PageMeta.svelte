<script lang="ts">
const {
	title = '',
	description = ''
}: { title?: string; description?: string } = $props();
const fullTitle = $derived(title ? `Glottica — ${title}` : 'Glottica');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	<meta property="og:title" content={fullTitle} />
</svelte:head>
