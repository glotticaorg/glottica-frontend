<script lang="ts">
import { page } from '$app/stores';
const {
	title = '',
	description = ''
}: { title?: string; description?: string } = $props();
const fullTitle = $derived(title ? `Glottica · ${title}` : 'Glottica');
const canonical = $derived($page.url ? `${$page.url.origin}${$page.url.pathname}` : null);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	{#if canonical}<link rel="canonical" href={canonical} />{/if}
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	<meta property="og:title" content={fullTitle} />
</svelte:head>
